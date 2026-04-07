# Fastfetch Config Maker

A web-based configuration generator for [fastfetch](https://github.com/fastfetch-cli/fastfetch) - the neofetch-like system information tool.

## Features

- **Visual Configuration** - Configure logo, display settings, modules, and colors through an intuitive interface
- **All 74 Modules** - Access to all fastfetch modules with drag-and-drop reordering
- **Color Presets** - Quick theme application with Nord, Dracula, Gruvbox, and more
- **Live Preview** - See the generated JSON configuration in real-time
- **Import/Export** - Load existing configs or download your creation
- **Test Output** - Download config and test in your terminal

## Quick Start

### Option 1: Hosted Version (GitHub Pages)

The app is automatically deployed to GitHub Pages when pushed to the `gh-pages` branch.

**Current deployment:** https://yourusername.github.io/ffconfigmaker/

To set up your own deployment:

1. Fork this repository
2. Go to repository **Settings** > **Pages**
3. Set **Source** to `gh-pages` branch
4. Your app will be available at `https://yourusername.github.io/repo-name/`

### Option 2: Local Development

Simply open the HTML file in your browser:

```bash
# Clone the repository
git clone https://github.com/yourusername/ffconfigmaker.git
cd ffconfigmaker/dist

# Open in browser
xdg-open index.html  # Linux
open index.html       # macOS
start index.html      # Windows
```

### Option 3: Local Server with Test Output

For the embedded terminal test output feature, run a local Node.js server:

```bash
# From the root directory
node server.js

# Open in browser
xdg-open http://localhost:8080
```

## Usage

1. **Configure** - Use the sidebar to navigate through Logo, Display, Modules, Colors, and General settings
2. **Preview** - The generated JSON configuration updates in real-time on the right panel
3. **Test** - Click "Test Output" to download your config and run it in your terminal
4. **Export** - Download the config file or copy it to clipboard
5. **Install** - Save the config to `~/.config/fastfetch/config.jsonc`

## Configuration Location

After downloading your config, save it to:

- **Linux/macOS:** `~/.config/fastfetch/config.jsonc`
- **Windows:** `%USERPROFILE%\.config\fastfetch\config.jsonc`

## Testing Your Config

```bash
# Test with the generated config
fastfetch --config /path/to/config.jsonc

# Or pipe to a file and edit
fastfetch --gen-config > ~/.config/fastfetch/config.jsonc
```

## Development

### Project Structure

```
ffconfigmaker/
├── dist/
│   └── index.html      # Main application (standalone HTML)
├── server.js           # Node.js server for embedded terminal
├── src/                # (Optional) Source files for build process
└── README.md
```

### Building

The application is a single standalone HTML file. No build process required.

To update:
1. Edit `dist/index.html`
2. Commit and push to deploy

### Adding New Features

The app uses:
- Vanilla JavaScript (no framework)
- xterm.js for terminal emulation
- CSS variables for theming

## License

MIT License - Feel free to use and modify for your own projects.

## Acknowledgments

- [fastfetch](https://github.com/fastfetch-cli/fastfetch) - The amazing system info tool
- [xterm.js](https://xtermjs.org/) - Terminal emulator for the web
