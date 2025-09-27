const html = async () => {
  return  /*html*/`
  <div id="contato">
    <div class="container">
      <div class="row justify-center">
        <div class="col col-4">
          <div class="card pad-30">
            <h3 class="section-title mar-0">Contato</h3>
            <form id="contactForm">
              <label class="label" for="form_name">Nome</label>
              <input id="form_name" type="text" class="input-text" name="name" placeholder="Nome" autocomplete="off">
              <label for="form_email" class="label">E-mail</label>
              <input id="form_email" type="text" class="input-text" name="email" placeholder="E-mail" autocomplete="off">
              <label for="form_phone" class="label">Telefone</label>
              <input id="form_phone" type="text" class="input-text" name="phone" placeholder="Telefone" autocomplete="off">
              <label for="form_message" class="label">Mensagem</label>
              <textarea id="form_message" type="text" class="input-textarea" name="message" placeholder="Mensagem"></textarea>
              <span id="contactMessage"></span>
              <button class="button">
              Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
`
}

module.exports = { html } 