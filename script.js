const shareBtn = document.querySelector('.article__btn');
const share = document.querySelector('.article__share');

shareBtn.addEventListener('click', () => {
    share.classList.toggle('active');
});