var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("buttons_top").style.top = "0";
    document.getElementById("link_buttons").style.top = "0";
    
  } else {
    document.getElementById("buttons_top").style.top = "-180px";
    document.getElementById("link_buttons").style.top = "-180px";
  }

  if(window.scrollY <= 200){
    document.getElementById("bg").style.filter = 'blur(0px)';
   }
   else{
    document.getElementById("bg").style.filter = 'blur(1px)';
   }

  console.log(window.scrollY);
  prevScrollpos = currentScrollPos;
}




const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        entry.target.classList.add('show');
        entry.target.classList.add('animate-once');
      }
      else{
        entry.target.classList.remove('show');
      }
    });
  });
  
  const hiddenElements = document.querySelectorAll('.hidden:not(.animate-once)');
  hiddenElements.forEach((el) => observer.observe(el)); 


window.addEventListener('DOMContentLoaded', () => {
    const scrollingContent = document.querySelector('.scrolling-content');
    const images = Array.from(scrollingContent.children);
    
    images.forEach(image => {
        const clone = image.cloneNode(true);
        scrollingContent.appendChild(clone);
    });
});

const move = document.getElementById("move");

document.body.onpointermove = event => {
    const { clientX, clientY } = event;

    move.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    
    }, {duration: 1000, fill: "forwards"})

}

/*
const mediaQuery = window.matchMedia('(min-width: 768px)')
if (mediaQuery.matches) {
  document.addEventListener("mousemove", parallax);
  function parallax(e){
  this.querySelectorAll('.layer').forEach(layer => {
    const speed = layer.getAttribute('data-speed')

    const x = (window.innerWidth - e.pageX*speed)/50
    const y = (window.innerHeight - e.pageY*speed)/50

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`
  })
  }
  
}
*/




const slider = document.querySelector('.media-SROLLER');
let isActive = false;
let startX;
let scrollLeft;


slider.addEventListener('mousedown', (e) => {
  isActive = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  console.log(startX);
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isActive = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isActive = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if(!isActive) return;

  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});



//-----------------------------------------------------------------------
var divmypic = document.getElementById('myname');
divmypic.onmouseover = function() {
  const move2 = document.getElementById("move");
  move2.style.backgroundImage = "url('images/joe.PNG')";
  move2.style.padding = "8%";
}


divmypic.onmouseleave = function() {
  const move2 = document.getElementById("move");
  move2.style.padding = "0.5%";
  move2.style.backgroundImage = "url('')";
}



var divPUB = document.getElementById('Projects_NEW');
var learnMore = document.getElementById('learner');
divPUB.onmouseover = function() {
  const move2 = document.getElementById("move");
  move2.style.padding = "1.8%";
  document.getElementById("move").innerHTML = "Click & Drag";
  
  
}




divPUB.onmouseleave = function() {
  const move2 = document.getElementById("move");
  move2.style.padding = "0.5%";
  document.getElementById("move").innerHTML = "";
}



var div3 = document.getElementById('back_up');
div3.onmouseover = function() {
  const move2 = document.getElementById("move");
  move2.style.padding = "1.8%";
  
  document.getElementById("move").innerHTML = "Back to Top";
}


div3.onmouseleave = function() {
  const move2 = document.getElementById("move");
  move2.style.padding = "0.5%";
  document.getElementById("move").innerHTML = "";
}



var div4 = document.getElementById('link_buttons');
div4.onmouseover = function() {
  const move2 = document.getElementById("move");
  move2.style.padding = "0%";
  move2.style.borderWidth = "0px";
}


div4.onmouseleave = function() {
  const move2 = document.getElementById("move");
  move2.style.padding = "0.5%";
  move2.style.borderWidth = "1px";
}






