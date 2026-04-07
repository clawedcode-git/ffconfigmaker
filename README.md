# Fastfetch Config Maker

A web-based configuration generator for [fastfetch](https://github.com/fastfetch-cli/fastfetch) - the neofetch-like system information tool.

## Live Demo

🚀 **Hosted on GitHub Pages:** https://yourusername.github.io/ffconfigmaker/

*(Replace `yourusername` with your GitHub username after forking/deploying)*

## Features

- **Visual Configuration** - Configure logo, display settings, modules, and colors
- **All 74 Modules** - Access to all fastfetch modules with drag-and-drop reordering
- **Color Presets** - Nord, Dracula, Gruvbox, Solarized, Monokai, GitHub, Catppuccin
- **Live Preview** - See the generated JSON configuration in real-time
- **Import/Export** - Load existing configs or download your creation
- **Responsive** - Works on desktop and mobile

## Quick Start

### Open Directly in Browser

```bash
# Clone and open
git clone https://github.com/yourusername/ffconfigmaker.git
cd ffconfigmaker
xdg-open index.html  # Linux
open index.html       # macOS
start index.html     # Windows
```

### Deploy to GitHub Pages

1. **Fork this repository**

2. **Go to Settings → Pages**
   - Source: `Deploy from a branch`
   - Branch: `main` (or your default branch)
   - Folder: `/ (root)`

3. **Wait 1-2 minutes** for deployment

4. **Access your site** at `https://yourusername.github.io/ffconfigmaker/`

## Usage

1. **Navigate** using the sidebar (Logo, Display, Modules, Colors, General)
2. **Configure** your fastfetch settings
3. **Preview** the generated JSON in real-time
4. **Test** - Click "Test Output" → "Open in Terminal" to download and test
5. **Export** - Download the config file or copy to clipboard
6. **Install** - Save to `~/.config/fastfetch/config.jsonc`

## Install Config

After downloading your config:

```bash
# Linux/macOS
mv fastfetch-config.json ~/.config/fastfetch/config.jsonc

# Or copy content
cat fastfetch-config.json > ~/.config/fastfetch/config.jsonc
```

## Local Server (Optional)

For the embedded terminal preview feature:

```bash
cd ffconfigmaker
node dist/server.js
# Open http://localhost:8080
```

## Project Structure

```
ffconfigmaker/
├── index.html          # Standalone HTML app
├── server.js           # Local Node.js server
└── dist/               # GitHub Pages deployment files
    ├── index.html
    ├── server.js
    ├── README.md
    └── .nojekyll
```

## Tech Stack

- Vanilla JavaScript (no framework)
- xterm.js for terminal emulation
- CSS variables for theming
- No build process required

## Contributing

1. Fork the repository
2. Edit `index.html`
3. Commit and push
4. (Optional) Deploy to GitHub Pages via Settings

## License

MIT

## Acknowledgments

- [fastfetch](https://github.com/fastfetch-cli/fastfetch) - Amazing system info tool
- [xterm.js](https://xtermjs.org/) - Terminal emulator for the web
