const fs = require("fs");
const path = require("path");

// The folder non-technical members actually edit. It lives at the project
// root (not inside src/) so it's the first thing anyone sees in the repo.
const OPPORTUNITIES_DIR = path.join(__dirname, "..", "..", "opportunities");

module.exports = () => {
  if (!fs.existsSync(OPPORTUNITIES_DIR)) {
    return [];
  }

  const files = fs
    .readdirSync(OPPORTUNITIES_DIR)
    .filter((file) => file.endsWith(".json") && file !== "_template.json");

  const listings = files
    .map((file) => {
      const fullPath = path.join(OPPORTUNITIES_DIR, file);
      try {
        const raw = fs.readFileSync(fullPath, "utf8");
        const data = JSON.parse(raw);
        return { ...data, _sourceFile: file };
      } catch (err) {
        console.warn(
          `[opportunities] Skipping "${file}" - it doesn't look like valid JSON yet. ` +
            `Compare it against _template.json. (${err.message})`
        );
        return null;
      }
    })
    .filter(Boolean);

  // Soonest deadline first
  listings.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));

  return listings;
};
