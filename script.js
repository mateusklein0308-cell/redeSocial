document.addEventListener("DOMContentLoaded", () => {
    const likeBtn = document.querySelector(".like-btn");
    const postMedia = document.querySelector(".post-media");
if (!likeBtn) return;

const likesCountSpan = likeBtn.querySelector(".likes-count");
const bookmarkBtn = document.querySelector(".bookmark-btn");

let isLiked = false;
let baseLiked = 0;

if (likesCountSpan){
    likesCountSpan.textContent = "0";
}

//números grandes

function formatLikes(num) {
   if(num >=1000){
    return (num/1000).toFixed(1)+"K";
   } 
   return num.toString();
}

function addLike(){
    baseLikes++;
    isLiked = true;
    likeBtn.classList.add("Liked");

    if(likesCountSpan){
        likesCountSpan.textContent = formatLikes(baseLikes);
    }
}
}








})