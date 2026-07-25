const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // Copy static assets straight through to the output folder
  eleventyConfig.addPassthroughCopy("src/assets");

  // Friendly date filter for templates, e.g. {{ opportunity.deadline | niceDate }}
  eleventyConfig.addFilter("niceDate", (isoDate) => {
    return DateTime.fromISO(isoDate).toFormat("LLLL d, yyyy");
  });

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Nunjucks' built-in "slice" filter splits an array into N groups, not the
  // first N items — this is the filter we actually want for "show the next
  // 3 opportunities" on the home page.
  eleventyConfig.addFilter("limit", (arr, count) => (arr || []).slice(0, count));

  eleventyConfig.addFilter("absoluteUrl", (path, base) => {
    try {
      const cleanBase = String(base).replace(/\/$/, "");
      const cleanPath = String(path).startsWith("/") ? path : `/${path}`;
      return `${cleanBase}${cleanPath}`;
    } catch (err) {
      return path;
    }
  });

  // Watch the opportunities folder so `npx eleventy --serve` rebuilds
  // automatically whenever someone adds/edits/removes a listing.
  eleventyConfig.addWatchTarget("opportunities");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    // Set PATH_PREFIX=/tabeebna-website/ in the GitHub Actions workflow if
    // deploying to https://<user>.github.io/tabeebna-website/ without a
    // custom domain. Leave unset once the tabeebna.bh domain is connected.
    pathPrefix: process.env.PATH_PREFIX || "/",
  };
};
