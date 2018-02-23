let isSmall = false;
let isEye = false;

function small() {
    if (!isSmall){
        document.querySelector('.llama-wrapper').style.cssText = 'transform: scale(0.1)';
        document.querySelector('.butt').innerHTML = 'no smol';
        isSmall = true;
    }
    else {
        document.querySelector('.llama-wrapper').style.cssText = 'transform: scale(1)';
        document.querySelector('.butt').innerHTML = 'smol';
        isSmall = false;
    }
}

function eye() {    
    if (!isEye){
        document.querySelector('.llama-wrapper').style.cssText = 'transform: scale(10); transform-origin: 75px 95px';
        isEye = true;
    }
    else {
        document.querySelector('.llama-wrapper').style.cssText = 'transform: scale(1); transform-origin: 75px 95px';
        isEye = false;
    }
}