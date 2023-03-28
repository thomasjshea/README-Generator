// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if(data.license === ''){
    return ''
  } else if(data.license === 'MIT'){
    return `[${data.license} License](https://choosealicense.com/licenses/mit/)`
  } else if(data.license === 'Apache 2.0'){
    return `[${data.license} License](https://choosealicense.com/licenses/apache-2.0/)`
  } else if(data.license === 'Mozilla Public License'){
    return `[${data.license}](https://choosealicense.com/licenses/mpl-2.0/)`
  } else if(data.license === 'GNU GPLv3'){
    return `[${data.license} License](https://choosealicense.com/licenses/gpl-3.0/)`
  } else if(data.license === 'Boost Software License 1.0') {
    return `[${data.license}](https://choosealicense.com/licenses/bsl-1.0/)`
  } else if(data.license === 'The Unilicense'){
    return `[${data.license}](https://choosealicense.com/licenses/unlicense/)`
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if(data.license === '') {
    return ''
  } else {
    return `## License
  This application uses the ${data.license} License`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description

  ${data.description}
  
  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Credits
  
  ${data.credits}

  ## Tests

  ${data.tests}

  ## Questions
  
  [Github](https://www.github.com/${data.github})

  Email: [${data.email}](mailto:${data.email})
  
  ${renderLicenseSection(data)}

  ${renderLicenseLink(data)}
  
  
`;
}

module.exports = generateMarkdown;
