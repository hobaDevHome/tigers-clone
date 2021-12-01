/*==================== night mode icon ====================*/
const nightIcon = document.querySelector('#night-icon');
nightIcon.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  if (document.body.classList.contains('dark-theme')) {
    nightIcon.src = './images/sun.png';
  } else {
    nightIcon.src = './images/moon.png';
  }
});

/*==================== menu icon ====================*/
document.querySelector('#menu-icon').addEventListener('click', () => {
  console.log('clicked');
  document.querySelector('.list-div').classList.toggle('showmenu');
});

document.querySelector('#menu-list').addEventListener('click', () => {
  document.querySelector('.list-div').classList.toggle('showmenu');
});

/*==================== search-btn ====================*/
document.querySelector('#search-btn-div').addEventListener('click', () => {
  document.querySelector('.search-input-div ').classList.toggle('search-show');
});

document.querySelector('#close').addEventListener('click', () => {
  document.querySelector('.search-input-div ').classList.toggle('search-show');
});

/*==================== play video ====================*/
document.querySelector('#play-vid').addEventListener('click', () => {
  document.querySelector('.youtube').classList.add('show-youtube');
});
document.querySelector('#bg').addEventListener('click', () => {
  document.querySelector('.youtube').classList.remove('show-youtube');
});

$('.contan').click(function () {
  $('iframe').attr('src', $('iframe').attr('src'));
});

/*==================== sticky-arrow ====================*/
document.querySelector('#sticky-arrow').addEventListener('click', () => {
  document.querySelector('.sticky-arrow').classList.toggle('arrow-donw');
  document.querySelector('.sticky-body').classList.toggle('body-donw');
});

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 800,
  reset: true,
});

sr.reveal(`.animat`, {
  interval: 200,
});

/*==================== SHOW SCROLL TOP ====================*/
function scrollTop() {
  const scrollTop = document.getElementById('search-bar');
  const menu1 = document.getElementById('menu1');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 80) {
    scrollTop.classList.add('move-searvh-bar');
    menu1.classList.add('move-menu');
    document
      .querySelector('.search-input-div ')
      .classList.remove('search-show');
  } else {
    scrollTop.classList.remove('move-searvh-bar');
    menu1.classList.remove('move-menu');
  }
}
window.addEventListener('scroll', scrollTop);
/*==================== products carousel ====================*/
// productScroll();

// function productScroll() {
//   let slider = document.getElementById("slider");
//   let next = document.getElementsByClassName("pro-next");
//   let prev = document.getElementsByClassName("pro-prev");
//   let slide = document.getElementById("slide");
//   let item = document.getElementById("slide");

//   for (let i = 0; i < next.length; i++) {
//     //refer elements by class name

//     let position = 0; //slider postion

//     prev[i].addEventListener("click", function() {
//       //click previos button
//       if (position > 0) {
//         //avoid slide left beyond the first item
//         position -= 1;
//         translateX(position); //translate items
//       }
//     });

//     next[i].addEventListener("click", function() {
//       if (position >= 0 && position < hiddenItems()) {
//         //avoid slide right beyond the last item
//         position += 1;
//         translateX(position); //translate items
//       }
//     });
//   }

//   function hiddenItems() {
//     //get hidden items
//     let items = getCount(item, false);
//     let visibleItems = slider.offsetWidth / 210;
//     return items - Math.ceil(visibleItems);
//   }
// }

// function translateX(position) {
//   //translate items
//   slide.style.left = position * -210 + "px";
// }

// function getCount(parent, getChildrensChildren) {
//   //count no of items
//   let relevantChildren = 0;
//   let children = parent.childNodes.length;
//   for (let i = 0; i < children; i++) {
//     if (parent.childNodes[i].nodeType != 3) {
//       if (getChildrensChildren)
//         relevantChildren += getCount(parent.childNodes[i], true);
//       relevantChildren++;
//     }
//   }
//   return relevantChildren;
// }

// ===========================================
