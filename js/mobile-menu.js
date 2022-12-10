(() => {
  const refs = {
    openMobilelBtn: document.querySelector('[data-mobile-open]'),
    closeMobileBtn: document.querySelector('[data-mobile-close]'),
    menu: document.querySelector('[data-mobile]'),
    body: document.querySelector('body'),
    mobileList: document.querySelector('.menuList')
  };
  

  refs.openMobileBtn.addEventListener('click', toggleMobile);
  refs.closeMobileBtn.addEventListener('click', toggleMobile);
  refs.closeMobileBtn.addEventListener('click', removeMenu);

  function toggleMobile() {
    // document.body.classList.toggle('mobile-open');
    refs.mobile.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
    
  }

  function removeMenu() {
    refs.mobile.classList.add('is-hidden');
    refs.body.classList.remove('no-scroll');
    
  }
})();