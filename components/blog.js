const { Theme } = require('./theme.js');
const html = async () => {
  const posts = await Theme.getPosts();
  let listPosts = posts.map((item) => {
    return /*html*/`
    <div class="col col-4">
      <a href="/post/${item.url}">
        <h3>${item.title}</h3>
      </a>
    </div>
    `
  })
  if (!listPosts) {
    listPosts = [''];
  }
  return /*html*/`
  <div id="blog">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="section-title text-center">BLOG</h2>
        </div>
      </div>
      <div class="row flex">
      ${listPosts.join('')}
      </div>
    </div>
  </div>
`;
}
module.exports = {
  html
}