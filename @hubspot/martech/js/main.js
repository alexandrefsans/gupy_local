(function() {
  // Variables
  var langToggle = document.querySelector('.header__language-switcher');
  var navToggle = document.querySelector('#nav-toggle');
  var HIDE_FOCUS_STYLES_CLASS = 'disable-focus-styles';
  var SHOW_FOCUS_STYLES_CLASS = 'enable-focus-styles';
  var emailGlobalUnsub = document.querySelector('input[name="globalunsub"]');

  function domReady(callback) {
    if (['interactive', 'complete'].indexOf(document.readyState) >= 0) {
      callback();
    } else {
      document.addEventListener('DOMContentLoaded', callback);
    }
  }

  function toggleNav() {
    navToggle.classList.toggle('open');
  }

  function toggleLang() {
    langToggle.classList.toggle('open');

    if (navToggle.checked) {
      navToggle.checked = false;
    }
  }

  function showFocusOutline() {
    document.body.classList.add(SHOW_FOCUS_STYLES_CLASS);
    document.body.classList.remove(HIDE_FOCUS_STYLES_CLASS);
  }

  function hideFocusOutline() {
    document.body.classList.add(HIDE_FOCUS_STYLES_CLASS);
    document.body.classList.remove(SHOW_FOCUS_STYLES_CLASS);
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

  domReady(function() {
    if (!document.body) {
      return;
    } else {
      // Function dependent on navigation component
      if (navToggle) {
        // Toggles the mobile navigation
        navToggle.addEventListener('click', toggleNav);
      }
      // Function dependent on language switcher component
      if (langToggle) {
        // Toggles the mobile language switcher
        langToggle.addEventListener('click', toggleLang);
      }
      // Function dependent on email unsub input
      if (emailGlobalUnsub) {
        // Checks the unsubscribe from all input option
        emailGlobalUnsub.addEventListener('change', toggleDisabled);
      }

      // Show the focus outline when keyboard activity occurs
      document.body.addEventListener('keydown', showFocusOutline);

      // Hide the focus outline when mouse activity occurs
      document.body.addEventListener('mousemove', hideFocusOutline);
      document.body.addEventListener('mousedown', hideFocusOutline);
      document.body.addEventListener('mouseup', hideFocusOutline);
    }
  });
})();
