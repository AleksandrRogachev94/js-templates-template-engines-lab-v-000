$(document).ready(() => {
  let stringyTemplate = $('#page-template').html()
  const pageTemplate = _.template(stringyTemplate)

  stringyTemplate = $('post-template').html()
  const postTemplate = _.template(stringyTemplate)

  stringyTemplate = $('#comments-template').html()
  const commnetsTemplate = _.template(stringyTemplate)

  stringyTemplate = $('#comment-template').html()
  const commentTemplate = _.template(stringyTemplate)

  const pages = $('#pages')
  const $form = $('#post-form')
  $form.on("submit", createPost)


  function createPost(ev){
    console.log("pam")
    ev.preventDefault()
    const myTitle = document.getElementById("postTitle").value;
    const myAuthor = document.getElementById("postAuthor").value;
    const myBody = document.getElementById("postBody").value;
    const html = template({ title: myTitle, author: myAuthor, body: myBody })
    console.log(html)
    pages.append(html)
  }
  function postComment(){

  }
})
