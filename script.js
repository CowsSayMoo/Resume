// Function to load config from external file (required)
async function loadConfig() {
    try {
        const response = await fetch('./config/config.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to load config/config.json:', error);
        return {};
    }
}

// Set CSS variables and profile image from config
function setCSSVariables(configData) {
    // Set profile image if provided
    if (configData.profileImage) {
        document.querySelector('.profile-img').style.backgroundImage = `url(${configData.profileImage})`;
    }
}

// Apply theme configuration (colors and fonts)
function applyTheme(theme) {
    if (!theme) return;
    
    const root = document.documentElement;
    
    // Apply custom colors
    if (theme.colors) {
        if (theme.colors.primary) {
            root.style.setProperty('--primary-color', theme.colors.primary);
        }
        if (theme.colors.secondary) {
            root.style.setProperty('--secondary-color', theme.colors.secondary);
        }
        if (theme.colors.sidebarBackground) {
            root.style.setProperty('--sidebar-bg', theme.colors.sidebarBackground);
        }
        if (theme.colors.textPrimary) {
            root.style.setProperty('--text-primary', theme.colors.textPrimary);
        }
        if (theme.colors.textSecondary) {
            root.style.setProperty('--text-secondary', theme.colors.textSecondary);
        }
        
        // Use tag-specific colors if provided, otherwise fall back to primary/secondary
        const tagPrimary = theme.colors.tagPrimary || theme.colors.primary;
        const tagSecondary = theme.colors.tagSecondary || theme.colors.secondary;
        
        if (tagPrimary) {
            root.style.setProperty('--tag-primary', tagPrimary);
        }
        if (tagSecondary) {
            root.style.setProperty('--tag-secondary', tagSecondary);
        }
    }
    
    // Apply custom font
    if (theme.fontFamily) {
        root.style.setProperty('--font-family', theme.fontFamily);
        document.body.style.fontFamily = theme.fontFamily;
    }
    
    // Apply custom background gradient or generate from primary/secondary colors
    if (theme.backgroundGradient) {
        document.body.style.background = theme.backgroundGradient;
    } else if (theme.colors && theme.colors.primary && theme.colors.secondary) {
        // Auto-generate gradient from primary and secondary colors
        const gradient = `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%)`;
        document.body.style.background = gradient;
    }
}

// Set section headers from config
function setSectionHeaders(sectionLabels) {
    if (!sectionLabels) return;
    
    const sections = {
        'section-contact': sectionLabels.contact,
        'section-skills': sectionLabels.skills,
        'section-software': sectionLabels.software,
        'section-education': sectionLabels.education,
        'section-experience': sectionLabels.experience
    };
    
    Object.entries(sections).forEach(([id, label]) => {
        const element = document.getElementById(id);
        if (element && label) {
            element.textContent = label;
        }
    });
}

// Create and order main content sections dynamically
function createMainSections(sectionOrder, sectionLabels, customSections) {
    const container = document.getElementById('main-sections-container');
    if (!container || !sectionOrder) return;
    
    container.innerHTML = '';
    
    // Define built-in section configurations
    const builtInSections = {
        'education': {
            id: 'education-container',
            comment: '<!-- Education items will be populated dynamically -->'
        },
        'experience': {
            id: 'experience-container', 
            comment: '<!-- Work experience items will be populated dynamically -->'
        }
    };
    
    // Create sections in the specified order
    sectionOrder.forEach(sectionKey => {
        // Check if it's a built-in section
        if (builtInSections[sectionKey]) {
            const config = builtInSections[sectionKey];
            const label = sectionLabels ? sectionLabels[sectionKey] : sectionKey;
            
            if (label) {
                createSection(container, sectionKey, label, config.id, config.comment);
            }
        }
        // Check if it's a custom section
        else if (customSections) {
            const customSection = customSections.find(section => section.id === sectionKey);
            if (customSection) {
                const containerId = `${customSection.id}-container`;
                const comment = `<!-- ${customSection.title} items will be populated dynamically -->`;
                createSection(container, customSection.id, customSection.title, containerId, comment);
            }
        }
    });
}

// Helper function to create a section
function createSection(container, sectionKey, label, containerId, comment) {
    // Create section wrapper
    const sectionDiv = document.createElement('div');
    sectionDiv.className = 'section';
    
    // Create section header
    const header = document.createElement('h2');
    header.id = `section-${sectionKey}`;
    header.textContent = label;
    sectionDiv.appendChild(header);
    
    // Create section content container
    const contentDiv = document.createElement('div');
    contentDiv.id = containerId;
    contentDiv.innerHTML = comment;
    sectionDiv.appendChild(contentDiv);
    
    container.appendChild(sectionDiv);
}

