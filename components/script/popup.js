const display = document.getElementById('full-image');

// Button View Image
const viewimage = document.querySelectorAll('.view-image').forEach((item,i) => {
    item.addEventListener('click',() => {
        const fullscreenimg = document.querySelector('.full-imageframe');
        const album_image = document.querySelectorAll('.album-image');

        display.classList.add('show');

        fullscreenimg.src = album_image[i].src;
        console.log(item,i,album_image);
    })
})


// Exit View Image
const exitImg = document.querySelector('.exitImg');
exitImg.addEventListener("click",function() {
    display.classList.remove('show');
})