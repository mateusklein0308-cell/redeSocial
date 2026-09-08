document.addEventListener("DOMContentLoaded", () => {
    const likeBtn = document.querySelector(".like-btn");
    const postMedia = document.querySelector(".post-media");
    const bookmarkBtn = document.querySelector(".bookmark-btn");

    if (!likeBtn) return;

    const likesCountSpan = likeBtn.querySelector(".likes-count");

    let isLiked = false;
    let baseLikes = 0;

    if (likesCountSpan) {
        likesCountSpan.textContent = "0";
    }

    // Formata números grandes (Ex: 1200 -> 1.2K)
    function formatLikes(num) {
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + "K";
        }
        return num.toString();
    }

    // Função de animação no SVG
    function animateSvg(element) {
        const svg = element.querySelector("svg");
        if (svg) {
            svg.style.transform = "scale(1.3)";
            setTimeout(() => {
                svg.style.transform = "scale(1)";
            }, 150);
        }
    }

    // Adiciona a curtida
    function addLike() {
        if (!isLiked) {
            baseLikes++;
            isLiked = true;
            likeBtn.classList.add("liked");

            if (likesCountSpan) {
                likesCountSpan.textContent = formatLikes(baseLikes);
            }
        }
        animateSvg(likeBtn);
    }

    // Remove a curtida
    function removeLike() {
        if (isLiked) {
            isLiked = false;
            baseLikes = Math.max(0, baseLikes - 1);
            likeBtn.classList.remove("liked");

            if (likesCountSpan) {
                likesCountSpan.textContent = formatLikes(baseLikes);
            }
        }
        animateSvg(likeBtn);
    }

    // Evento no BOTÃO DE CORAÇÃO (Alterna entre curtir e descurtir)
    likeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (isLiked) {
            removeLike();
        } else {
            addLike();
        }
    });

    // Evento na IMAGEM PRINCIPAL (Curte se não estiver curtido ou re-anima)
    if (postMedia) {
        postMedia.addEventListener("click", (e) => {
            e.stopPropagation();
            addLike();
        });
    }

    // Evento no botão de SALVAR (Bookmark)
    if (bookmarkBtn) {
        let isBookmarked = false;
        bookmarkBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            isBookmarked = !isBookmarked;
            bookmarkBtn.classList.toggle("bookmarked", isBookmarked);
            animateSvg(bookmarkBtn);
        });
    }
});