console.log('yo')

const galleryPhotos = document.querySelectorAll('.gallery-photo')

const imageModal=document.getElementById('imageModal')

const largeImage=document.getElementById('largeImage')
 
galleryPhotos.forEach(element => {
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
