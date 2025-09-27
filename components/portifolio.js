
const html = async () => {
  return  /*html*/`
  <div id="portifolio">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="section-title text-center">Portifólio</h2>
        </div>
      </div>
      <div class="row">
        <div class="col col-4">
          <img
            class="fill-width"
            src="/images/vg-contabilidade.png"
          />
        </div>
        <div class="col col-4">
          <img
            class="fill-width"
            src="/images/federacao-gaucha-de-ciclismo.png"
          />
        </div>
        <div class="col col-4">
          <img
            class="fill-width"
            src="/images/foco-socioambiental.png"
          />
        </div>
      </div>
    </div>
  </div>
`}

module.exports = {
  html
}