var menu = document.getElementById('menu'),
    menuPosition = menu.offsetTop,
    offerPos = document.getElementById('offer').offsetTop, //określa położenie id, ponieważ parametr offset dla zawartej w nim klasy odnosi się do bloku z id a nie do górnej krawędzi ekranu
    footerPos = document.getElementById('footer').offsetTop,
    header = document.getElementById('header'),
    logo = document.getElementsByClassName('logo_img')[0],
    contact = document.getElementsByClassName('contact')[0],
    offerLvl1 = document.getElementsByClassName('offer_level1')[0],
    offerLvl2 = document.getElementsByClassName('offer_level2')[0],
    footerFlip = document.getElementsByClassName('footer-flip')[0],
    footerItem = document.getElementsByClassName('footer-item');

function scrollPos() {
    var scrollFromTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    
    if (scrollFromTop >= menuPosition-50) {
        menu.className = 'is-fixed menu-fromTop';
        header.className = 'is-fixed';
        header.style = 'height: 50px; background-color: #fff; padding: 10px 0';
        logo.className = 'logo is-fixed_logo';
        contact.className = 'displayNone';
    } else{
        menu.className = '';
        header.className = '';
        header.style = 'background-color: transparent';
        logo.className = 'logo';
        contact.className = 'contact';
    }
    
    if(scrollFromTop-(offerPos/2) >= offerLvl1.offsetTop) {
        offerLvl1.style = 'opacity:1';
    } else {
        offerLvl1.style = '';
    }
    
    if(scrollFromTop-(offerPos/2) >= offerLvl2.offsetTop) {
        offerLvl2.style = 'opacity:1';
    } else {
        offerLvl2.style = '';
    }
    
    console.log(footerPos);
    if(scrollFromTop-(footerPos/1.3) >= footerFlip.offsetTop) {
        footerFlip.style = 'transform: rotateX(0deg)';
    } else {
        footerFlip.style = '';
    }
}

window.addEventListener('scroll',scrollPos,false);