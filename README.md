# Resume Template

A modern, dynamic CV/Resume template built with HTML, CSS, and JavaScript. This template features a clean, professional design with completely customizable content through JSON configuration files. No coding required - just edit the config file!

## Features

- **🎨 Responsive Design**: Works perfectly on desktop and mobile devices
- **🖨️ Print-Friendly**: Optimized for PDF generation with proper background colors
- **⚡ 100% Dynamic Content**: Everything is configurable through JSON - no hardcoded text
- **🌍 Multi-Language Support**: Easy internationalization with configurable labels
- **📱 Professional Layout**: Clean sidebar with main content area
- **🎯 Flexible Section Ordering**: Arrange sections to emphasize what matters most
- **🏆 Custom Sections**: Add certifications, projects, awards, or any section you need
- **🔧 Multiple Section Types**: List, detailed, and grid layouts for custom content
- **🎨 Gradient Design**: Modern gradient backgrounds and visual elements
- **📊 Skill Visualization**: Interactive dot-based skill level indicators
- **🛠️ Software Tags**: Dynamic software/tools display

## File Structure

```
Resume/
├── cv.html                     # Main HTML file (template)
├── styles.css                  # All CSS styling
├── script.js                   # JavaScript functionality
├── config/
│   ├── config.template.json    # Template configuration file
│   └── config.json             # Your personal configuration (create from template)
├── images/                     # Profile images and other assets
└── README.md                   # This documentation
```

## Quick Start

### 1. Initial Setup

1. **Copy the template configuration file**:
   ```bash
   cp config/config.template.json config/config.json
   ```

2. **Add your profile photo**:
   - Place your photo in the `images/` directory
   - Update the `profileImage` path in your config

3. **Edit your information**:
   - Open `config/config.json`
   - Update with your personal details, skills, experience, etc.

4. **Open in browser**:
   - Simply open `cv.html` in your web browser
   - Your resume will load dynamically!

## Configuration Guide

### Personal Information
```json
"personal": {
  "name": "Your Full Name",
  "title": "Your Job Title",
  "bio": "Your professional biography..."
}
```

### Contact Methods (Fully Customizable)
```json
"contactMethods": [
  {
    "type": "email",
    "label": "Email:",
    "value": "your@email.com"
  },
  {
    "type": "linkedin", 
    "label": "LinkedIn:",
    "value": "linkedin.com/in/yourprofile"
  }
]
```

### Section Labels (Multi-Language Support)
```json
"sectionLabels": {
  "contact": "Contact",
  "skills": "Skills",
  "software": "Software",
  "education": "Education", 
  "experience": "Work Experience"
}
```

### Section Ordering (Emphasize What Matters)
```json
"sectionOrder": ["experience", "education", "certifications"]
```

**Popular configurations:**
- **Experienced professionals**: `["experience", "education"]`
- **Recent graduates**: `["education", "experience"]` 
- **Career changers**: `["certifications", "experience", "education"]`

### Theme & Styling
```json
"theme": {
  "colors": {
    "primary": "#667eea",
    "secondary": "#764ba2",
    "sidebarBackground": "#2d3748",
    "textPrimary": "#333",
    "textSecondary": "#666"
  },
  "fontFamily": "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
}
```
*All theme properties are optional. Background gradient and tag colors are auto-generated from primary/secondary colors.*

### Skills with Visual Ratings
```json
"skills": {
  "programming": 4,
  "leadership": 5,
  "design": 3
},
"skillLabels": {
  "programming": "Programming",
  "leadership": "Team Leadership", 
  "design": "UI/UX Design"
}
```

### Education & Experience
```json
"education": [
  {
    "degree": "Bachelor of Computer Science",
    "school": "University Name, Location",
    "period": "2020-2024",
    "highlights": [
      "<strong>Specialization:</strong> Software Engineering",
      "<strong>GPA:</strong> 3.8/4.0"
    ]
  }
]
```

### Custom Sections (Unlimited Flexibility)

#### Certifications (List Type)
```json
{
  "id": "certifications",
  "title": "Certifications",
  "type": "list",
  "items": [
    {
      "name": "AWS Certified Solutions Architect",
      "date": "2024",
      "description": "Cloud architecture and deployment"
    }
  ]
}
```

#### Projects (Detailed Type)
```json
{
  "id": "projects", 
  "title": "Key Projects",
  "type": "detailed",
  "items": [
    {
      "title": "E-commerce Platform",
      "subtitle": "Lead Developer - 2024",
      "description": "Built scalable e-commerce solution",
      "highlights": [
        "Improved performance by 40%",
        "Reduced costs by $50k annually"
      ]
    }
  ]
}
```

#### Additional Skills (Grid Type)
```json
{
  "id": "languages",
  "title": "Languages", 
  "type": "grid",
  "items": ["English (Native)", "Spanish (Fluent)", "French (Basic)"]
}
```

## Skill Levels

Skills are rated on a scale of 1-5:
- **1** = Beginner
- **2** = Basic  
- **3** = Intermediate
- **4** = Advanced
- **5** = Expert

## Advanced Features

### Multi-Language Versions

Create different language versions:
```bash
# English version
cp config/config.template.json config/config-en.json

# Spanish version  
cp config/config.template.json config/config-es.json

# German version
cp config/config.template.json config/config-de.json
```

Then modify the script to load different configs based on URL parameters or user selection.

### Custom Section Types

The template supports three built-in section types:

1. **List**: Perfect for certifications, awards, languages
2. **Detailed**: Ideal for projects, publications, speaking engagements  
3. **Grid**: Great for additional skills, tools, technologies

