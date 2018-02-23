let isSmall = false;

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