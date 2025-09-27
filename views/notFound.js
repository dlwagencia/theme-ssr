const Index = require('../index.js')
const notFoundView = async (req, res) => {
    const content = '<div id="not-found"><p>Página não encontrada</p></div>';
    const title = "Página não encontrada";
    const index = await Index.html(title, content);
    res.send(index);
}
module.exports = notFoundView