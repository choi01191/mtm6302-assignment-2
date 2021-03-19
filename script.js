
const $gallery = document.getElementById('gallery')


for (let i =1; i <= 12; i++){
   let image = document.createElement('img');
   image.setAttribute('src', 'image/'+i+'.jpg');
   document.querySelector("#gallery").appendChild(image)
}
funciton 