// Populate custom sections from config
function setCustomSections(customSections) {
    if (!customSections || !Array.isArray(customSections)) return;
    
    customSections.forEach(section => {
        const container = document.getElementById(`${section.id}-container`);
        if (!container || !section.items || !Array.isArray(section.items)) return;
        
        container.innerHTML = '';
        
        // Handle different section types
        switch (section.type) {
            case 'list':
                createListSection(container, section.items);
                break;
            case 'detailed':
                createDetailedSection(container, section.items);
                break;
            case 'grid':
                createGridSection(container, section.items);
                break;
            default:
                createListSection(container, section.items); // Default to list
        }
    });
}

// Create a simple list section (like certifications)
function createListSection(container, items) {
    const list = document.createElement('ul');
    list.className = 'custom-list';
    
    items.forEach(item => {
        const listItem = document.createElement('li');
        if (typeof item === 'string') {
            listItem.textContent = item;
        } else if (item.name) {
            listItem.innerHTML = item.date ? 
                `<strong>${item.name}</strong> - ${item.date}` : 
                `<strong>${item.name}</strong>`;
            if (item.description) {
                listItem.innerHTML += `<br><span class="item-description">${item.description}</span>`;
            }
        }
        list.appendChild(listItem);
    });
    
    container.appendChild(list);
}

// Create a detailed section (like projects)
function createDetailedSection(container, items) {
    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'custom-item';
        
        if (item.title) {
            const title = document.createElement('h3');
            title.textContent = item.title;
            itemDiv.appendChild(title);
        }
        
        if (item.subtitle) {
            const subtitle = document.createElement('div');
            subtitle.className = 'custom-subtitle';
            subtitle.textContent = item.subtitle;
            itemDiv.appendChild(subtitle);
        }
        
        if (item.description) {
            const desc = document.createElement('div');
            desc.className = 'custom-description';
            desc.innerHTML = item.description;
            itemDiv.appendChild(desc);
        }
        
        if (item.highlights && Array.isArray(item.highlights)) {
            const list = document.createElement('ul');
            item.highlights.forEach(highlight => {
                const listItem = document.createElement('li');
                listItem.innerHTML = highlight;
                list.appendChild(listItem);
            });
            itemDiv.appendChild(list);
        }
        
        container.appendChild(itemDiv);
    });
}

// Create a grid section (like skills badges)
function createGridSection(container, items) {
    const grid = document.createElement('div');
    grid.className = 'custom-grid';
    
    items.forEach(item => {
        const tag = document.createElement('div');
        tag.className = 'custom-tag';
        tag.textContent = typeof item === 'string' ? item : item.name;
        grid.appendChild(tag);
    });
    
    container.appendChild(grid);
}

// Populate contact section from config
function setContactInfo(contactMethods) {
    const container = document.getElementById('contact-container');
    if (!container || !Array.isArray(contactMethods)) return;
    
    container.innerHTML = '';
    contactMethods.forEach(contact => {
        if (contact.value && contact.value.trim()) { // Only show if value exists
            const contactItem = document.createElement('div');
            contactItem.className = 'contact-item';
            contactItem.setAttribute('data-type', contact.type);
            
            const label = document.createElement('strong');
            label.textContent = contact.label;
            contactItem.appendChild(label);
            
            const value = document.createElement('span');
            value.textContent = contact.value;
            contactItem.appendChild(value);
            
            container.appendChild(contactItem);
        }
    });
}

// Set personal information from config
function setPersonalInfo(personalData) {
    if (!personalData) return;
    
    const nameElement = document.getElementById('personal-name');
    const titleElement = document.getElementById('personal-title');
    const bioElement = document.getElementById('personal-bio');
    const pageTitleElement = document.getElementById('page-title');
    
    if (nameElement && personalData.name) {
        nameElement.textContent = personalData.name;
    }
    
    if (titleElement && personalData.title) {
        titleElement.textContent = personalData.title;
    }
    
    if (bioElement && personalData.bio) {
        bioElement.textContent = personalData.bio;
    }
    
    if (pageTitleElement && personalData.name) {
        pageTitleElement.textContent = `CV - ${personalData.name}`;
    }
}

