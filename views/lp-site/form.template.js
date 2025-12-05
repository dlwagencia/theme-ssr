const InputText = `<div class="form-group">
    <label for="{{id}}">{{label}}</label>
    <input type="{{type}}" id="{{id}}" name="{{id}}" class="form-control" required placeholder="{{placeholder}}" oninvalid="this.setCustomValidity('Preencha o campo {{label}} corretamente')">>
</div>`

const InputTextarea = `<div class="form-group">
    <label for="{{id}}">{{label}}</label>
    <textarea id="{{id}}" name="{{id}}" class="form-control" required placeholder="{{placeholder}}" oninvalid="this.setCustomValidity('Preencha o campo {{label}} corretamente')"></textarea>
</div>`    

const InputSelect = `<div class="form-group">
    <label for="{{id}}">{{label}}</label>
    <textarea id="{{id}}" name="{{id}}" class="form-control" required placeholder="{{placeholder}}" oninvalid="this.setCustomValidity('Preencha o campo {{label}} corretamente')"></textarea>
</div>` 

Form(
    InputText({
        label:"Nome Completo",
        id:"name",
        type:"text",
        placeholder:"Nome Completo",
    }),
    InputText({
        label:"E-mail",
        id:"email",
        type:"text",
        placeholder:"Nome Completo",
        
    }),
    InputText({
        label:"Telefone/Whatsapp",
        id:"name",
        type:"text",
        placeholder:"",
    }),
)