### Print/PDF Generation

1. Open your resume in the browser
2. Press `Ctrl+P` (or `Cmd+P` on Mac)
3. Select "Save as PDF" 
4. **Important**: Enable "Background graphics" for proper colors
5. Recommended: Use A4 paper size

## Customization

### Theme Configuration

You can completely customize the appearance of your resume by adding a `theme` section to your `config.json`. The theme supports:

**Colors:**
- `primary`: Primary color (used for background gradient and tags/dots)
- `secondary`: Secondary color (used for background gradient and tags/dots)
- `sidebarBackground`: Sidebar background color
- `textPrimary`: Main text color
- `textSecondary`: Secondary text color
- `tagPrimary`: _(Optional)_ Override primary color specifically for tags/dots
- `tagSecondary`: _(Optional)_ Override secondary color specifically for tags/dots

**Typography:**
- `fontFamily`: Custom font family (use web-safe fonts or Google Fonts)

**Background:**
- `backgroundGradient`: _(Optional)_ Custom CSS gradient (auto-generated from primary/secondary if omitted)

**Simple theme configuration:**
```json
{
  "theme": {
    "colors": {
      "primary": "#4a90e2",
      "secondary": "#7b68ee",
      "sidebarBackground": "#1a202c",
      "textPrimary": "#2d3748",
      "textSecondary": "#718096"
    },
    "fontFamily": "'Inter', 'Helvetica Neue', Arial, sans-serif"
  }
}
```

**Advanced configuration (separate tag colors):**
```json
{
  "theme": {
    "colors": {
      "primary": "#4a90e2",
      "secondary": "#7b68ee",
      "sidebarBackground": "#1a202c",
      "textPrimary": "#2d3748",
      "textSecondary": "#718096",
      "tagPrimary": "#e53e3e",
      "tagSecondary": "#c53030"
    },
    "fontFamily": "'Inter', 'Helvetica Neue', Arial, sans-serif",
    "backgroundGradient": "radial-gradient(circle at top right, #667eea 0%, #764ba2 100%)"
  }
}
```

**Popular Color Schemes:**

*Blue Professional:*
```json
"colors": {
  "primary": "#2563eb",
  "secondary": "#1d4ed8",
  "sidebarBackground": "#1e3a8a",
  "textPrimary": "#1f2937",
  "textSecondary": "#6b7280"
}
```

*Green Fresh:*
```json
"colors": {
  "primary": "#059669",
  "secondary": "#047857",
  "sidebarBackground": "#064e3b",
  "textPrimary": "#111827",
  "textSecondary": "#6b7280"
}
```

*Purple Creative:*
```json
"colors": {
  "primary": "#7c3aed",
  "secondary": "#6d28d9",
  "sidebarBackground": "#581c87",
  "textPrimary": "#1f2937",
  "textSecondary": "#6b7280"
}
```

**Smart Defaults:** If you only specify `primary` and `secondary` colors, the system will:
- Auto-generate a background gradient using those colors
- Use the same colors for software tags and skill dots
- This keeps your config clean while maintaining full customization power

**Print-Friendly Note:** The background gradient won't appear when printing, but the tag colors (software tags and skill dots) will remain visible and customizable.

### Adding New Section Types

1. Add your section type to the `setCustomSections()` function in `script.js`
2. Create corresponding CSS styles in `styles.css`
3. Update this README with examples

### Layout Modifications

- **Sidebar sections**: Contact, Skills, Software (fixed)
- **Main sections**: Education, Experience, Custom sections (configurable order)
- **Header**: Personal information (always at top)

## Common Use Cases

### For Different Career Stages

**🎓 Recent Graduate**:
```json
"sectionOrder": ["education", "experience", "projects", "certifications"]
```

**💼 Experienced Professional**:
```json  
"sectionOrder": ["experience", "certifications", "education"]
```

**🔄 Career Changer**:
```json
"sectionOrder": ["certifications", "projects", "experience", "education"] 
```

### For Different Industries

**👨‍💻 Software Developer**:
- Add: Projects, Open Source Contributions, Technical Certifications

**🎨 Designer**:
- Add: Portfolio Projects, Design Awards, Creative Tools

**📊 Business Professional**:
- Add: Achievements, Leadership Experience, Business Certifications

**🔬 Researcher**:
- Add: Publications, Research Projects, Academic Honors

## Troubleshooting

### Configuration Not Loading
- Ensure `config/config.json` exists
- Check browser console for error messages
- Validate JSON syntax using an online JSON validator

### Images Not Displaying  
- Verify image file exists in `images/` directory
- Check file path in config matches actual filename
- Ensure image format is supported (JPG, PNG, GIF)

### Sections Not Appearing
- Check `sectionOrder` array includes your section IDs
- Verify custom section `id` matches what's in `sectionOrder`
- Ensure section has valid `items` array

### Print/PDF Issues
- Enable "Background graphics" in print settings
- Use A4 paper size for best results
- Check print preview before generating PDF

## Security & Privacy

⚠️ **Important**: Your `config/config.json` contains personal information!

- Add `config/config.json` to `.gitignore` if using version control
- Only share template files, never your personal config
- Keep personal information private when sharing code

## Browser Compatibility

- ✅ Chrome/Chromium (recommended)
- ✅ Firefox  
- ✅ Safari
- ✅ Edge
- ⚠️ Internet Explorer not supported

## Contributing

Found a bug or want to add a feature? 

1. Fork the repository
2. Create your feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This template is open source and available under the MIT License.

---

**Built with ❤️ for professionals who want beautiful, customizable resumes without the hassle of coding.**