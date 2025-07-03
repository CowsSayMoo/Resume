# Resume Template

A modern, dynamic CV/Resume template built with HTML, CSS, and JavaScript. The template features a clean, professional design with customizable content through a JSON configuration file.

## Features

- **Responsive Design**: Works on desktop and mobile devices
- **Print-Friendly**: Optimized for PDF generation with proper background colors
- **Dynamic Content**: All personal information, skills, and software tools are loaded from a configuration file
- **Professional Layout**: Clean sidebar with main content area
- **Gradient Design**: Modern gradient backgrounds and visual elements
- **Skill Visualization**: Interactive dot-based skill level indicators
- **Software Tags**: Dynamic software/tools display

## File Structure

```
├── cv.html                     # Main HTML file
├── styles.css                  # All CSS styling
├── script.js                   # JavaScript functionality
├── config/
│   ├── config.template.json    # Template configuration file
│   └── config.json             # Your personal configuration (create from template)
├── images/                     # Profile images and other assets
└── README.md                   # This file
```

## Setup Instructions

### 1. Initial Setup

1. **Copy the template configuration file**:
   ```bash
   cp config/config.template.json config/config.json
   ```

2. **Edit your personal information**:
   Open `config/config.json` and update it with your personal details, skills, and software tools.

### 2. Configuration File Structure

The `config/config.json` file should contain:

```json
{
  "address": "Your address",
  "phone": "Your phone number",
  "email": "your.email@example.com",
  "github": "github.com/yourusername",
  "behance": "behance.net/yourusername",
  "profileImage": "images/your-photo.jpg",
  "skills": {
    "networking": 4,
    "scripting": 4,
    "devops": 5,
    "cloud": 4,
    "security": 3
  },
  "skillLabels": {
    "networking": "Networking",
    "scripting": "Scripting en Automatisering",
    "devops": "DevOps",
    "cloud": "Cloud Computing",
    "security": "Cybersecurity"
  },
  "software": [
    "Docker",
    "Kubernetes",
    "Linux",
    "Python",
    "Git"
  ]
}
```

### 3. Skill Levels

Skills are rated on a scale of 1-5:
- 1 = Beginner
- 2 = Basic
- 3 = Intermediate
- 4 = Advanced
- 5 = Expert

### 4. Adding Your Photo

1. Place your profile photo in the `images/` directory
2. Update the `profileImage` field in `config/config.json` with the relative path to your image (e.g., `"images/profile.jpg"`)
3. Recommended image size: 170x170 pixels (square format)

### 5. Viewing Your Resume

Simply open `cv.html` in your web browser. The JavaScript will automatically load your configuration and populate the resume with your information.

## Customization

### Modifying Content

- **Personal Information**: Edit the HTML content directly in `cv.html`
- **Styling**: Modify `styles.css` to change colors, fonts, or layout
- **Functionality**: Update `script.js` to add new features or modify existing behavior

### Color Scheme

The template uses a purple gradient theme. To change colors, modify the CSS variables and gradient definitions in `styles.css`.

## Print/PDF Generation

The template is optimized for printing to PDF:
1. Open the resume in your browser
2. Press `Ctrl+P` (or `Cmd+P` on Mac)
3. Select "Save as PDF" as the destination
4. Ensure "Background graphics" is enabled for proper colors

## Troubleshooting

### Configuration Not Loading

If your personal information doesn't appear:
1. Ensure `config/config.json` exists in the config directory
2. Check the browser console for any error messages
3. Verify the JSON syntax is valid

### Images Not Displaying

1. Check the file path in `config/config.json` is correct (should start with `images/`)
2. Ensure the image file exists in the `images/` directory
3. Use relative paths from the root directory (e.g., `images/photo.jpg`)

## File Locations

**Important**: 
- Keep `config/config.json` in the config directory for the template to work properly
- Place all images in the `images/` directory
- The main HTML, CSS, and JS files should remain in the root directory

## Security Note

The `config/config.json` file contains your personal information. If you're hosting this publicly or sharing the code, make sure to:
- Add `config/config.json` to your `.gitignore` file
- Only share the template files (`config/config.template.json`, not `config/config.json`)
- Keep your personal `config/config.json` file private