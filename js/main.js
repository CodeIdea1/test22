
let toggle = document.querySelector('.links-container .toggle-menu');
let ul = document.querySelector('.links-container .ul');
toggle.onclick = function(e) {
    e.stopPropagation()
    ul.classList.toggle('open');
}
document.addEventListener('click', (e)=> {
    if(e.target !== toggle && e.target !== ul) {
        if(ul.classList.contains('open')){
            ul.classList.remove('open');
        }
    }
})
ul.onclick = function(e) {
    e.stopPropagation()
}

window.onscroll = function () {
    let windowHeight = this.innerHeight;
    let windowScrollTop = this.scrollY;
    // start aboutus section animation
    let modemApp = document.querySelector('.modem-app');
    let modemTop = modemApp.offsetTop;
    let modemHeight = modemApp.offsetHeight;
    if (windowScrollTop > (modemTop + modemHeight - windowHeight -200 )) {
        let mobile1 = document.querySelector('.mobiles .mobile1');
        mobile1.classList.add('animation');
        let mobile2 = document.querySelector('.mobiles .mobile2');
        mobile2.classList.add('animation');
    }
    if (windowScrollTop > (modemTop + modemHeight - windowHeight -600 )) {
        let header = document.querySelector('.header');
        header.style.background = 'white';
        let landing = document.querySelector('.landing-page');
        landing.style.cssText = 'animation-name: landing'
        let information = document.querySelector('.information');
        information.style.cssText = 'animation-name: information'
    }
    
    let vehicleFleet = document.querySelector('.vehicle-fleet');
    let vehicleTop = vehicleFleet.offsetTop;
    let vehicleHeight = vehicleFleet.offsetHeight;
    if (windowScrollTop > (vehicleTop + vehicleHeight - windowHeight -650 )) {
        let mobiles = document.querySelector('.mobiles');
        mobiles.style.cssText = 'animation-name: mobiles;'
    }
    if (windowScrollTop > (vehicleTop + vehicleHeight - windowHeight -400 )) {
        let car = document.querySelectorAll('.car img');
        car.forEach((e)=> {
            e.classList.add('animation');
        })
    }


    let features = document.querySelector('.features');
    let featuresTop = features.offsetTop;
    let featuresHeight = features.offsetHeight;
    if (windowScrollTop > (featuresTop + featuresHeight - windowHeight -200 )) {
        let card = document.querySelectorAll('.cards-container .card');
        card.forEach((e)=> {
            e.classList.add('animation');
        })
        let icon = document.querySelectorAll('.card .icon');
        icon.forEach((e)=> {
            e.classList.add('animation');
        })
    }

}


let switcherLis = document.querySelectorAll('.switcher li');
let img = document.querySelectorAll('.container .car');
let imgs = Array.from(img);
switcherLis.forEach((li)=> {
    li.addEventListener('click', removeActive);
    li.addEventListener('click', manageImae);

})
function removeActive () {
    switcherLis.forEach((li)=> {
        li.classList.remove('active');
        this.classList.add('active');
    })
}
function manageImae() {
    imgs.forEach((img)=> {
        img.style.display = 'none'
        document.querySelectorAll(this.dataset.cat).forEach((ele)=> {
            ele.style.display = 'block'
        })
    })
}
    // let landing = document.querySelector('.landing-page');
    // let landingTop = landing.offsetTop;
    // let landingHeight = landing.offsetHeight;
    // if (windowScrollTop < (landingTop + landingHeight - windowHeight ))
    //     information.classList.remove('animation');

    // }

