# Resume Template

A modern, dynamic CV/Resume template built with HTML, CSS, and JavaScript. This template features a clean, professional design with completely customizable content through JSON configuration files. No coding required - just edit the config file!

## Example Resume

**[📄 View PDF Example](images/example-resume.pdf)** - See the complete one-page resume generated from the example configuration.

## Quick Start

### Option 1: Visual Configuration Builder (Recommended)

1. **Open the configuration builder**: Open `config-builder.html` in your browser
2. **Fill in your information**: Use the visual form interface to input your details
3. **See live preview**: Watch your resume update in real-time
4. **Download your config**: Save your configuration file when done
5. **View your resume**: Open `cv.html` in your browser

### Option 2: Manual Configuration

1. **Copy the example**:
   ```bash
   cp config/example-config.json config/config.json
   ```
2. **Edit your information**: Open `config/config.json` and update with your details
3. **Add your photo**: Place your photo in the `images/` directory and update the `profileImage` path
4. **View your resume**: Open `cv.html` in your browser

### Generate PDF

1. Open `cv.html` in your browser
2. Press `Ctrl+P` (or `Cmd+P` on Mac)
3. Select "Save as PDF"
4. **Important**: Enable "Background graphics" for proper colors
5. Save your professional PDF resume

> **📖 Need more detailed instructions?** See the [complete usage guide](USAGE.md) for advanced configuration, theme customization, troubleshooting, and best practices.

## Features

All content is controlled through `config/config.json`. Key sections include:

- **Personal Info**: Name, title, bio, profile image
- **Contact Methods**: Email, phone, LinkedIn, GitHub, etc.
- **Skills**: Rated 1-5 with visual dots
- **Software**: Tags for technologies and tools
- **Education & Experience**: Standard resume sections
- **Custom Sections**: Certifications, projects, awards, etc.
- **Theme**: Colors, fonts, and styling

## File Structure

```
Resume/
├── cv.html                     # Main resume template
├── config-builder.html         # Visual configuration builder
├── example-resume.pdf          # Example PDF output
├── USAGE.md                    # Detailed usage guide
├── config/
│   ├── config.template.json    # Template configuration
│   ├── example-config.json     # Example with sample data
│   └── config.json             # Your personal configuration
└── images/                     # Profile images and assets
```

## License

This template is open source and available under the MIT License.

---

**Built with ❤️ for professionals who want beautiful, customizable resumes without the hassle of coding.**