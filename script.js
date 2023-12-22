
let nav_icon = document.querySelector('.nav_icon');
let line = document.querySelector('.line');
let nav_menu = document.querySelector('.nav_menu');
let nav_links = document.querySelectorAll('.nav_list');
let nav_a_tags = document.querySelectorAll('.nav_link')
let nav_length = nav_links.length;
let isMobActive = false;

let isOpen = false;

if (window.matchMedia('screen and (max-width: 768px)').matches) {
  console.log('window size is 768');
  isMobActive = true;
}else {
  isMobActive = false;
}


window.addEventListener('resize', function(event) {
  if (window.matchMedia('screen and (max-width: 768px)').matches) {
    console.log('window size is 768');
    isMobActive = true;
  }
}, true);

window.onclick = e => {
  console.log(e.target);
 
  if (e.target != line && e.target != nav_icon && e.target != nav_menu && e.target.className != 'nav_link' && e.target.className != 'dropbtn' && e.target.className != 'langBtnText' && e.target.className != 'dropdown-content' && e.target.className != 'globe_svg' && e.target.className != 'marrow down' && e.target.className != 'dropdown' && e.target.className != 'dropbtn drop' && e.target.className != 'dropbtn drop active'){

    if(nav_menu.classList.contains("active")){
      navTogle();
    }
    
  } else {

  }
} 

nav_icon.addEventListener('click', () => {

  navTogle();

});

///////
const navlink_bottom = document.createElement("div");
navlink_bottom.className = "nav_link_bottom";
///


let header = document.querySelector('.header');
let hero = document.querySelector('.hero');
let header_height = header.getBoundingClientRect().height;

//header.classList.add('sticky');

let sticky = (entries) => {
  let [entry] = entries;
  if (!entry.isIntersecting) {
    header.classList.add('sticky');

  } else {

  }
  // else {
  //   header.classList.remove('sticky');
  // }
};

let hero_observer = new IntersectionObserver(sticky, {
  root: null,
  threshold: 0,
  rootMargin: `-${header_height}px`,
});


hero_observer.observe(hero);

// Active nav-start
const sectionAll = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;
  sectionAll.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 300;
    const sectionId = current.getAttribute('id');
  
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('li a[href*="' + sectionId + '"]')
        .classList.add('active');

        document.querySelector('li a[href*="' + sectionId + '"]').parentElement.children[1].classList.add('active');

    } else {
      document
        .querySelector('li a[href*="' + sectionId + '"]')
        .classList.remove('active');

       document.querySelector('li a[href*="' + sectionId + '"]').parentElement.children[1].classList.remove('active');
    }
  });
}); 
// Active nav-end

/////m add
 
  //   if(targetEl == flyoutEl) {
  //     // This is a click inside, does nothing, just return.
  //     document.getElementById("flyout-debug").textContent = "Clicked inside!";
  //     return;
  //   }
  //   // Go up the DOM
  //   targetEl = targetEl.parentNode;
  // } while (targetEl);
  // // This is a click outside.      
  // document.getElementById("flyout-debug").textContent = "Clicked outside!";



nav_links.forEach((link, index) => {

  link.addEventListener('click', () => {
    
    if(nav_menu.classList.contains("active")){
      navTogle();
    }
  })
  
});

function navTogle(){

  isOpen =!isOpen;

  line.classList.toggle('active');
  nav_menu.classList.toggle('active');
  nav_links.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
       //link.style.animation = `linkFadeIn 0.001s ease forwards ${index / nav_length - .05}s`;
    }
    
  });

}










function setLang(){
  //hy-AM
  //en-US
  //ru-RU
  let navLang = navigator.language;
  let navLang_two_latters = navLang.slice(0,2);

    if (localStorage.getItem("def-lang") === null) {

        if (navLang_two_latters == 'en'){
          changeLang('en');
        }
        else if (navLang_two_latters == 'hy'){
          changeLang('hy');
        } 
        else if (navLang_two_latters == 'ru'){
          changeLang('ru');
        }
        else {
          changeLang('en');
        }
      
    }
    else if (localStorage.getItem("def-lang") === 'en'){
       changeLang('en');
    }
    else if (localStorage.getItem("def-lang") === 'hy'){
      changeLang('hy');
    }
    else if (localStorage.getItem("def-lang") === 'ru'){
      changeLang('ru');
    }
    else {
    changeLang('en');
    }
    
}
setLang();

function changeLang(lang){
  
  let langNodes = document.querySelectorAll('[lang-key]');
  if (lang == 'en' || lang == null) {
      langNodes.forEach((el) => {
      el.innerText = enLangData[el.getAttribute('lang-key')];
      });
      document.getElementById('enBTN').classList.add('active');
      document.getElementById('hyBTN').classList.remove('active');
      document.getElementById('ruBTN').classList.remove('active');

      document.getElementById("mainLangBTNtext").innerText = 'ENG';
      localStorage.setItem("def-lang", "en");
  }
  else if (lang == 'hy'){
      langNodes.forEach((el) => {
      el.innerText = hyLangData[el.getAttribute('lang-key')];
      });
      document.getElementById('hyBTN').classList.add('active');
      document.getElementById('enBTN').classList.remove('active');
      document.getElementById('ruBTN').classList.remove('active');

      document.getElementById("mainLangBTNtext").innerText = 'ՀԱՅ';
      localStorage.setItem("def-lang", "hy");
  }
  else if (lang == 'ru'){
      langNodes.forEach((el) => {
      el.innerText = ruLangData[el.getAttribute('lang-key')];
      });
      document.getElementById('ruBTN').classList.add('active');
      document.getElementById('enBTN').classList.remove('active');
      document.getElementById('hyBTN').classList.remove('active');

      document.getElementById("mainLangBTNtext").innerText = 'РУС';
      localStorage.setItem("def-lang", "ru");
  }

}

////////Langguages
