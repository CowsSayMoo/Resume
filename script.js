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

// Set CSS variables from config
function setCSSVariables(configData) {
    const root = document.documentElement;
    root.style.setProperty('--contact-address', `"${configData.address || ''}"`);
    root.style.setProperty('--contact-phone', `"${configData.phone || ''}"`);
    root.style.setProperty('--contact-email', `"${configData.email || ''}"`);
    root.style.setProperty('--contact-github', `"${configData.github || ''}"`);
    root.style.setProperty('--contact-behance', `"${configData.behance || ''}"`);
    // Set profile image if provided
    if (configData.profileImage) {
        document.querySelector('.profile-img').style.backgroundImage = `url(${configData.profileImage})`;
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

// Initialize on page load
document.addEventListener('DOMContentLoaded', async () => {
    const configData = await loadConfig();
    setCSSVariables(configData);
    
    if (configData.skills && configData.skillLabels) {
        setSkillLevels(configData.skills, configData.skillLabels);
    }
    if (configData.software) {
        setSoftwareTools(configData.software);
    }
});
