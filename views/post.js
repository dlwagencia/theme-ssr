const Index = require('../index.js')
const { Theme } = require('../components/theme.js')
const postView = async (req, res) => {
    const url = req.params.url
    const post = await Theme.getPostByUrl(url);

    if (!post) {
        res.redirect('/not-found')
        return;
    }

    const content = `<div id="post">
    <div class="container">
        <div class="row justify-center">
            <div class="col-6">
                <h1>${post.title}</h1>
                ${post.content}
            </div>
            <div class="col-2">
                <div class="tumblr-post" data-href="https://embed.tumblr.com/embed/post/t:ZZth3WWPJ7szr5tCCTDcBQ/795518604211781632/v2" data-did="a21e50fbd2052c4b915109b55873fe984c3cb083"  ><a href="https://www.tumblr.com/dlwagencia/795518604211781632/qualquer-pessoa-que-trabalha-online-precisa-de-um">https://www.tumblr.com/dlwagencia/795518604211781632/qualquer-pessoa-que-trabalha-online-precisa-de-um</a></div>
                <script async src="https://assets.tumblr.com/post.js?_v=38df9a6ca7436e6ca1b851b0543b9f51"></script>
            </div>
        </div>
    </div>
    </div>`

    const title = post.title;
    const index = await Index.html(title, content)
    res.send(index);
}
module.exports = postView