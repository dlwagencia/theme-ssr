function htmlEscape(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")

}
const html = async () => {
  return /*html*/`
    <div id="empresa">
      <div class="container">
        <div class="row">
          <div class="col-6 flex justify-center">
            <div class="image">
            <img src="/images/dlw-quem-somos.png" alt="Na foto está nosso desenvolver web Diego Leismann com um terno azul e gravata vermelha, sobre a imagem o texto Somos pesssoas reais fazendo arte, design e tecnologia, mas usamos IA tbm."/>
            </div>
          </div>
          <div class="col-6 flex items-center">
          
            
            <div class="card">
              <h2 class="heavy"> DLW Agência Online</h2>
              <p class="text-spaced"> 
                Somos uma agência jovem, criativa e inovadora que une
                profissionais com mais de 12 anos de experiência em
                Design e Desenvolvimento e ainda conectamos uma rede de
                empresas parceiras para construir soluções do
                tamanho do seu negocio, trabalhamos de forma remota online,
                conectados pela internet, oferecendo atendimento
                personalizado para cada cliente. 
              </p>
            </div>
           
          
          </div>
        </div>
      </div>
    </div>
    `
}
module.exports = {
  html
}