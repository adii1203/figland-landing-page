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


// image animation

gsap.to('.image-3',{
    scrollTrigger:{
        trigger:".image-3",
        start:"50px center",
        end:'80px',
        scrub:1
    },
    opacity:1,
    duration:1,
    y:'6rem',
    rotate:'45deg'
})
gsap.to('.image-1',{
    scrollTrigger:{
        trigger:'.image-3',
        start:'-30px',
        end:'60px',
        scrub:1,
    },
    opacity:1,
    duration:1,
    y:'22rem'
    
})
gsap.to('.image-2',{
    scrollTrigger:{
        trigger:'.image-3',
        start:'-40px',
        end:'60px',
        scrub:1,
    },
    opacity:1,
    duration:1,
    y:'22rem'
})


// features section animation
gsap.from('.highlight div',{
    opacity:0,
    y:'40px',
    duration:.8,
    ease:Back.easeOut,
    scrollTrigger:{
        trigger:".features-head p",
        start:startPoition(),
    }
})
gsap.from('.highlight > p',{
    opacity:0,
    y:'40px',
    duration:.8,
    delay:.5,
    ease:Expo.easeOut,
    scrollTrigger:{
        trigger:".features-head p",
        start:startPoition(),
    }
})


function startPoition(){
    let test = document.querySelector('.features-body')
    if(test.getBoundingClientRect().width <= '400'){
        return '150px'
    }
    else{
        return '-180px'
    }
}

// content section animation

gsap.from('.content-head', {
    y:'80px',
    opacity:0,
    scrollTrigger:{
        trigger:'.highlights',
        start:'center',
        scrub:1,
    }
})

gsap.from('.left',{
    x:'-30px',
    opacity:0,
    duration:.5,
    
    scrollTrigger:{
        trigger:".content-head",
        start:'-30px 80px',
        scrub:1,
    }
})
gsap.from('.right',{
    x:'-40px',
    opacity:0,
    delay:.5,
    duration:0.5,
    
    scrollTrigger:{
        trigger:".content-head",
        start:'-30px 80px',
        scrub:1,
    }
})

// testimonials 

const testimonialBody = document.querySelector('.testimonial-body')
// let width = document.querySelector('.test-box').getBoundingClientRect().width
const slides = document.querySelectorAll('.test-box')
let amountToMove = slides[0].getBoundingClientRect().width

testimonialBody.style.width = `${amountToMove}px`


slides[0].style.right = 0 * amountToMove +'px'
slides[1].style.right = -3 * amountToMove +'px'
slides[2].style.right = -3 * amountToMove +'px'
slides[3].style.right = -3 * amountToMove +'px'

// console.log(amountToMove* -2 + 'px');

const next = document.querySelector('.next')
const previous = document.querySelector('.previous')

next.addEventListener('click', ()=>{
    let currentActive = document.querySelector('.active')
    let nextActive = currentActive.nextElementSibling
   
    if(nextActive != null){
        currentActive.style.opacity = 0
        nextActive.style.right = '0px'
    
        currentActive.classList.remove('active')
        nextActive.classList.toggle('active')
    }
})

previous.addEventListener('click', ()=>{
    let currentActive = document.querySelector('.active')
    let previousActive = currentActive.previousElementSibling

    console.log(previousActive);
    previousActive.style.opacity = 1
    currentActive.style.right = -3 * amountToMove +'px'

    currentActive.classList.remove('active')
    previousActive.classList.add('active')
})
