'use strict';

import ToggleModal from './module/ToggleModal.js';

let toggleMenu = new ToggleModal('.header__menu-btn', '.header__menu-btn-close', '.header__menu', );
let toggleModal = new ToggleModal('.main__info-btn', '.modal-callback__close-btn', '.modal-callback');

toggleMenu.init();
toggleModal.init();