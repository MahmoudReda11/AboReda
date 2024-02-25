fetch('js/projects.json')
.then(response => response.json())
       .then(data => displayProducts(data))
       .catch(error => console.error('حدث خطأ في استرجاع بيانات المنتجات:', error));

   function displayProducts(projects) {
       var projectsBoxs = document.getElementById('projects');

       projects.forEach(function (project) {
           projectsBoxs.innerHTML += ` 
           <div id="${project.id}" class="box js-tilt ${project.catgery} all" data-tilt data-tilt-glare data-tilt-max-glare="0.4">
                   <a href="${project.link}" target="_blank">
                       <img src="${project.img}" alt="">

                       <div class="content">
                           <h3>${project.name}</h3>
                           <i class="fa-solid fa-up-right-from-square"></i>
                       </div>
                   </a>
               </div>
       `;
       });
   }
  
  
  
  
  
  
  // menu projects
  let switcherLis = document.querySelectorAll('.menuprojects ul li');


  switcherLis.forEach((li) => {
    li.addEventListener("click",removeAcitvee)
    li.addEventListener("click",manageImgs)

  })
function removeAcitvee(){
    switcherLis.forEach((li) => {
        li.classList.remove("active")
        this.classList.add("active")
    })
   
}

// mange imgs

function manageImgs() {
    let imgProjectMenu = document.querySelectorAll('.projects .box');
    imgProjectMenu.forEach((img) => {
        img.classList.add("active")

        setTimeout(function() {
            img.style.display = 'none';
        }, 300);
      
    });
    document.querySelectorAll(this.dataset.cat).forEach((elmsimg) => {
      
        setTimeout(function() {
            elmsimg.classList.remove("active")
            elmsimg.style.display = 'block';
        }, 310);

    });
    
}

/* cursor */

const cursorOutline = document.querySelector("[data-cursor-outline]")


window.addEventListener("mousemove", function(e){
   const posX = e.clientX; 
   const posY = e.clientY; 


   cursorOutline.style.left = `${posX}px`;
   cursorOutline.style.top = `${posY}px`;

   cursorOutline.animate({
    left: `${posX}px`,
    top: `${posY}px`
   },{ duration:300, fill: "forwards"});
})




/* cursor */








var typedTextSpan = document.querySelector(".typed-text");


var textArray = ["Web Developer","Freelancer","Youtuber"]

var textArrayIndex = 0;

var charIndex = 0;

function typing() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent +=
            textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typing, 200);
    }
    else {
        setTimeout(erasing, 1000)
    }
}

function erasing() {
    if (charIndex > 0) {
        typedTextSpan.textContent = 
            textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erasing, 100);

    }
    else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) {
            textArrayIndex = 0;
        

        }
        setTimeout(typing, 700);
    }
}

window.onload = function () {
    setTimeout(typing, 1);
};

