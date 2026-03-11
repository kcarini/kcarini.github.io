# kiricarini.com

Personal site built with [Hugo](https://gohugo.io/) and the [Blowfish](https://blowfish.page/) theme.

## Local development

1. Install [Hugo (Extended)](https://gohugo.io/installation/) (v0.141.0+).
2. Clone and run:

   ```bash
   git clone https://github.com/kcarini/kcarini.github.io.git
   cd kcarini.github.io
   hugo server
   ```

3. Open http://localhost:1313. Hugo will download the Blowfish theme on first run.

## Deploy

Pushing to `main` triggers GitHub Actions, which builds the site and deploys to GitHub Pages. In repo **Settings → Pages**, set **Source** to **GitHub Actions**.

## Content

- **Homepage**: `content/_index.md` (hero + intro)
- **Blog**: add markdown files under `content/posts/`
- **Projects**: add markdown under `content/projects/`
- **CV**: edit `content/cv.md`; put your PDF in `static/` as `kiri-carini-resume.pdf`

## Images

Place hero and profile images in `assets/` (see `assets/README.md`). Custom domain is set via `static/CNAME` (kiricarini.com).
