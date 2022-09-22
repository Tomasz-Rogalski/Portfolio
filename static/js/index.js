// refresh page after back
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
  if (URL.indexOf('index') > -1 ) {
    window.location.href = URL    
  } else {
    setTimeout( function() { window.location = URL }, 1000);
    logoSpan.forEach((span, idx)=>{
      span.style.opacity = 1;
    })
    intro.style.top = '0vh';    
  }
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


// intro
let intro = document.querySelector('.intro');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=>{
setTimeout(()=>{
  logoSpan.forEach((span, idx)=>{
    setTimeout(()=>{
      span.classList.add('active');
    }, (idx+1) *400)
  });
  setTimeout(()=>{
    logoSpan.forEach((span, idx)=>{
      setTimeout(()=>{
        span.classList.remove('active');
        span.classList.add('fade');
      }, (idx+1) *100)
    })
  },1500);
  setTimeout(()=>{
    intro.style.top = '-100vh';
    document.body.style.overflow = 'visible';      
  },2000); 
})
})


