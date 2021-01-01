/* Modern Theme Profile Initialization */

// Ensure config is loaded before using it
if (typeof profileConfig === 'undefined') {
    console.error('profileConfig is not defined. Make sure config.js is loaded before scripts.js');
}

function getYearsBetween(sdt) {
    var date_difference = new Date(new Date() - sdt);
    var years = date_difference.toISOString().slice(0, 4) - 1970;
    var months = function (months) {
        if (months == 0) return '';
        if (months > 11) {
            years += 1;
            return '';
        }
        if (months == 1) {
            return ' and ' + months + ' Month';
        }
        return ' and ' + months + ' Months';
    };
    return years + ' Years' + months(date_difference.getMonth() + 1);
}

// Initialize profile data from config
function initializeProfile() {
    if (typeof profileConfig === 'undefined') {
        console.error('profileConfig not available');
        return;
    }
    
    // Update profile section
    $('#profile-name').text(profileConfig.name);
    $('#profile-title').text(profileConfig.title);
    $('#profile-location span').text(profileConfig.location);
    
    // Update education
    $('#education-status').text(profileConfig.education.status);
    $('#education-institution').text(profileConfig.education.institution);
    $('#education-degree').text(profileConfig.education.degree);
    
    // Update social links
    if (profileConfig.social.github) {
        $('#github-link').attr('href', profileConfig.social.github);
        $('#github-link').show();
    }
    if (profileConfig.social.linkedin) {
        $('#linkedin-link').attr('href', profileConfig.social.linkedin);
        $('#linkedin-link').show();
    }
    if (profileConfig.social.medium) {
        $('#medium-link').attr('href', profileConfig.social.medium);
        $('#medium-link').show();
    }
    if (profileConfig.social.twitter) {
        $('#twitter-link').attr('href', profileConfig.social.twitter);
        $('#twitter-link').show();
    }
    if (profileConfig.social.email) {
        $('#email-link').attr('href', 'mailto:' + profileConfig.social.email);
        $('#email-link').show();
    }
    
    // Populate skills - organized by categories
    var skillsContainer = $('#skills-container');
    skillsContainer.empty();
    
    // Group skills into categories
    var skillCategories = {
        'Cloud Security': ['Cloud Security', 'AWS Security', 'Azure Security', 'GCP Security', 'Cloud-Native Security'],
        'Kubernetes Security': ['Kubernetes Security', 'Kubernetes RBAC', 'Pod Security Policies', 'Network Policies', 'Container Security'],
        'Security Tools': ['SIEM', 'Security Monitoring', 'Threat Detection', 'Incident Response', 'Intrusion Detection', 'Security Tools'],
        'Security Practices': ['Vulnerability Assessment', 'Penetration Testing', 'Security Auditing', 'Security Compliance', 'Risk Management', 'Security Policies'],
        'DevSecOps': ['DevSecOps', 'Security Automation', 'Secure CI/CD', 'Infrastructure Security', 'Secrets Management'],
        'Network & Access': ['Network Security', 'Identity & Access Management', 'Firewall Configuration', 'TLS/SSL', 'Encryption'],
        'Programming & Scripting': ['Python', 'Bash Scripting', 'Linux Security', 'Git/GitHub']
    };
    
    // Create category sections
    Object.keys(skillCategories).forEach(function(category) {
        var categorySkills = profileConfig.skills.filter(function(skill) {
            return skillCategories[category].some(function(catSkill) {
                return skill.toLowerCase().includes(catSkill.toLowerCase()) || 
                       catSkill.toLowerCase().includes(skill.toLowerCase());
            });
        });
        
        if (categorySkills.length > 0) {
            var categoryHtml = '<div class="skill-category">' +
                '<div class="skill-category-title">' +
                '<i class="fa fa-shield"></i>' +
                '<span>' + category + '</span>' +
                '</div>' +
                '<div class="skill-items-row">';
            
            categorySkills.forEach(function(skill) {
                categoryHtml += '<div class="skill-badge">' + skill + '</div>';
            });
            
            categoryHtml += '</div></div>';
            skillsContainer.append(categoryHtml);
        }
    });
    
    // Add remaining skills that don't fit into categories
    var categorizedSkills = [];
    Object.values(skillCategories).forEach(function(catSkills) {
        categorizedSkills = categorizedSkills.concat(catSkills);
    });
    
    var remainingSkills = profileConfig.skills.filter(function(skill) {
        return !categorizedSkills.some(function(catSkill) {
            return skill.toLowerCase().includes(catSkill.toLowerCase()) || 
                   catSkill.toLowerCase().includes(skill.toLowerCase());
        });
    });
    
    if (remainingSkills.length > 0) {
        var otherCategoryHtml = '<div class="skill-category">' +
            '<div class="skill-category-title">' +
            '<i class="fa fa-code"></i>' +
            '<span>Other Skills</span>' +
            '</div>' +
            '<div class="skill-items-row">';
        
        remainingSkills.forEach(function(skill) {
            otherCategoryHtml += '<div class="skill-badge">' + skill + '</div>';
        });
        
        otherCategoryHtml += '</div></div>';
        skillsContainer.append(otherCategoryHtml);
    }
    
    // Populate experience
    if (profileConfig.experience.show) {
        var experience = getYearsBetween(new Date(profileConfig.experience.startDate));
        $('#experience-display').text(experience);
        $('#experience-section').show();
    }
    
    // Populate open source contributions
    if (profileConfig.openSource.highlight) {
        $('#opensource-description').text(profileConfig.openSource.description);
        var projectsContainer = $('#projects-container');
        projectsContainer.empty();
        profileConfig.openSource.projects.forEach(function(project) {
            var projectHtml = '<div class="project-card">' +
                '<div class="project-name">' +
                '<i class="fa fa-code-fork"></i>' +
                '<a href="' + project.link + '" target="_blank">' + project.name + '</a>' +
                '</div>' +
                '<div class="project-description">' + project.description + '</div>' +
                '</div>';
            projectsContainer.append(projectHtml);
        });
        $('#opensource-section').show();
    }
    
    // Populate interests
    var interestsContainer = $('#interests-container');
    interestsContainer.empty();
    profileConfig.interests.forEach(function(interest) {
        interestsContainer.append(
            '<div class="interest-item">' +
            '<i class="fa fa-star"></i>' +
            '<span>' + interest + '</span>' +
            '</div>'
        );
    });
}


// Initialize profile when DOM is ready
$(document).ready(function() {
    initializeProfile();
});

// Matrix canvas animation (if draw function exists)
if (typeof draw === 'function') {
    setInterval(draw, 100);
}
