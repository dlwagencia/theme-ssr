const Header = require('./components/header.js')
const Footer = require('./components/footer.js')
const html = async (title, content) => {
  try {
    const header = await Header.html();
    const footer = await Footer.html();
    const template = /*html*/`
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=0">
    <title>${title || 'Página não encontrada'}</title>

    <link rel="stylesheet" type="text/css" href="/style.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="site" onclick="menuItem(event)" >
      ${header}
      ${content}
      ${footer}
    </div>
    <script src="/form.js" type="text/javascript"></script>
    <script src="/menu.js" type="text/javascript"></script>
  </body>
  </html>
  `
    return template;
  } catch (e) {
    console.log("Error render index");
    return null
  }
}

module.exports = {
  html
}