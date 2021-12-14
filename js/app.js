const gallery = document.querySelector('#gallery');


const altText = new Map([
    [1, 'Hay Bales'],
    [2, 'Lake'],
    [3, 'Canyon'],
    [4, 'Iceberg'],
    [5, 'Desert'],
    [6, 'Fall'],
    [7, 'Plantation'],
    [8, 'Dunes'],
    [9, 'Countryside Lane'],
    [10, 'Sunset'],
    [11, 'Cave'],
    [12, 'Bluebells'],
]);

const captions = new Map([
    [1, "I love hay bales. Took this snap on a drive through the countryside past some straw fields."],
    [2, "The lake was so calm today. We had a great view of the snow on the mountains from here."],
    [3, "I hiked to the top of the mountain and got this picture of the canyon and trees below."],
    [4, "It was amazing to see an iceberg up close, it was so cold but didn’t snow today."],
    [5, "The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons."],
    [6, "Fall is coming, I love when the leaves on the trees start to change color."],
    [7, "I drove past this plantation yesterday, everything is so green!"],
    [8, "My summer vacation to the Oregon Coast. I love the sandy dunes!"],
    [9, "We enjoyed a quiet stroll down this countryside lane. "],
    [10, "Sunset at the coast! The sky turned a lovely shade of orange."],
    [11, "I did a tour of a cave today and the view of the landscape below was breathtaking."],
    [12, "I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in."],
]);

function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

let pictures = '';
for (let i=1; i<=12; i++) {
    let alt = altText.get(i);
    let caption = captions.get(i);
    i = pad(i,2);
    pictures += `
    <a href="images/photos/${i}.jpg" data-caption="${caption}" class="thumbnail">
        <img src="images/thumbnails/${i}.jpg" alt="${alt}">
    </a>
    `;   
}
    gallery.innerHTML = pictures;
    const search = document.getElementById('search');
    search.addEventListener('keyup', searchGallery);
    baguetteBox.run('.gallery');