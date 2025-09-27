const html = async () => {

  return  /*html*/`
  <div id="header">
    <div class="container">
      <div class="row">
        <div class="col col-12 flex items-center header-toolbar">
          <a href="/#home">
            <img
              class="logo"
              src="/images/dlw-logo.png"
            />
          </a>
          <nav class="menu">
            <div class="icon-menu" onclick="menu(event)"></div>
            <ul class="menu-itens">
              <li class="menu-item"><a onclick="menuItem(event)" href="/#portifolio">Portifólio</a></li>
              <li class="menu-item"><a onclick="menuItem(event)" href="/#servicos">Serviços</a></li>
              <li class="menu-item"><a onclick="menuItem(event)" href="/#empresa">Empresa</a></li>
              <li class="menu-item"><a onclick="menuItem(event)" href="/#blog">Blog</a></li>
              <li class="menu-item"><a onclick="menuItem(event)" href="/#contato">Contato</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
`
}
module.exports = {
  html
}