let imgList = document.getElementById('imgList')
let dispList = document.getElementById('list');

async function getAlbumList() {
  let responseList = await fetch('http://jsonplaceholder.typicode.com/albums')
  let resaultAlbumList = await responseList.json();
  dispList.innerHTML = resaultAlbumList.map((data) => {
    return `<li value="${data.id}"> Id: ${data.id} Title: ${data.title}. UserId: ${data.userId}</li>`;
  }).join('');
};
// getAlbumList().then(() => getLogo());
getAlbumList();

async function getLogo(id = 1) {
  let responseLogo = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`);
  let resaultLogos = await responseLogo.json();  
  // imgList.innerHTML = resaultLogos.map((data) => {
  //   let img = `<img src="${data.url}">`
  //   return img;
  // }).join('');  
  let out = '<div>';
  for( let i in resaultLogos ) {
    out += `<li class="logo"><img src='${resaultLogos[i].url}'</li>`
  }
  out += '</div>'
  imgList.innerHTML = out;
};
getLogo();

dispList.addEventListener('click', elem => {
  let resault = elem.target.value;
    getLogo(resault);
})