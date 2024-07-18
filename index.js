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
const currentDate = new Date();
console.log(currentDate);

const background_picture = document.getElementById("main_backgroundID");
background_picture.style.backgroundImage = "url('images/christmas_background.jpg')";
*/

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

var div = document.getElementById('git_container');
div.onmouseover = function() {
  const move2 = document.getElementById("move");
  move2.style.padding = "1.8%";
  document.getElementById("move").innerHTML = "view";
}


div.onmouseleave = function() {
  const move2 = document.getElementById("move");
  move2.style.padding = "0.5%";
  document.getElementById("move").innerHTML = "";
}

var divperma = document.getElementById('permafrost_container');
divperma.onmouseover = function() {
  const move2 = document.getElementById("move");
  move2.style.padding = "1.8%";
  document.getElementById("move").innerHTML = "view";
}


divperma.onmouseleave = function() {
  const move2 = document.getElementById("move");
  move2.style.padding = "0.5%";
  document.getElementById("move").innerHTML = "";
}


var divPUB = document.getElementById('BPUB_container');
divPUB.onmouseover = function() {
  const move2 = document.getElementById("move");
  move2.style.padding = "1.8%";
  document.getElementById("move").innerHTML = "view";
}


divPUB.onmouseleave = function() {
  const move2 = document.getElementById("move");
  move2.style.padding = "0.5%";
  document.getElementById("move").innerHTML = "";
}



var div2 = document.getElementById('view_scroll');
div2.onmouseover = function() {
  const move2 = document.getElementById("move");
  move2.style.padding = "1.8%";
  move2.style.color = "black";
  document.getElementById("move").innerHTML = "Lets go!";
}


div2.onmouseleave = function() {
  const move2 = document.getElementById("move");
  move2.style.padding = "0.5%";
  document.getElementById("move").innerHTML = "";
}





var div3 = document.getElementById('button_back');
div3.onmouseover = function() {
  const move2 = document.getElementById("move");
  move2.style.padding = "1.8%";
  move2.style.color = "black";
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
}


div4.onmouseleave = function() {
  const move2 = document.getElementById("move");
  move2.style.padding = "0.5%";
}






