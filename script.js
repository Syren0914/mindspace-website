const scriptURL = 'https://script.google.com/macros/s/AKfycbz2cROkXrUl-SalvyCqLnk5805e8PFcpToMkinB4aEYKpB_yOynQ6sjbQ7EJSAsmVyEUA/exec'
    const form = document.forms['submit-to-google-sheet']
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
    })
    var sidemenu = document.getElementById("sidemenu");
    function openmenu(){
        sidemenu.style.right = "0" ;

    }
    function closemenu(){
        sidemenu.style.right = "-200px";
        
    }
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab")
    }


    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) =>{
            console.log(entry)
            if (entry.isIntersecting){
                entry.target.classList.add('show');
    
            } else{
                entry.target.classList.remove('show')
            }
        })
    })
    
    
    const hiddenElement = document.querySelectorAll('.hidden')
    hiddenElement.forEach((element)=>{
        observer.observe(element);
    });
    



    document.addEventListener('DOMContentLoaded', function () {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const items = document.querySelectorAll('.item');
      
        filterBtns.forEach(btn => {
          btn.addEventListener('click', function () {
            filterBtns.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
      
            const filterValue = this.getAttribute('data-filter');
      
            items.forEach(item => {
              item.style.display = 'none';
              if (item.classList.contains(filterValue) || filterValue === 'all') {
                item.style.display = 'block';
              }
            });
          });
        });
      });
      