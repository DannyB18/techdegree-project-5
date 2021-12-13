baguetteBox.run('.gallery');
const gallery = document.querySelector('#gallery')
let pictures = '';

const alt1 = 'Hay Bales';
const alt2 = 'Lake';
const alt3 = 'Canyon';
const alt4 = 'Iceberg';
const alt5 = 'Desert';
const alt6 = 'Fall';
const alt7 = 'Plantation';
const alt8 = 'Dunes';
const alt9 = 'Countryside Lane';
const alt10 = 'Sunset';
const alt11 = 'Cave';
const alt12 = 'Bluebells';

const cap1 = "I love hay bales. Took this snap on a drive through the countryside past some straw fields.";
const cap2 = "The lake was so calm today. We had a great view of the snow on the mountains from here.";
const cap3 = "I hiked to the top of the mountain and got this picture of the canyon and trees below.";
const cap4 = "It was amazing to see an iceberg up close, it was so cold but didn’t snow today.";
const cap5 = "The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.";
const cap6 = "Fall is coming, I love when the leaves on the trees start to change color.";
const cap7 = "I drove past this plantation yesterday, everything is so green!";
const cap8 = "My summer vacation to the Oregon Coast. I love the sandy dunes!";
const cap9 = "We enjoyed a quiet stroll down this countryside lane. ";
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
    pictures += `
    <div class="img-div">
    <a href="images/photos/${i}.jpg" data-caption="${i}" class="thumbnail">
        <img src="images/thumbnails/${i}.jpg" alt="Hay Bales">
    </a>
    </div>
    `;
}

    gallery.innerHTML = pictures;