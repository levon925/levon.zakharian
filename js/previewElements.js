/* <div class="website-link">
<span class="website-link-text">
    Website 1
    <img class="open-site-arrow" src="img/website-arrow.png" alt="">
</span>
</div> */

/* <div class="display-none preview">
<img class="preview-image" src="img/website-1-preview.png" alt="">
</div> */

const previewList = document.querySelector('.preview-blocks'),
      websitesList = document.querySelector('.websites');

const websiteList = {
    title:['Website 1', 'Website 2', 'Website 3', 'Website 4', 'Website 5', 'Website 6'],
    link: ['#','#','#','#','#','#'],
    image:['website-1-preview.png', 'website-2-preview.png', 'website-3-preview.png', 'website-4-preview.png', 'website-5-preview.png', 'website-5-preview.png']
};
//     0:[
//         title: 'Website 1',
//         image: 'website-1-preview.png'
//     ],
//     1: [
//         title: 'Website 2',
//         image: 'website-2-preview.png'
//     ],
//     2: [
//         title: 'Website 2',
//         image: 'website-2-preview.png'
//     ],
//     3: [
//         title: 'Website 2',
//         image: 'website-2-preview.png'
//     ],
//     4: [
//         title: 'Website 2',
//         image: 'website-2-preview.png'
//     ]

// 

// let previewElement = `<div class='display-none preview'><img class='preview-image' src='img/${websiteList[0].image}' alt=''></div>`;
websitesList.innerHTML = '';
previewList.innerHTML='';
// previewList.innerHTML = previewElement;
// console.log(previewList);

for (let i = 0; i < websiteList.title.length; i++) {
    previewList.innerHTML += `<div class='display-none preview'><img class='preview-image' src='img/${websiteList.image[i]}' alt=''></div>`;
    websitesList.innerHTML += `<hr class="website-hr element-animation">
    <div class="website element-animation">
        <a href="${websiteList.link[i]}" class="wbst">
            <div class="website-link">
                <span class="website-link-text">
                    ${websiteList.title[i]}
                    <img class="open-site-arrow" src="img/website-arrow.png" alt="">
                </span>
            </div>
        </a>
    </div>`;

    // if (websiteList.title.length > 5) {
    //     websitesList.classList.add('display-none');
    // }

    //console.log(websitesList[i]);

//previewList.innerHTML='';
    //previewList.innerHTML += previewElement;
    console.log(previewList);
    
}
const preview = document.querySelectorAll('.website-link'),
      previewBlock = document.querySelectorAll('.preview');

    preview.forEach((element, i = 0) => {
        element.addEventListener('mousemove', previewPosition);
        element.addEventListener('mouseover', showPreview);
        element.addEventListener('mouseout', showPreview);

        function showPreview() {
            previewBlock[i].classList.toggle("display-none");
        }
        function previewPosition(e) {
            let x = e.pageX;
            let y = e.pageY;
            
            previewBlock[i].style.left = x + "px";
            previewBlock[i].style.top = y + "px";
        }
    });

