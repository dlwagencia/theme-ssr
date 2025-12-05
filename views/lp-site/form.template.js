/*<div class="form-group">
    <label for="email">E-mail Corporativo</label>
    <input type="email" id="email" name="email" data-field="contact.email" data-label="E-mail" class="form-control" required placeholder="seu@email.com" oninvalid="this.setCustomValidity('Preencha o campo corretamente')">
</div>*/

const InputText = new InputTemplate(`<div class="form-group">
    <label for="{{id}}">{{label}}</label>
    <input type="{{id}}" id="{{id}}" name="{{id}}" data-field="{{field}}" data-label="{{field}}" class="form-control" {{required}} placeholder="{{placeholder}}" {{oninvalid}}>
</div>`)