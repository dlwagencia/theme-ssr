const Index = require('../index.js')
const Home = require('../components/home.js')
const Portifolio = require('../components/portifolio.js')
const Servicos = require('../components/servicos.js')
const Blog = require('../components/blog.js')
const Contato = require('../components/contato.js')
const Empresa = require('../components/empresa.js')
const homeView = async (req, res) => {
  const home = await Home.html();
  const portifolio = await Portifolio.html();
  const servicos = await Servicos.html();
  const blog = await Blog.html();
  const empresa = await Empresa.html();
  const contato = await Contato.html();
  const content = `
    ${home}
    ${portifolio}
    ${servicos}
    ${blog}
    ${empresa}
    ${contato}
  `
  const title = "DLW Agência Online - Design e Desenvolvimento de Sites em São Leopoldo"
  const index = await Index.html(title, content);
  res.send(index);
}
module.exports = homeView