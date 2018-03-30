const pageTemplate = $('#page-template').html
const commentTemplate = $('#comment-template').html
const commentsTemplate = $('#comments-template').html

function postComment() {
  let commenter = document.getElementById("commenterName").value;
  let comment = document.getElementById("commentText").value;


  let templateFn = _.template(commentTemplate);

  let commentsDiv = document.getElementById("comments");

  let templateHTML = templateFn({ 'comment': comment, 'commenter': commenter });

  commentsDiv.innerHTML += templateHTML;
}

function createPost() {
  let title = $('#postTitle').value
  let body = $('#postBody').value
  let author = $('#postAuthor').value

  postHTML = _.template(postTemplate)({
    title: title,
    body: body,
    author: author
  })
}
