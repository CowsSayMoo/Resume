# Resume Template

A modern, dynamic CV/Resume template built with HTML, CSS, and JavaScript. This template features a clean, professional design with completely customizable content through JSON configuration files. No coding required - just edit the config file!

## Example Resume

![Example Resume](images/example-resume.png)

**[📄 View PDF Example](example-resume.pdf)** - See the complete one-page resume generated from the example configuration.

## Quick Start

1. **Copy the example**:
   ```bash
   cp config/example-config.yaml config/config.yaml
   ```
2. **Edit your information**: Open `config/config.yaml` and update with your details
3. **Add your photo**: Place your photo in the `images/` directory and update the `profileImage` path
4. **View your resume**: Open `cv.html` in your browser

### Generate PDF

1. Open `cv.html` in your browser
2. Press `Ctrl+P` (or `Cmd+P` on Mac)
3. Select "Save as PDF"
4. **Important**: Enable "Background graphics" for proper colors
5. Save your professional PDF resume

## Features

- **🎨 Responsive Design**: Works perfectly on desktop and mobile devices
- **🖨️ Print-Friendly**: Optimized for PDF generation with proper background colors
- **⚡ 100% Dynamic Content**: Everything is configurable through YAML - no hardcoded text
- **🌍 Multi-Language Support**: Easy internationalization with configurable labels
- **🎯 Flexible Section Ordering**: Arrange sections to emphasize what matters most
- **🏆 Custom Sections**: Add certifications, projects, awards, or any section you need
- **📊 Skill Visualization**: Interactive dot-based skill level indicators
- **🛠️ Software Tags**: Dynamic software/tools display

## Configuration

All content is controlled through `config/config.yaml`. Key sections include:

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
├── script.js                   # Resume functionality
├── styles.css                  # Styling and layout
├── USAGE.md                    # Detailed usage guide
├── config/
│   ├── config.template.yaml    # Template configuration
│   ├── example-config.yaml     # Example with sample data
│   └── config.yaml             # Your personal configuration
└── images/                     # Profile images and assets
```

> **📖 Need more detailed instructions?** See the [complete usage guide](USAGE.md) for advanced configuration, theme customization, troubleshooting, and best practices.

## License

This template is open source and available under the MIT License.

---

**Built with ❤️ for professionals who want beautiful, customizable resumes without the hassle of coding.**