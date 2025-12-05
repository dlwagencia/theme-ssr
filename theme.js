
const render = require('./components/render.js');
const { Post, dateFormat } = require('./components/post.js');
const token = "3685df46-9a0e-4c1c-9458-6c94c8bf0a3e"
const post = new Post();
class Theme {
    constructor() {}
    async page(req, res){
        let index = '';
        if(req.url == '/criacao-de-site-profissional'){
            index = await render('views/lp-site/index',{});
        }
        res.send(index);
    }
    async api(req, res){
        let bodyJson = req.body;
        console.log(bodyJson, 'JSON');
        let data = '';
        let errortext = '';
        if(req.url == '/agendor/v3/people/upsert'){
            const url = "https://api.agendor.com.br/v3/people/upsert";
            try {
                const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Token ${token}`,
                },
                body: JSON.stringify(bodyJson)
                });
                data = await response.json();
                
            } catch (error) {
                errortext = `${String(error)} ${error} ${error.toString()}`
            }
            
        }
        res.json({data, errortext});
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
        const indexData = {
            content: '<div id="not-found"><p>Página não encontrada</p></div>',
            title: "Página não encontrada"
        }
        const index = await render('views/index', indexData);
        res.send(index);
    }
}
module.exports = Theme 