// Set skill levels from config
function setSkillLevels(skills, skillLabels) {
    const skillsContainer = document.getElementById('skills-container');
    if (!skillsContainer || !skills || !skillLabels) return;
    
    // Clear existing content
    skillsContainer.innerHTML = '';
    
    // Create skills dynamically
    Object.entries(skills).forEach(([skillKey, level]) => {
        const skillName = skillLabels[skillKey];
        if (skillName) {
            // Create skill category container
            const skillCategory = document.createElement('div');
            skillCategory.className = 'skills-category';
            
            // Create skill name
            const skillTitle = document.createElement('h3');
            skillTitle.textContent = skillName;
            skillCategory.appendChild(skillTitle);
            
            // Create dots container
            const dotsContainer = document.createElement('div');
            dotsContainer.className = 'skill-dots';
            
            // Create 5 dots
            for (let i = 1; i <= 5; i++) {
                const dot = document.createElement('div');
                dot.className = i <= level ? 'dot filled' : 'dot';
                dotsContainer.appendChild(dot);
            }
            
            skillCategory.appendChild(dotsContainer);
            skillsContainer.appendChild(skillCategory);
        }
    });
}

// Populate software section from config
function setSoftwareTools(softwareList) {
    const container = document.getElementById('software-container');
    if (container && Array.isArray(softwareList)) {
        container.innerHTML = '';
        softwareList.forEach(tool => {
            const tag = document.createElement('div');
            tag.className = 'software-tag';
            tag.textContent = tool;
            container.appendChild(tag);
        });
    }
}

// Populate education section from config
function setEducation(educationList) {
    const container = document.getElementById('education-container');
    if (!container || !Array.isArray(educationList)) return;
    
    container.innerHTML = '';
    educationList.forEach(education => {
        const educationItem = document.createElement('div');
        educationItem.className = 'education-item';
        
        // Create degree title
        const degreeTitle = document.createElement('h3');
        degreeTitle.textContent = education.degree;
        educationItem.appendChild(degreeTitle);
        
        // Create school info
        const schoolInfo = document.createElement('div');
        schoolInfo.className = 'school';
        schoolInfo.textContent = `${education.school}: ${education.period}`;
        educationItem.appendChild(schoolInfo);
        
        // Create highlights list if available
        if (education.highlights && education.highlights.length > 0) {
            const highlightsList = document.createElement('ul');
            education.highlights.forEach(highlight => {
                const listItem = document.createElement('li');
                listItem.innerHTML = highlight; // Using innerHTML to support <strong> tags
                highlightsList.appendChild(listItem);
            });
            educationItem.appendChild(highlightsList);
        }
        
        container.appendChild(educationItem);
    });
}

// Populate work experience section from config
function setExperience(experienceList) {
    const container = document.getElementById('experience-container');
    if (!container || !Array.isArray(experienceList)) return;
    
    container.innerHTML = '';
    experienceList.forEach(job => {
        const jobItem = document.createElement('div');
        jobItem.className = 'job';
        
        // Create company name
        const companyName = document.createElement('h3');
        companyName.textContent = job.company;
        jobItem.appendChild(companyName);
        
        // Create position info
        const positionInfo = document.createElement('div');
        positionInfo.className = 'position';
        positionInfo.textContent = `${job.position}: ${job.period}`;
        jobItem.appendChild(positionInfo);
        
        // Create responsibilities list if available
        if (job.responsibilities && job.responsibilities.length > 0) {
            const responsibilitiesList = document.createElement('ul');
            job.responsibilities.forEach(responsibility => {
                const listItem = document.createElement('li');
                listItem.textContent = responsibility;
                responsibilitiesList.appendChild(listItem);
            });
            jobItem.appendChild(responsibilitiesList);
        }
        
        container.appendChild(jobItem);
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', async () => {
    const configData = await loadConfig();
    setCSSVariables(configData);
    
    // Apply theme configuration
    if (configData.theme) {
        applyTheme(configData.theme);
    }
    
    // Set section headers for sidebar sections
    if (configData.sectionLabels) {
        setSectionHeaders(configData.sectionLabels);
    }
    
    // Create main content sections in specified order
    if (configData.sectionOrder) {
        createMainSections(configData.sectionOrder, configData.sectionLabels, configData.customSections);
    }
    
    if (configData.personal) {
        setPersonalInfo(configData.personal);
    }
    
    if (configData.contactMethods) {
        setContactInfo(configData.contactMethods);
    }
    
    if (configData.skills && configData.skillLabels) {
        setSkillLevels(configData.skills, configData.skillLabels);
    }
    
    if (configData.software) {
        setSoftwareTools(configData.software);
    }
    
    if (configData.education) {
        setEducation(configData.education);
    }
    
    if (configData.experience) {
        setExperience(configData.experience);
    }
    
    if (configData.customSections) {
        setCustomSections(configData.customSections);
    }
});
