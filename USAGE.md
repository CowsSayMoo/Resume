# Usage Guide

This guide provides detailed instructions for customizing and using the Resume Template.

## Table of Contents

- [Configuration Overview](#configuration-overview)
- [Personal Information](#personal-information)
- [Contact Methods](#contact-methods)
- [Skills Configuration](#skills-configuration)
- [Education & Experience](#education--experience)
- [Custom Sections](#custom-sections)
- [Theme Customization](#theme-customization)
- [Section Ordering](#section-ordering)
- [Multi-Language Support](#multi-language-support)
- [Advanced Features](#advanced-features)
- [Troubleshooting](#troubleshooting)

## Configuration Overview

All resume content is controlled through the `config/config.yaml` file. The configuration uses YAML format, which is more readable and user-friendly than JSON. Here's the basic structure:

```yaml
# Section labels for internationalization
sectionLabels: {}

# Order of sections in main content area
sectionOrder: []

# Personal information
personal: {}

# Profile image path
profileImage: ""

# Contact information
contactMethods: []

# Skills with ratings and labels
skills: {}
skillLabels: {}

# Software and technologies
software: []

# Education and experience
education: []
experience: []

# Custom sections (certifications, projects, etc.)
customSections: []

# Theme configuration
theme: {}
```

## Personal Information

Configure your basic information in the `personal` section:

```yaml
personal:
  name: Your Full Name
  title: Your Job Title
  bio: Brief professional summary highlighting your expertise and experience.

# Profile image (relative to images/ directory)
profileImage: images/your-photo.jpg
```

**Tips:**
- Keep bio concise (2-3 sentences max)
- Use professional headshot (300x300px recommended)
- Supported image formats: JPG, PNG, GIF

## Contact Methods

Add any number of contact methods. Each contact method has three parts:

```yaml
contactMethods:
  - type: email           # Used for styling/icons
    label: "Email:"       # Display label
    value: your@email.com # Actual contact info
  - type: phone
    label: "Phone:"
    value: "+1 (555) 123-4567"
  - type: linkedin
    label: "LinkedIn:"
    value: linkedin.com/in/yourprofile
  - type: github
    label: "GitHub:"
    value: github.com/yourusername
  - type: website
    label: "Portfolio:"
    value: yourwebsite.com
  - type: address
    label: "Location:"
    value: City, State/Country
```

**Supported Types:**
- `email`, `phone`, `linkedin`, `github`, `website`, `address`, `behance`, `dribbble`, `twitter`

## Skills Configuration

Skills are displayed with visual dot indicators (1-5 scale):

```yaml
skills:
  programming: 4      # Skill ID with rating (1-5)
  leadership: 5
  design: 3
  communication: 4

skillLabels:
  programming: Programming     # Display names
  leadership: Team Leadership
  design: UI/UX Design
  communication: Communication
```

**Skill Levels:**
- **1** = Beginner
- **2** = Basic  
- **3** = Intermediate
- **4** = Advanced
- **5** = Expert

## Education & Experience

Both sections use similar structure with highlights:

### Education

```yaml
education:
  - degree: Master of Science in Computer Science
    school: University Name, Location
    period: September 2020 - June 2022
    highlights:
      - "<strong>Thesis:</strong> Research topic title"
      - "<strong>GPA:</strong> 3.8/4.0, Magna Cum Laude"
      - "<strong>Relevant Coursework:</strong> Advanced Algorithms, Machine Learning"
```

### Experience

```yaml
experience:
  - company: Company Name
    position: Your Job Title
    period: January 2022 - Present
    responsibilities:
      - Achievement with quantifiable impact and metrics
      - Responsibility highlighting technical skills and technologies
      - Leadership or collaboration example with results
```

**Best Practices:**
- Use `<strong>` tags for emphasis in highlights
- Include quantifiable achievements when possible
- Start each responsibility with action verbs
- Keep entries concise but impactful

## Custom Sections

Add unlimited custom sections for certifications, projects, awards, etc.

### List Type (Certifications, Awards)

```yaml
- id: certifications
  title: Certifications
  type: list
  items:
    - name: AWS Certified Solutions Architect
      date: "2023"
      description: Cloud architecture design and implementation
```

### Detailed Type (Projects, Publications)

```yaml
- id: projects
  title: Key Projects
  type: detailed
  items:
    - title: E-commerce Platform
      subtitle: Lead Developer - 2023
      description: Built scalable e-commerce solution serving 10K+ users
      highlights:
        - Improved performance by 40%
        - Reduced infrastructure costs by $25k annually
```

### Grid Type (Languages, Additional Skills)

```yaml
- id: languages
  title: Languages
  type: grid
  items:
    - English (Native)
    - Spanish (Fluent)
    - French (Basic)
```

## Theme Customization

Customize colors, fonts, and styling:

### Basic Theme

```yaml
theme:
  colors:
    primary: "#2563eb"           # Main accent color
    secondary: "#7c3aed"         # Secondary accent color
    sidebarBackground: "#1e293b" # Sidebar background
    textPrimary: "#1e293b"       # Main text color
    textSecondary: "#64748b"     # Secondary text color
  fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif"
```

### Advanced Theme with Custom Tag Colors

```yaml
theme:
  colors:
    primary: "#2563eb"
    secondary: "#7c3aed"
    sidebarBackground: "#1e293b"
    textPrimary: "#1e293b"
    textSecondary: "#64748b"
    tagColors:
      programming: "#10b981"     # Custom color for programming skill
      leadership: "#f59e0b"      # Custom color for leadership skill
      design: "#ef4444"          # Custom color for design skill
  fontFamily: "'Inter', sans-serif"
  backgroundGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
```

### Popular Color Schemes

**Blue Professional:**
```yaml
colors:
  primary: "#2563eb"
  secondary: "#1d4ed8"
  sidebarBackground: "#1e3a8a"
```

**Green Fresh:**
```yaml
colors:
  primary: "#059669"
  secondary: "#047857"
  sidebarBackground: "#064e3b"
```

**Purple Creative:**
```yaml
colors:
  primary: "#7c3aed"
  secondary: "#6d28d9"
  sidebarBackground: "#581c87"
```

## Section Ordering

Control which sections appear in the main content area and their order:

```yaml
sectionOrder:
  - education
  - experience
  - certifications
  - projects
```

**Common Configurations:**

- **Recent Graduate:** `[education, experience, projects, certifications]`
- **Experienced Professional:** `[experience, certifications, education]`
- **Career Changer:** `[certifications, projects, experience, education]`

**Available Sections:**
- `education` - Education history
- `experience` - Work experience
- Any custom section ID you define

## Multi-Language Support

Customize section headers for different languages:

```yaml
sectionLabels:
  contact: Contact Information
  skills: Core Skills
  software: Technologies & Tools
  education: Education
  experience: Professional Experience
```

**Examples:**

**Spanish:**
```yaml
sectionLabels:
  contact: Información de Contacto
  skills: Habilidades
  software: Tecnologías
  education: Educación
  experience: Experiencia Profesional
```

**French:**
```yaml
sectionLabels:
  contact: Coordonnées
  skills: Compétences
  software: Technologies
  education: Formation
  experience: Expérience Professionnelle
```

## Advanced Features

### Multiple Resume Versions

Create different configurations for different purposes:

```bash
# Technical resume
cp config/config.template.yaml config/config-tech.yaml

# Business resume
cp config/config.template.yaml config/config-business.yaml

# Academic resume
cp config/config.template.yaml config/config-academic.yaml
```

### Print Optimization

For best PDF results:

1. **Browser Settings:**
   - Chrome/Edge: Enable "Background graphics"
   - Firefox: Enable "Print backgrounds"
   - Safari: Enable "Print backgrounds"

2. **Page Setup:**
   - Paper: A4 or Letter
   - Orientation: Portrait
   - Margins: None or Minimal

3. **Print Preview:**
   - Check that all colors appear
   - Verify page breaks look good
   - Ensure no content is cut off

### Custom Fonts

Use Google Fonts or system fonts:

```yaml
theme:
  fontFamily: "'Roboto', 'Helvetica Neue', Arial, sans-serif"
```

**Popular Professional Fonts:**
- `'Inter', sans-serif` - Modern, clean
- `'Roboto', sans-serif` - Readable, friendly
- `'Source Sans Pro', sans-serif` - Professional
- `'Open Sans', sans-serif` - Versatile
- `'Lato', sans-serif` - Elegant

## Troubleshooting

### Configuration Not Loading

**Problem:** Resume shows placeholder text
**Solutions:**
- Ensure `config/config.yaml` exists
- Check YAML syntax with online validator
- Open browser console (F12) for error messages

### Images Not Displaying

**Problem:** Profile image doesn't appear
**Solutions:**
- Verify image file exists in `images/` directory
- Check file path in config matches actual filename
- Ensure image format is supported (JPG, PNG, GIF)
- Try using relative path: `"images/photo.jpg"`

### Sections Not Appearing

**Problem:** Custom sections don't show
**Solutions:**
- Check `sectionOrder` includes your section ID
- Verify custom section `id` matches `sectionOrder` entry
- Ensure section has valid `items` array
- Check console for JavaScript errors

### Print/PDF Issues

**Problem:** Colors missing or layout broken in PDF
**Solutions:**
- Enable "Background graphics" in print settings
- Use Chrome or Edge for best PDF results
- Set margins to "None" or "Minimal"
- Check print preview before generating PDF

### Theme Not Applied

**Problem:** Custom colors don't appear
**Solutions:**
- Verify JSON syntax in theme section
- Check color values are valid hex codes
- Clear browser cache and reload
- Ensure theme section is at same level as other config sections

### Performance Issues

**Problem:** Resume loads slowly
**Solutions:**
- Optimize profile image size (under 500KB recommended)
- Reduce number of custom sections if excessive
- Use compressed image formats
- Clear browser cache

## Tips for Best Results

### Content Tips
- Keep descriptions concise and impactful
- Use action verbs and quantifiable achievements
- Maintain consistent formatting throughout
- Proofread carefully for typos and grammar

### Design Tips
- Choose colors that work well in both digital and print
- Ensure sufficient contrast for readability
- Keep custom sections relevant and focused
- Test print output before finalizing

### Technical Tips
- Validate JSON before saving configuration
- Keep backup copies of working configurations
- Test in multiple browsers
- Use version control for configuration files

---

Need more help? Check the main README.md for quick start instructions or open an issue on GitHub.
