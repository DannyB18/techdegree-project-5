

const gallery = document.querySelector('#gallery')


let pictures = '';

const alt01 = 'Hay Bales';
const alt02 = 'Lake';
const alt03 = 'Canyon';
const alt04 = 'Iceberg';
const alt05 = 'Desert';
const alt06 = 'Fall';
const alt07 = 'Plantation';
const alt08 = 'Dunes';
const alt09 = 'Countryside Lane';
const alt10 = 'Sunset';
const alt11 = 'Cave';
const alt12 = 'Bluebells';

const cap01 = "I love hay bales. Took this snap on a drive through the countryside past some straw fields.";
const cap02 = "The lake was so calm today. We had a great view of the snow on the mountains from here.";
const cap03 = "I hiked to the top of the mountain and got this picture of the canyon and trees below.";
const cap04 = "It was amazing to see an iceberg up close, it was so cold but didn’t snow today.";
const cap05 = "The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.";
const cap06 = "Fall is coming, I love when the leaves on the trees start to change color.";
const cap07 = "I drove past this plantation yesterday, everything is so green!";
const cap08 = "My summer vacation to the Oregon Coast. I love the sandy dunes!";
const cap09 = "We enjoyed a quiet stroll down this countryside lane. ";
const cap10 = "Sunset at the coast! The sky turned a lovely shade of orange.";
const cap11 = "I did a tour of a cave today and the view of the landscape below was breathtaking.";
const cap12 = "I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in.";


function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

for (let i=1; i<=12; i++) {
    i = pad(i,2);
    // let altText = 'alt' + i;
    pictures += `
    <a href="images/photos/${i}.jpg" data-caption="${i}" class="thumbnail">
        <img src="images/thumbnails/${i}.jpg" alt="${i}">
    </a>
    `;
}

    gallery.innerHTML = pictures;

    const search = new Filter('search', 'data-caption');
    baguetteBox.run('.gallery');