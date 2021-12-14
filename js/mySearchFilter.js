function searchGallery() {
    let input = document.getElementById('search').value;
    let filter = input.toLowerCase();

    const aTag = document.getElementsByTagName('a');
    const imgTag = document.getElementsByTagName('img');

    for (let i=0; i < aTag.length; i++) {
        let caption = aTag[i].getAttribute("data-caption");
        caption = caption.toLowerCase();
        let alt = imgTag[i].getAttribute("alt");
        alt = alt.toLowerCase();

        if ( alt.includes(filter) || caption.includes(filter) ) {
            aTag[i].style.display = "";
        } else {
            aTag[i].style.display = "none";
        }
    }
}