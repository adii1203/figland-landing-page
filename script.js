const middleBar = document.querySelector('.middle')
const bottomBar = document.querySelector('.bottom')
const hamburgurIcon = document.querySelector('.hamburgur')


hamburgurIcon.addEventListener('click', ()=>{
    middleBar.classList.toggle('middle-animation')
    bottomBar.classList.toggle('bottom-animation')

})