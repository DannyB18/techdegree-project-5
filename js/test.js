const gallery = document.querySelector('#gallery');
let pictures = ''

function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

for (let i=1; i<=12; i++) {
    i = pad(i,2);
    pictures += `
    <a href="images/photos/${i}.jpg" data-caption="${i}">
        <img src="images/thumbnails/${i}.jpg" alt="Hay Bales">
    </a>
    `;
}

    gallery.innerHTML = pictures;
