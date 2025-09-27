
const html = async () => {
  return  /*html*/`
<div id="servicos">
    <div class="container">
      <div class="row">
        <div class="col"><h2 class="section-title text-center">Serviços</h2></div>
      </div>
      <div class="row">
        <div class="col col-4">
          <div class="flex justify-center">
            <div class="big-icon">
              <img src="/images/design.png" />
            </div>
          </div>
          <h3 class="service-title">Design</h3>
          <ul class="unstyled-list">
            <li>Design Gráfico</li>
            <li>Design de Aplicativo</li>
            <li>UI Design</li>
            <li>UX Design</li>
            <li>Web Design</li>
          </ul>
        </div>
        <div class="col col-4">
          <div class="flex justify-center">
            <div class="big-icon">
              <img src="/images/desenvolvimento.png" />
            </div>
          </div>
          <h3 class="service-title">Desenvolvimento</h3>
          <ul class="unstyled-list">
            <li>E-commerce</li>
            <li>Front-end</li>
            <li>Aplicativos Mobile</li>
            <li>Projeto MVP</li>
            <li>Desenvolvimento PHP</li>
            <li>Desenvolvimento Web</li>
            <li>Sites em WordPress</li>
            <li>Integração e API</li>
            <li>Automação e IA</li>
          </ul>
        </div>
        <div class="col col-4">
          <div class="flex justify-center">
            <div class="big-icon">
              <img src="/images/marketing-digital.png" />
            </div>
          </div>
          <h3 class="service-title">Marketing Digital</h3>
          <ul class="unstyled-list">
            <li>Identidade Visual</li>
            <li>Vídeos Curtos</li>
            <li>Google Ads</li>
            <li>Facebook Ads</li>
            <li>Tiktok Ads</li>
            <li>Social Mídia</li>
            <li>Influencer Marketing</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  `
}
module.exports = {
  html
}
