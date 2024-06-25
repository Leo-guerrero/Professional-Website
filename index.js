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