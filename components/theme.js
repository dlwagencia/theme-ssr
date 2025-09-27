
const base_url = process.env.API_URL
const Theme = {
  getPosts: async () => {
    try {
      const response = await fetch(base_url + '/post', {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      const posts = data.posts ? data.posts : [];
      return posts
    } catch (e) {
      console.log('Error on GetPosts check ' + base_url)
      return []
    }

  },
  getPostByUrl: async (url) => {
    try {
      const response = await fetch(base_url + `/post/url/${url}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();

      const post = data.post ? data.post : null;
      return post
    } catch (e) {
      console.log('Error on GetPosts check ' + base_url)
      return []
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
  Theme,
  dateFormat
}

