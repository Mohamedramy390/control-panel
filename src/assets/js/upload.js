(function(){
    const uploaders = document.querySelectorAll('.js-upload')
    Array.from(uploaders, uploder => {
        const upload = uploder.querySelector('.js-upload__value'),
              placeholder = uploder.querySelector('.js-upload-placeholder'),
              remove = uploder.querySelector('.js-upload--remove');

        upload.addEventListener("change" ,function(event){
            const img = this.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(img);
            reader.onloadend =() =>{
                uploder.classList.add('has-image');
                placeholder.src = reader.result;
            }
        })   
        
        remove.addEventListener("click" , e => {
            upload.value = null;
            uploder.classList.remove("has-image");
            placeholder.src ="";
        })
    }) 
})();