$(document).ready(() => {
  let stringyTemplate = $('#page-template').html()
  const pageTemplate = _.template(stringyTemaplate)

  stringyTemplate = $('post-template').html()
  const postTemplate = _.template(stringyTemplate)

  stringyTemplate = $('#comments-template').html()
  const commnetsTemplate = _.template(stringyTemplate)

  stringyTemplate = $('#comment-template').html()
  const commentTemplate = _.template(stringyTemplate)
})

function createPost(){

}
function postComment(){

}
