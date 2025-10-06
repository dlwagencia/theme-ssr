const render = require('./components/render.js');
const { Post, dateFormat } = require('./components/post.js');
const post = new Post();
class Theme {
    constructor() {

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
        const posts = (await post.getPosts()).splice(0, 3);
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