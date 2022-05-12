export default class ToggleMenu {
  constructor(openBtn, closeBtn, Content) {
    this.openBtn = document.querySelector(openBtn);
    this.closeBtn = document.querySelector(closeBtn);
    this.content = document.querySelector(Content);
  }

  init() {
    let body = document.querySelector('body');

    this.openBtn.addEventListener('click', () => {
      window.scrollTo(0, 0);
      body.style.overflow = 'hidden';
      this.content.classList.add('active');

      
    });

    this.closeBtn.addEventListener('click', () => {
      this.content.classList.remove('active');
      body.style.overflow = 'visible';
    });

    window.addEventListener('keyup', (event) => {
      if(event.keyCode == 27 && this.content.classList.contains('active')) {
        this.content.classList.remove('active');
        body.style.overflow = 'visible';
      }
    });
  }
}

