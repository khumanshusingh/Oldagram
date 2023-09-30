const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21234,
    isliked: false,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 422,
    isliked: false,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 1512,
    isliked: false,
  },
];

let containerEl = document.getElementById("container");
let likeEl = document.getElementById("like-el");
let likeCountEL = document.getElementById("likeCount-el");

for (let i = 0; i < posts.length; i++) {
  containerEl.innerHTML += `
    <div class="post section">
        <div class="profile_information">
          <div class="pfp"><img src="${posts[i].avatar}" alt="" /></div>
          <div class="profile_name">
            <div class="name">${posts[i].name}</div>
            <div class="location">${posts[i].location}</div>
          </div>
        </div>
        <div class="post_image">
          <img src="${posts[i].post}" alt="" />
        </div>
        <div class="interactions">
          <div class="like" id="like-el"><img src="images/like.png" alt="" /></div>
          <div class="comment"><img src="images/comment.png" alt="" /></div>
          <div class="share"><img src="images/share.png" alt="" /></div>
        </div>
        <div class="likesandcomments">
          <div class="likes" id="likeCount-el">${posts[i].likes} likes</div>
          <div class="comment_section">
            <div class="username">${posts[i].username}</div>
            <div class="user_comment">${posts[i].comment}</div>
          </div>
        </div>
      </div>
    `;
}
