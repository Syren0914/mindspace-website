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


    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".circle");
    
    const colors = [
        "#00fff2",
        "#00f9ff", 
        "#00f2ff", "#00eaff", "#00e1ff", "#00d7ff", "#00cbff", "#00bfff", "#55b1ff", "#88a1ff", "#ad8fff", "#ca7cff"
        
    ];
    
    circles.forEach(function (circle, index) {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });
    
    window.addEventListener("mousemove", function(e){
      coords.x = e.clientX;
      coords.y = e.clientY;
      
    });
    
    function animateCircles() {
      
      let x = coords.x;
      let y = coords.y;
      
      circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";
        
        circle.style.scale = (circles.length - index) / circles.length;
        
        circle.x = x;
        circle.y = y;
    
        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });
     
      requestAnimationFrame(animateCircles);
    }
    
    animateCircles();
    