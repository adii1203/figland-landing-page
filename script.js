const middleBar = document.querySelector('.middle')
const bottomBar = document.querySelector('.bottom')
const hamburgurIcon = document.querySelector('.hamburgur')
const primaryNav = document.querySelector('.primary__nav')


document.addEventListener('click', (e)=>{

    if(e.target.id === 'hamburgur' || e.target.classList[0] === 'menu-bars'){
        if(primaryNav.getAttribute(['aria-expanded']) == 'false'){
            showNav()
        }
        else {
            hideNav()
        }
    }

    else if(e.target.id != 'primary__nav' && primaryNav.getAttribute(['aria-expanded']) == 'true'){
        hideNav()
    }
})

function showNav(){
    middleBar.classList.toggle('middle-animation')
    bottomBar.classList.toggle('bottom-animation')
    primaryNav.classList.toggle('nav-show')
    primaryNav.setAttribute('aria-expanded', 'true')
}
function hideNav(){
    middleBar.classList.remove('middle-animation')
    bottomBar.classList.remove('bottom-animation')
    primaryNav.classList.remove('nav-show')
    primaryNav.setAttribute('aria-expanded', 'false')
}