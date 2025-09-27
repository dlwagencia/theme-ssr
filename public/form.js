
/* Variables */

const base_url = "http://localhost:8001"
const url = base_url + "/api/contact";
const dom = (id) => (document.getElementById(id));
const query = (id) => (document.querySelector(id));

/* Functions */

const onload = () => {

  const form = dom('contactForm');
  const message = dom('contactMessage');

  const onJson = (response) => {
    if (response.error) {
      message.innerHTML = `<span class="error">${response.error}</div>`
      return;
    }
    return response.json()
  }
  const onData = (data) => {
    if (data.message) {
      message.innerHTML = `<span class="success">${data.message}</div>`
      form.reset();
    }
  }
  const onError = (error) => {
    message.innerHTML = `<span class="error">Erro de conexão, verifique sua rede ou tente mais tarde</div>`
  }

  const isRequired = (data, messages) => {
    const errors = []

    for (let name in messages) {

      let field = data.get(name);
      if (!field || String(field).trim() == "") {
        let input = query(`[name='${name}']`)
        input.classList.add('error');
        let message = `<span class="error">${messages[name]}</div>`
        errors.push(message);
      }

    }

    return errors
  }

  onValidateErrors = (errors) => {
    if (errors.length > 0) {
      message.innerHTML = errors.join('<br>\n')
      return true;
    }
    return false;
  }

  const resetError = (event) => {
    console.log(event.target);
    event.target.classList.remove('error')
    message.innerHTML = ''
  }

  const submit = (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const messages = {
      name: "Digite o Nome",
      email: "Digite o Email",
      phone: "Digite o Telefone",
      message: "Digite a Mensagem"
    }

    let errors = isRequired(data, messages);

    if (onValidateErrors(errors)) {
      return;
    }
    const json = Object.fromEntries(data.entries());
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(json)
    }

    try {
      fetch(url, options)
        .then(onJson)
        .then(onData)
        .catch(onError)
    } catch (e) {
      console.log(e)
    }
  }

  let inputName = query('[name="name"]');
  let inputEmail = query('[name="email"]');
  let inputPhone = query('[name="phone"]');
  let inputMessage = query('[name="message"]');
  form.addEventListener("submit", submit)
  inputName.addEventListener("blur", resetError)
  inputEmail.addEventListener("blur", resetError)
  inputPhone.addEventListener("blur", resetError)
  inputMessage.addEventListener("blur", resetError)
}


window.onload = onload;