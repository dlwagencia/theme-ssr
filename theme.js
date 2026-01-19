const fs = require('fs').promises;
const fetch = require('node-fetch');
const render = require('./components/render.js');
const { Post, dateFormat } = require('./components/post.js');
const token = "3685df46-9a0e-4c1c-9458-6c94c8bf0a3e"
const post = new Post();
const theme_dir = "./theme"


class Theme {
    constructor() {}
    async index (req, res){
        
        const index = require('./theme/index.js');
        
        const head = await render(`${theme_dir}/${index.head?.[0]?.[0]}`, index.head?.[0]?.[1]); 

        const bodyItens = [] 
        for(let item of index.body){
            bodyItens.push(await render(`${theme_dir}/${item[0]}`, item[1]));
        }
        const body = bodyItens.join('');
        const theme = await render(`${theme_dir}/layout.html`, {head, body});
        res.send(theme);
    }
    async page(req, res){
        const page = require('./theme/page.js');
        const page_content = req.url.replace("/","");
        if(page_content == 'favicon.ico'){
            res.status('404').send('NOT FOUND');
            return;
        }
        const head = await render(`${theme_dir}/${page.head?.[0]?.[0]}`, page.head?.[0]?.[1],res); 
        
        const bodyItens = [] 
        for(let item of page.body){
            if(item[0] == 'content'){
                bodyItens.push(await render(`${theme_dir}/page/${page_content}.html`, item[1],res));
                continue;
            }
            bodyItens.push(await render(`${theme_dir}/${item[0]}`, item[1],res));
        }
        const body = bodyItens.join('');
        const theme = await render(`${theme_dir}/layout.html`, {head, body}, res);
        res.send(theme); 
    }

    async api_contact(req, res){
        const base_url = process.env.API_AGENDOR
        const token = process.env.TOKEN_AGENDOR
        let body = req.body;
        console.log(body, 'JSON');
        let message = "Mensagem enviada com sucesso!"
        let error = null;
        const response = await fetch(base_url + `/people`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            body: JSON.stringify({
                name: body.name,
                "contact": {
                    "email": body.email,
                    "whatsapp": body.phone,
                },
                "customFields":{
                    "message":body.message,
                    "company_size": body.company_size || ""
                }
            })
        });

        console.log(response);

        if(error){
            message = "API Indísponivel"
        }
        res.json({message, error});
    }
    async blog(req, res){
        const page = require('./theme/blog.js');
        const page_content = req.url.replace("/","");
        if(page_content == 'favicon.ico'){
            res.status('404').send('NOT FOUND');
            return;
        }
        const head = await render(`${theme_dir}/${page.head?.[0]?.[0]}`, page.head?.[0]?.[1],res); 
        
        const bodyItens = [] 
        for(let item of page.body){
            if(item[0] == 'blog'){
                bodyItens.push(await render(`${theme_dir}/blog/index.html`, {}, res));
                continue;
            }
            bodyItens.push(await render(`${theme_dir}/${item[0]}`, item[1],res));
        }
        const body = bodyItens.join('');
        const theme = await render(`${theme_dir}/layout.html`, {head, body}, res);
        res.send(theme); 
    }
    async post(req, res) {
        const url = req.params.url
        const postData = await post.getPostByUrl(url);
        if (postData.error) {
            res.redirect('/not-found');
            return;
        }
        const indexData = {
            title: 'DLW Agência Online',
            header: await render('views/theme/header'),
            footer: await render('views/theme/footer'),
            content: await render('views/post/index', postData),
        }
        const index = await render('views/index', indexData);
        res.send(index);
    }
    async home(req, res) {
        const posts = await post.getPosts()
        let postsTemplate = '';
        if (posts.error) {
            res.send('error:' + posts.error);
            return;
        }
        for (let item in posts) {
            postsTemplate += await render('views/home/blogPost', posts[item]);
        }

        const homeData = {
            home: await render('views/home/home'),
            portifolio: await render('views/home/portifolio'),
            services: await render('views/home/services'),
            blog: await render('views/home/blog', { posts: postsTemplate }),
            company: await render('views/home/company'),
            contact: await render('views/home/contact')
        }

        const indexData = {
            title: 'DLW Agência Online',
            header: await render('views/theme/header'),
            footer: await render('views/theme/footer'),
            content: await render('views/home', homeData),
        }
        const index = await render('views/index', indexData);

        res.send(index);
    }
    async error(req, res) {
        const index = "NOT FOUND";
        res.send(index);
    }
}
module.exports = Theme 