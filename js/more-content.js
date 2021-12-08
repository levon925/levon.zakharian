const showMoreBtn = document.querySelector('.show-more-button');
const showMoreContent = document.getElementById('block1');
const showMoreDiv = document.getElementById('show-more')

showMoreBtn.onclick = function(){
    showMoreContent.classList.remove('display-none')
    showMoreDiv.classList.add('display-none')
    
}