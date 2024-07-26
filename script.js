const galleryImages = document.querySelectorAll('.galleryImages');
const modal = document.getElementById('modal');
const modalImage = document.getElementById("modal-images")
const closebtm = document.querySelector('.clone')

galleryImages.forEach(Image =>{
    images.addenetlistener('click', () =>{
        modal.style.display = 'block'
        modalImage.src =images.src
        modalImage.style.width = '500px'
        modalImage.style.height = '500px'



    });

modal.addEventListener('click', (e) =>{
    if (e.target === modal){
        modal.style.display = 'none'
    }
})

close.btn.addEventListener('click'),()=>{
    modal.style.display = 'none'
}
})
