
const websitesList = document.querySelector('.websites'),
showMoreBtn = document.querySelector('.show-more-button'),
previewList = document.querySelector('.websites-item'),
div = document.createElement('li'),
COUNT_WEBSITES = 3;;

div.classList.add('preview');
div.classList.add('element-show');
div.classList.add('display-none');




const getData = () => fetch('db/websites.json')
.then((response) => {
  if(response.ok) {
      return response.json();
  } else {
      throw `Something wrong, try again later, error: ${response.status}`;
  }
})
.catch(error => console.error(error));

const createStore = async () => {
const data = await getData();
return {
  data,
  counter: 0,
  count: COUNT_WEBSITES,
  get length() {
      return this.data.length;
  },
  get websitesData(){
      if(this.counter == 0){
          const renderData = this.data.slice(this.counter,this.counter + 5);
          this.counter += 5;
          return renderData;
      } else {
          const renderData = this.data.slice(this.counter, this.counter + this.count);
          this.counter += renderData.length;
          return renderData;
      }

  }
};
};

const renderWebsites = data => {

const websites = data.map((item) => {

  const { link,title,image } = item;

  const li = document.createElement('li');
  li.classList.add('websites-item');
  //li.classList.add('element-animation');
  //li.classList.add('element-show')

  li.innerHTML = `
  <hr class="website-hr element-animation element-show">
  <div class="website element-animation element-show" data-image= "${image}">
      <a href="${link}" class="wbst">
          <div class="website-link">
              <span class="website-link-text">
                  ${title}
                  <img class="open-site-arrow" src="img/website-arrow.png" alt="">
              </span>
          </div>
      </a>
  </div>
  `;
  return li;
});
websitesList.append(...websites);
};

const initWebsites = async () => {
const store = await createStore();
renderWebsites(store.websitesData);
showMoreBtn.addEventListener('click', () => {
  renderWebsites(store.websitesData);
  if(store.length === store.counter){
      showMoreBtn.remove();
  }
});
};

initWebsites();

websitesList.addEventListener('mouseover', (event) => {
const websiteContains = event.target.closest('[data-image]');
div.innerHTML = `<img class="preview-image" src="img/${websiteContains.dataset.image}" alt="">`;

if (websiteContains) {
  document.body.append(div);
  div.classList.toggle("display-none");
}
});
websitesList.addEventListener('mousemove', (event) => {
const websiteContains = event.target.closest('.websites-item');

if (websiteContains) {
      let x = event.pageX;
      let y = event.pageY;
      
      div.style.left = x + "px";
      div.style.top = y + "px";
}
});
websitesList.addEventListener('mouseout', (event) => {
const websiteContains = event.target.closest('.websites-item');

if (websiteContains) {
  div.classList.toggle("display-none");
}
});
