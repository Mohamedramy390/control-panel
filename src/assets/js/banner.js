(function(){
    let closebanners = document.querySelectorAll(".c-icon-cancel-circle ");
    closebanners.forEach(closebanner => {
        closebanner.addEventListener("click" , event => {
            const banner = event.target.parentNode;
            banner.classList.add('collapse')

            banner.addEventListener("transitionend", function(event){
                if(event.target === this){
                    this.remove();
                }
            })
        })  
    });  
})();