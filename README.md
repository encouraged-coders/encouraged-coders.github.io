# Encouraged Coders — Hugo (toha) site (Hugo Modules)

This scaffold uses **Hugo Modules** to pull the **toha** theme.

## Prerequisites
- Hugo (extended)
- Git

## Setup

```bash
# in the project root
hugo mod init encouraged-coders.local
hugo mod get github.com/hugo-toha/toha@latest
hugo server -D
```

Open http://localhost:1313 to preview.

### Notes
- Edit texts in `data/en/sections/*.yaml`.
- Replace the logo at `static/img/encouraged-coders-mark.png`.
- The site centers a single mission and a single service:
  - **Mission**: Encouragement (belonging, courage, contribution) through **living specifications**.
  - **Service**: Workshops & coaching to implement **docs-as-code** and written communication practices.
  - **Toolbox**: Skills/methods appear as supporting elements.