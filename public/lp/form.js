const dom = (id) => (document.getElementById(id));
const query = (name) => (document.querySelector(name));
const list = (name) => (document.querySelectorAll(name));
class FormIntegration{
    constructor({id, responseTag, fields, url, request}){
        this.isDebug = false;
        this.id = id;
        this.responseTag = responseTag;
        this.form = dom(id);
        this.url = url;
        this.request = request || {};
        this.fields = fields || [] ;
    }
    enableDebug(){
        this.isDebug = true;
    }
    debug(message, _line, _method, _class){
        if(!this.isDebug){return;}
        console.log(message);
    }
    setSubmitAction(){
        this.form.addEventListener('submit', this.submitAction())
    }
    submitAction(){
        const form = this;
        return function(e){
            e.preventDefault();
            form.resetResponse();
            try {
                if(form.request.method == 'POST'){
                    form.request.body = form.setBody();
                }
                fetch(form.url, form.request)
                    .then(form.responseJson)
                    .then(form.responseData)
                    .catch(form.onError)
            } catch (e) {
                form.debug(e);
                form.onError(e);
            }
        }
        
    }
    setBody(){
        const fields = list('[data-field]');
        this.debug(fields)
        const body = {}
        for(let field of fields){
            this.debug(field.name);
            if(field){
                const attr = field.getAttribute('data-field');
                const fieldName =  attr.split('.');
                this.debug(fieldName);

                if(fieldName[0] && !fieldName[1]){
                    body[fieldName[0]] = field.value;
                }

                if(fieldName[1] && fieldName[0]){
                    if(typeof body[fieldName[0]] != 'object'){
                        body[fieldName[0]] = {}
                    } 
                    body[fieldName[0]][fieldName[1]] = field.value;  
                }
                
            }
        }
        return JSON.stringify(body);
    }
    

    responseJson = (response) => {
        console.log(response);
        return response.json()
    }
    responseData = (data) => {
        console.log(data);
        this.form.reset();
            
    }
    resetResponse = () =>{
        dom(this.responseTag).innerHTML = "";
    }
    onError = (error) => {
        dom(this.responseTag).innerHTML = dom(this.responseTag).innerHTML + ` <span class="error">${error}</div>`;
    }
}
