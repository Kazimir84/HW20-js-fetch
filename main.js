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
  let output = '<div>';
  for( let i in resaultLogos ) {
    output += `<li class="logo"><img src='${resaultLogos[i].url}'</li>`
  }
  output += '</div>'
  imgList.innerHTML = output;
};
getLogo();

dispList.addEventListener('click', elem => {
  let resault = elem.target.value;
    getLogo(resault);
})
