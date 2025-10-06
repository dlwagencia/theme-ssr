
const base_url = process.env.API_URL
class Post {
  constructor() {

  }
  async getPosts() {
    try {
      const response = await fetch(base_url + '/post', {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      const posts = data.posts ? data.posts : { error: 'notFound' };
      return posts
    } catch (error) {
      const errortext = { error: `${String(error)} ${error} ${error.toString()}` }
      return errortext;
    }

  }
  async getPostByUrl(url) {
    try {
      const response = await fetch(base_url + `/post/url/${url}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      const post = data.post ? data.post : { error: 'notFound' };
      return post
    } catch (e) {
      const errortext = { error: `${String(e)} ${e} ${e.toString()}` }
      return errortext;
    }
  }
}


const zeroFill = (n) => {
  return n > 9 ? n : '0' + n
}

const dateFormat = (dateString) => {
  const dt = new Date(dateString)
  const D = zeroFill(dt.getDate())
  const M = zeroFill(dt.getMonth() + 1)
  const Y = dt.getFullYear()
  const H = zeroFill(dt.getHours())
  const m = zeroFill(dt.getMinutes())
  return `${D}/${M}/${Y} ${H}:${m}`
}

module.exports = {
  Post,
  dateFormat
}

