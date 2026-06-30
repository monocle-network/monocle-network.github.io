```markdown
# Documentation & Content Management Guide

This repository functions as a static website powered by Jekyll and hosted via GitHub Pages. The layout and navigation menus are fully automated; the site builds itself dynamically by scanning the file structure and reading the metadata inside your Markdown files.

---

## 1. Directory Structure

To keep the repository maintainable, use categorized folders rather than dumping all files into the root. 

* **Root Folder (`/`)**: Reserved for system configuration, layouts, and global landing pages (e.g., `index.md`, `about.md`, `contact.md`).
* **Subfolders (e.g., `/posts/`, `/contests/`)**: Used to group related content files logically.

```text
.
├── _config.yml          # Global settings & default layouts
├── _layouts/            # HTML structural templates
├── _includes/           # Reusable code blocks (Navigation engine)
├── assets/              # CSS stylesheets and media files
├── index.md             # The main website homepage
├── about.md             # Standard root page
└── posts/               # Categorized content folder
    ├── post1.md         # Individual article file
    └── post2.md         # Individual article file

```

---

## 2. Document Setup (Front Matter)

Every Markdown (`.md`) file you create **must** begin with a Front Matter block. This block is enclosed by triple-dashed lines (`---`) and instructs Jekyll how to process the file and display it in the navigation bar.

### Visible Page Example

To make a page appear in the flat navigation menu, provide a `title`. You can optionally control its horizontal position using `nav_order`.

```yaml
---
layout: default
title: "Our Services"
nav_order: 2
---
# Document content starts here

```

### Hidden/Draft Page Example

If you want to publish a page so it has a live URL but remains hidden from the main navigation menu, explicitely pass `nav_exclude: true`.

```yaml
---
layout: default
title: "Hidden Landing Page"
nav_exclude: true
---
# Document content starts here

```

### Front Matter Parameter Breakdown

| Parameter | Type | Description |
| --- | --- | --- |
| `layout` | String | Always set to `default` unless a custom layout is added to `_layouts/`. |
| `title` | String | The exact text that will appear in the navigation bar and browser tab. |
| `nav_order` | Integer | Optional. Lower numbers (e.g., `1`, `2`) appear first in the menu from left to right. |
| `nav_exclude` | Boolean | Set to `true` to hide the file from the automated menu completely. |

---

## 3. Creating Cross-Links Between Pages

**Never link directly to a file name** (e.g., `[About](about.md)`). This syntax will cause broken `404 Not Found` errors on the live website because Jekyll transforms `.md` files into neat URL directories during compilation.

### The Standard Linking Syntax

Always route your internal links through Jekyll's `relative_url` filter using the compiled URL path. This guarantees links remain valid even if the domain structure or repository subdirectory changes.

Use the following syntax patterns within your content:

#### 1. Linking to a Root-Level Page

If the file is `about.md` located directly in the root directory:

```markdown
Learn more [About Our Team]({{ '/about/' | relative_url }}).

```

#### 2. Linking to a Subfolder Page

If the file is `post1.md` located inside the `posts/` folder:

```markdown
Read our latest article: [Introduction to Jekyll]({{ '/posts/post1/' | relative_url }}).

```

#### 4. Linking back to the Homepage

To link directly back to the main landing page (`index.md`):

```markdown
Return to the [Main Homepage]({{ '/' | relative_url }}).

```

#### 5. Linking to a Specific Heading (Anchor Links)

To link to a specific section inside another page, append the lowercase, hyphenated heading ID to the end of the URL path:

```markdown
Jump straight to our [Metadata Rules]({{ '/README.html#2-document-setup-front-matter' | relative_url }}).

```

---

## 4. Content Checklist for Contributors

Before committing and pushing new content to the repository, verify the following:

1. [ ] The file extension is strictly `.md`.
2. [ ] The file begins with valid Front Matter wrapped in `---`.
3. [ ] If the page should be visible in the navbar, a `title` is defined.
4. [ ] If the page should be hidden, `nav_exclude: true` is included.
5. [ ] All internal links utilize the `{{ '/path/' | relative_url }}` structure.
6. [ ] No internal links contain a raw `.md` file extension inside the bracket URL.

```

```
