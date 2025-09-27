const html = async () => {
  return /*html*/`
    <div id="footer">
      <div class="container">
        <div class="row">
          <div class="col col-3">
            <div class="footer-logo">
              <img src="/images/dlw-logo.png">
            </div>
            <p> Endereço: Rua Odilo Aloysio Daudt, 423, 14C - Feitoria - São Leopoldo - RS </p>
           
          </div>
          <div class="col col-3">
            <h3>Menu</h3>
            <ul>
              <li><a href="#portifolio" class="link">Portifolio</a></li>
              <li><a href="#servicos" class="link">Serviços</a></li>
              <li><a href="#empresa" class="link">Empresa</a></li>
              <li><a href="#blog" class="link">Blog</a></li>
            </ul>
          </div>
          <div class="col col-3">
            <h3>Entre em Contato</h3>
            <ul>
              <li><a href="tel:5551985239789" class="icon-phone link"><h3>(51) 98562-3979</h3></a></li>
              <li><a href="mailto:contato@dlw.dev.br" class="icon-email link"><h4>contato@dlw.dev.br</h4></a></li>
            </ul>
          </div>
          <div class="col col-3">
            <h3>Siga nas redes</h3>
            <ul class="flex">
              <li><a href="https://www.instagram.com/dlwagencia" class="icon-instagram link icon"></a></li>
              <li><a href="https://www.linkedin.com/company/dlw-agencia" class="icon-linkedin link icon"></a></li>
              <li><a href="https://dlwagencia.bsky.social" class="icon-bluesky link icon"></a></li>
              <li><a href="https://www.tumblr.com/dlwagencia" class="icon-tumblr link icon"></a></li>
           
            </ul>
          </div>
        <div>
      </div>
    </div>
  `
}


module.exports = {
  html
}