
const $gallery = document.getElementById('gallery')

window.addEventListener('click', (event)=>{
   let alt =event.target.getAttribute('alt')
   if(alt== null){alert('Please click image!')}
  else { alert (alt+' is clicked')}
})



//dbclick event

const $button =document.getElementById('bt')


   for (let i =1; i <= 12; i++){
      let image = document.createElement('img');
      image.setAttribute('src', 'image/'+i+'.jpg');
      image.setAttribute('alt',`image${i}`)
      document.querySelector("#gallery").appendChild(image)
   }

let $images = document.querySelectorAll('img')




   for(const image of $images){
      image.addEventListener('mouseover',function(e){
      
         e.target.style.width="100%"
      })

      image.addEventListener('mouseout',function(e){

         e.target.style.width="50%"
      })
   }