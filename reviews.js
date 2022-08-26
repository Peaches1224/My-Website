console.log('Hey')
const reviewsPhotos = document.querySelectorAll('.reviews-photos')

const imageModal=document.getElementById('imageModal')

const largeImage=document.getElementById('largeImage')
 
reviewsPhotos.forEach(element => {
    element.addEventListener('click',(e)=> {
     e.stopPropagation()
     imageModal.style.display='flex'
     largeImage.src=element.src
    })



    
});

imageModal.addEventListener('click',(e)=>{
    imageModal.style.display='none'
})

largeImage.addEventListener('click',(e)=>{
      e.stopPropagation()
})

