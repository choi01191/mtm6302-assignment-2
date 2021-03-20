
const $gallery = document.getElementById('gallery')

window.addEventListener('click', ()=>{

})

let $images = document.querySelectorAll('img')
console.log($images)
//
   $gallery.addEventListener("click", event =>{
      let alt =event.target.getAttribute('alt')
      if(alt== null){alert('background is clicked')}
     else { alert (alt+' is clicked')}
   })

//dbclick event

const $button =document.getElementById('bt')
$button.addEventListener('click',function(e){

   for (let i =1; i <= 12; i++){
      let image = document.createElement('img');
      image.setAttribute('src', 'image/'+i+'.jpg');
      image.setAttribute('alt',`image${i}`)
      document.querySelector("#gallery").appendChild(image)
   }
})

   $gallery.addEventListener('mouseover',function(e){
      
         e.target.style.width="70%"
      })

      $gallery.addEventListener('mouseout',function(e){

         e.target.style.with="50%"
      })