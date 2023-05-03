/*burgar = document.querySelector('.burgar')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
rigthnav = document.querySelector('.rigthnav')*/

DrDown = document.querySelector('.DrBtn')
document.querySelector('.DrList').style.display = 'none'
DrDown.addEventListener('click', ()=>{
    DrDown.classList.toggle('.DrList')
    if(DrDown.classList.contains('.DrList')){
        document.querySelector('.DrList').style.display ='inline'
    }
    else{
        document.querySelector('.DrList').style.display = 'none'
    }
   
})


document.querySelector('.burgar').addEventListener('click', () => {
    setTimeout(() => {
        document.querySelector('.rigthnav').classList.toggle('v-class-resp')
        document.querySelector('.nav-list').classList.toggle('v-class-resp')
        document.querySelector('.navbar').classList.toggle('h-nav-resp')
    }, 300)
})




