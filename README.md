# Avinash Parmar — Portfolio v1.0.0

A dark, cinematic personal portfolio website built with vanilla HTML, CSS, and JavaScript.

## 📁 Project Structure

```
avinash-parmar-portfolio/
├── index.html                          ← Main portfolio page
├── css/
│   └── style.css                       ← All styles
├── js/
│   └── main.js                         ← All interactions & animations
├── assets/
│   ├── video/
│   │   └── hero.mp4                    ← Hero background video
│   └── docs/
│       └── Avinash-Parmar-Resume.pdf   ← Resume (view & download)
└── README.md
```

## 🚀 How to Run

1. **Unzip** the folder anywhere on your computer
2. **Open** `index.html` in any modern browser (Chrome, Firefox, Edge, Safari)
3. The video and resume PDF will load automatically from the local files

> ⚠️ **Note:** Some browsers block local file loading. If the PDF doesn't show, right-click `index.html` → Open With → Chrome.

## 🌐 Hosting (Free Options)

### GitHub Pages
```bash
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/akavinashparmar2006/portfolio.git
git push -u origin main
# Enable GitHub Pages in repo Settings → Pages → Deploy from main branch
```

### Netlify (Drag & Drop)
1. Go to https://netlify.com
2. Drag the entire unzipped folder into the Netlify dashboard
3. Your site goes live instantly with a free URL

### Vercel
```bash
npm i -g vercel
vercel --yes
```

## ✏️ Customisation

| What to change | Where |
|---|---|
| Name, bio, description | `index.html` — hero & about sections |
| Social / contact links | `index.html` — `hero-socials` & contact panel |
| GitHub project links | `index.html` — `proj-btn-github` href attributes |
| Live demo links | `index.html` — `proj-btn-demo` href attributes |
| Skill percentages | `index.html` — `data-w` attributes on `.bar-fill` |
| Colors & fonts | `css/style.css` — `:root` variables |
| Hero video | Replace `assets/video/hero.mp4` with your own video |
| Resume PDF | Replace `assets/docs/Avinash-Parmar-Resume.pdf` |

## 🛠️ Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript** — IntersectionObserver, scroll animations
- **Google Fonts** — Almarai + Instrument Serif
- No frameworks, no build tools, no dependencies

## 📞 Contact

- **Email:** akavinashparmar@gmail.com
- **Phone:** +91 7033980391
- **GitHub:** github.com/akavinashparmar2006
- **LinkedIn:** linkedin.com/in/avinash-parmar
- **LeetCode:** leetcode.com/u/akavinashparmar2006
