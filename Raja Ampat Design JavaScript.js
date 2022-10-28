const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');
const parentContainer = document.querySelector('.read-more-container');
const showContainers = document.querySelectorAll(".show-replies");

menu.addEventListener('click',function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

parentContainer.addEventListener('click', event=>{

    const current = event.target;
    
    const isReadMoreBtn = current.className.includes('read-more-btn');
    
    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.read-more-text');

    currentText.classList.toggle('read-more-text--show');

    current.textContent = current.textContent.includes('Read More') ?
    "Read Less" : "Read More";
})

showContainers.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    let parentContainer = e.target.closest(".comment__container");
    let _id = parentContainer.id;
    if (_id) {
      let childrenContainer = parentContainer.querySelectorAll(
        `[dataset=${_id}]`
      );
      childrenContainer.forEach((child) => child.classList.toggle("opened"));
    }
  })
);