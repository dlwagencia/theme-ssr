const fs = require('fs').promises;
async function render(template, data, res) {
    console.log(template,'TEMP')
    let htmlTemplate = '';
    try {
        htmlTemplate = await fs.readFile(template, 'utf8');
    }
    catch (error) {
        console.log(error,'error');
        res.redirect('/not-found');
    }
    if (data) {
        for (const key in data) {
            const value = data[key];
            const pattern = new RegExp(`[$][{]${key}[}]`, 'g');
            htmlTemplate = htmlTemplate.replace(pattern, value);
        }
    }

    return htmlTemplate;
}

module.exports = render;