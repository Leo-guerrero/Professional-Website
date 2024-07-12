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
var div = document.getElementById('github_text');
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



var div2 = document.getElementById('view_scroll');
div2.onmouseover = function() {
  const move2 = document.getElementById("move");
  move2.style.padding = "1.8%";
  move2.style.color = "white";
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






