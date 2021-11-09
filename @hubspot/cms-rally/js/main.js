(function() {
  // Variables
  var nav = document.querySelector('.header__navigation');
  var navToggle = document.querySelector('.header__navigation--toggle');
  var closeToggle = document.querySelector('.header__close--toggle');
  var emailGlobalUnsub = document.querySelector('input[name="globalunsub"]');

  // Functions
  function domReady(callback) {
    if (['interactive', 'complete'].indexOf(document.readyState) >= 0) {
      callback();
    } else {
      document.addEventListener('DOMContentLoaded', callback);
    }
  }

  function toggleNav() {
    nav.classList.toggle('open');
    navToggle.classList.toggle('hide');
    closeToggle.classList.toggle('show');
  }

  function closeNav() {
    nav.classList.remove('open');
    navToggle.classList.remove('hide');
    closeToggle.classList.remove('show');
  }

  function toggleDisabled() {
    var emailSubItem = document.querySelectorAll('#email-prefs-form .item');

    emailSubItem.forEach(item => {
      var emailSubItemInput = item.querySelector('input');

      if (emailGlobalUnsub.checked) {
        item.classList.add('disabled');
        emailSubItemInput.setAttribute('disabled', 'disabled');
        emailSubItemInput.checked = false;
      } else {
        item.classList.remove('disabled');
        emailSubItemInput.removeAttribute('disabled');
      }
    });
  }

  // Event Listeners
  domReady(function() {
    if (!document.body || !navToggle) {
      return;
    } else {
      navToggle.addEventListener('click', toggleNav);
      closeToggle.addEventListener('click', closeNav);
    }
    // Function dependent on email unsub input
    if (emailGlobalUnsub) {
      // Checks the unsubscribe from all input option
      emailGlobalUnsub.addEventListener('change', toggleDisabled);
    }
  });
})();
