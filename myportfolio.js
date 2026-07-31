// Mobile Menu
const toggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');

toggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});

// Typing Effect
const text = ["Web Developer","IT Graduate","Front Developer"];
let i = 0, j = 0, current = "", isDeleting = false;
const typingEl = document.querySelector('.typing');

function type(){
  if(i < text.length){
    if(!isDeleting && j <= text[i].length){
      current = text[i].substring(0, j++);
    } else if(isDeleting && j >= 0){
      current = text[i].substring(0, j--);
    }

    typingEl.textContent = current;

    if(j === text[i].length) isDeleting = true;
    if(j === 0){ isDeleting = false; i++; }
    if(i === text.length) i = 0;
  }
  setTimeout(type, 100);
}
type();

// Scroll Animation
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 300;

    if(top > offset){
      sec.classList.add('show');
    }
  });
});

// Skill Animation
window.addEventListener('scroll', () => {
  document.querySelectorAll('.progress').forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if(rect.top < window.innerHeight){
      bar.style.width = bar.getAttribute('data-width');
    }
  });
});

// Contact Form
function sendMessage(e){
  e.preventDefault();
  alert('Message sent!');
}