// refresh page while back
window.addEventListener( "pageshow", function ( event ) {
  var historyTraversal = event.persisted || 
                         ( typeof window.performance != "undefined" && 
                              window.performance.navigation.type === 2 );
  if ( historyTraversal ) {
    window.location.reload();
  }
});

// link delay
function delay (URL) {
  setTimeout( function() { window.location = URL }, 1000);
  logoSpan.forEach((span, idx)=>{      
    span.classList.remove('fade');
    span.style.opacity = 1;
  })
  intro.style.top = '0vh';
}

// listener
document.addEventListener("DOMContentLoaded", function(event) {
  document.addEventListener("scroll", function(event) {
    const animatedDivs = document.getElementsByClassName("addAnimation");
    const windowOffsetTop = window.innerHeight + window.scrollY;
    const footer = document.getElementsByTagName("footer")[0];
    const footerOffsetTop = footer.offsetTop;

    Array.prototype.forEach.call(animatedDivs, (animatedDiv) => {
      const animatedDivOffsetTop = animatedDiv.offsetTop;
      const sliddenRight = animatedDiv.getElementsByClassName('sliddenRight')[0];
      const sliddenLeft = animatedDiv.getElementsByClassName('sliddenLeft')[0];
      const showingDiv = animatedDiv.getElementsByClassName('showMe')[0];

      if (windowOffsetTop >= animatedDivOffsetTop) {
        sliddenRight.classList.add("slideInRight");
        sliddenLeft.classList.add("slideInLeft");
        showingDiv.classList.add("showIn");
      };
      if (windowOffsetTop >= footerOffsetTop) {
        footer.classList.add("showIn");
      };         
    });    
  });
});

let intro = document.querySelector('.intro');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=>{ 
  logoSpan.forEach((span, idx)=>{    
      span.style.opacity = 1; 
    }) 
  setTimeout(()=>{
    intro.style.top = '-100vh'
    document.body.style.overflow = 'visible';      
  },500);
})




