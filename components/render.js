const fs = require('fs').promises;
async function render(template, data) {
    let htmlTemplate = '';
    try {
        htmlTemplate = await fs.readFile(template + '.html', 'utf8');
    }
    catch (error) {
        const errortext = `${String(error)} ${error} ${error.toString()}`
        console.log(errortext, 'ERROR');
        return 'error:' + errortext
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