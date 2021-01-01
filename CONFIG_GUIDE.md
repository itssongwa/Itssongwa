# Profile Configuration Guide

This portfolio theme is now fully scalable and customizable. You can easily create different profiles by simply updating the `js/config.js` file.

## Quick Start

To customize this portfolio for a new person:

1. Open `js/config.js`
2. Update the values in the `profileConfig` object
3. Save the file
4. The website will automatically use the new configuration

## Configuration Options

### Personal Information
```javascript
name: "Your Name",
title: "Your Job Title",
subtitle: "Additional Title (e.g., Open Source Contributor)",
location: "Your Location",
email: "your.email@example.com",
phone: "", // Leave empty to hide phone number
```

### Education
```javascript
education: {
    institution: "University Name",
    degree: "Degree Name",
    status: "Currently enrolled" // or "Graduated", "Completed", etc.
}
```

### Skills and Technologies
Simply add or remove items from the skills array:
```javascript
skills: [
    "Kubernetes",
    "Docker",
    "CI/CD Pipelines",
    // Add more skills here...
]
```

### Experience
```javascript
experience: {
    startDate: "January 1 2020 00:00", // Format: "Month Day Year HH:MM"
    show: true // Set to false to hide experience
}
```

### Interests
```javascript
interests: [
    "Interest 1",
    "Interest 2",
    // Add more interests...
]
```

### Social Media Links
Add your social media profiles. Links that are empty will be hidden automatically:
```javascript
social: {
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
    medium: "https://medium.com/@username",
    twitter: "https://twitter.com/username",
    email: "your.email@example.com"
}
```

### Open Source Contributions
```javascript
openSource: {
    highlight: true, // Set to false to hide this section
    description: "Brief description of your contributions",
    projects: [
        {
            name: "Project Name",
            description: "What you contribute to",
            link: "https://github.com/username/project"
        }
    ]
}
```

### Terminal Messages
Customize the questions shown in the terminal animation:
```javascript
terminal: {
    skillSetQuestion: "Skill Set?",
    experienceQuestion: "Experience?",
    interestsQuestion: "My Interests?",
    coolStuffQuestion: "Open Source Contributions?"
}
```

### SEO Meta Tags
```javascript
seo: {
    description: "Your meta description",
    keywords: "keyword1, keyword2, keyword3",
    author: "Your Name"
}
```

## Example: Current Profile (David Okoth)

The current configuration is set up for:
- **Name**: David Okoth
- **Title**: DevOps Engineer
- **Location**: Australia
- **Education**: Torrens University Australia, Masters in AI (Currently enrolled)
- **Skills**: Kubernetes, Docker, CI/CD, Terraform, Ansible, AWS, Azure, and more
- **Open Source**: Contributions to minikube and ingress-nginx Kubernetes projects

## Files Structure

- `js/config.js` - All profile data (edit this to customize)
- `index.html` - Main HTML structure (uses config data)
- `js/scripts.js` - JavaScript logic (reads from config)
- `css/style.css` - Styling (customize colors and fonts here)

## Tips

1. **Phone Number**: Leave `phone: ""` empty to hide the phone number field
2. **Social Links**: Only links with values will be displayed
3. **Skills**: Order them by importance or relevance
4. **Experience Date**: Make sure the date format is correct: "Month Day Year HH:MM"
5. **Open Source**: Set `highlight: false` if you don't want to show this section

## Need Help?

Simply update the values in `js/config.js` and refresh your browser. The changes will be reflected immediately!

