# How to add or remove an opportunity

You do **not** need to know how to code to update this page. You just need to add or delete a file in this folder.

## Adding a new opportunity

1. Copy the file called `_template.json`.
2. Rename your copy to something short that describes the listing, like `winter-workshop-2027.json`. Use dashes instead of spaces, and don't reuse a name that's already in this folder.
3. Open your new file and fill in the blanks between the quote marks. Don't delete any of the quote marks, commas, or curly brackets `{ }` — just replace the text.

Here's what each line means:

| Field | What to put there |
|---|---|
| `title` | The name of the opportunity, e.g. `"Spring Shadowing Program"` |
| `description` | One or two friendly sentences explaining what it is and who it's for |
| `deadline` | The application deadline, written as `"YYYY-MM-DD"` (year-month-day). Example: March 5th, 2027 is `"2027-03-05"` |
| `applyLink` | The full link to the application form, starting with `https://` |
| `category` | One word or short phrase, e.g. `"Internship"`, `"Workshop"`, or `"Event"` |

4. Save the file. That's it — the website automatically finds every file in this folder and adds it as a card on the Programs/Opportunities page, and it will always show the soonest deadline first.

## Removing an opportunity

Just delete that listing's file from this folder. Don't delete `_template.json` — keep that one around so it's easy to make the next listing.

## A few things to double check before saving

- Every listing needs its own file. Don't add two opportunities to one file.
- The deadline must be written as `"2027-03-05"`, not `"March 5"` or `"5/3/27"` — otherwise the sorting won't work correctly.
- Make sure every piece of text is wrapped in quote marks `" "`, and every line except the last one ends with a comma `,`.
- If you're not sure you got the formatting right, open the file after saving and compare it side-by-side with `_template.json` — the shape should look identical, just with your own words in place.

If a listing ever looks broken on the live site, it's almost always a missing comma or quote mark in one of these files — check the most recently added one first.
