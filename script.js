// Function to load config from external file (required)
async function loadConfig() {
    try {
        const response = await fetch('./config.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to load config.json:', error);
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
    if (!skills || !skillLabels) return;
    Object.entries(skills).forEach(([skillKey, level]) => {
        const skillName = skillLabels[skillKey];
        if (skillName) {
            const skillElement = Array.from(document.querySelectorAll('.skills-category h3'))
                .find(h3 => h3.textContent.trim() === skillName);
            if (skillElement) {
                const dotsContainer = skillElement.nextElementSibling;
                const dots = dotsContainer.querySelectorAll('.dot');
                // Reset all dots
                dots.forEach(dot => dot.classList.remove('filled'));
                // Fill dots up to the specified level
                for (let i = 0; i < Math.min(level, dots.length); i++) {
                    dots[i].classList.add('filled');
                }
            }
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
