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
    
             } // } else{
            //     entry.target.classList.remove('show')
            // }
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














      //Projects
      const projects = [
        {
            image: "/images/web1.jpg",
            title: "Lumthai",
            description: "Minimal designed website for restaurant",
            url: "https://lumthai.netlify.app",
            type: "web"
        },
        {
            image: "/images/web2.jpg",
            title: "Thai love & Afterwork",
            description: "Minimal designed website for restaurant",
            url: "https://thailove-afterwork.netlify.app",
            type: "web"
        },
        {
            image: "/images/web2.jpg",
            title: "Saihtong",
            description: "Minimal designed website for restaurant",
            url: "https://saithongparathai.com",
            type: "web"
        },
        {
            image: "/images/Menu.jpg",
            title: "Menu Borchure",
            description: "Minimal designed website for restaurant",
            url: "https://lumthai.netlify.app",
            type: "menu"
        },
        {
            image: "/images/Menu1.jpg",
            title: "Menu Borchure",
            description: "",
            url: "https://lumthai.netlify.app",
            type: "menu"
        },
        {
            image: "/images/Menu2.jpg",
            title: "Menu Borchure",
            description: "Minimal designed website for restaurant",
            url: "https://lumthai.netlify.app",
            type: "menu"
        },
        {
            image: "/images/Logo1.png",
            title: "Lumthai",
            description: "Minimal designed website for restaurant",
            url: "https://lumthai.netlify.app",
            type: "logo"
        }
        ,
        {
            image: "/images/Logo2.jpg",
            title: "Lumthai",
            description: "Minimal designed website for restaurant",
            url: "https://lumthai.netlify.app",
            type: "logo"
        },
        {
            image: "/images/Logo3.png",
            title: "Lumthai",
            description: "Minimal designed website for restaurant",
            url: "https://lumthai.netlify.app",
            type: "logo"
        }
        ,
        
        {
            image: "/images/Logo5.png",
            title: "Lumthai",
            description: "Minimal designed website for restaurant",
            url: "https://lumthai.netlify.app",
            type: "logo"
        }
        ,
        {
            image: "/images/Logo6.jpg",
            title: "Lumthai",
            description: "Minimal designed website for restaurant",
            url: "https://lumthai.netlify.app",
            type: "logo"
        },
        {
            image: "/images/Logo7.jpg",
            title: "Lumthai",
            description: "Minimal designed website for restaurant",
            url: "https://lumthai.netlify.app",
            type: "logo"
        },
        {
            image: "/images/Logo8.png",
            title: "Lumthai",
            description: "Minimal designed website for restaurant",
            url: "https://lumthai.netlify.app",
            type: "logo"
        },
        {
            image: "/images/Marketing1.jpg",
            title: "Lumthai",
            description: "Minimal designed website for restaurant",
            url: "https://lumthai.netlify.app",
            type: "ads"
        },
        {
            image: "/images/Marketing2.png",
            title: "Lumthai",
            description: "Minimal designed website for restaurant",
            url: "https://lumthai.netlify.app",
            type: "ads"
        },
        {
            image: "/images/Marketing3.jpg",
            title: "Lumthai",
            description: "Minimal designed website for restaurant",
            url: "https://lumthai.netlify.app",
            type: "ads"
        },
        {
            image: "/images/Marketing4.jpg",
            // title: "Lumthai",
            description: "Minimal designed website for restaurant",
            url: "https://lumthai.netlify.app",
            type: "ads"
        },
        {
            image: "/images/Marketing5.jpg",
            // title: "Lumthai",
            description: "Minimal designed website for restaurant",
            url: "https://lumthai.netlify.app",
            type: "ads"
        }
        // Add more project data as needed
    ];

    // Function to generate HTML for project items
    function generateProjectItem(project) {
        return `
            <div class="item ${project.type}">
                <div class="work">
                    <img src="${project.image}" alt="">
                    <div class="layer">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <a target="_blank" href="${project.url}"><i class="fa-solid fa-up-right-from-square"></i></a>
                    </div>
                </div>
            </div>
        `;
    }

    // Populate project gallery with dynamically generated project items
    const projectGallery = document.getElementById('project-gallery');
    projects.forEach(project => {
        const projectHTML = generateProjectItem(project);
        projectGallery.innerHTML += projectHTML;
    });

















      
      