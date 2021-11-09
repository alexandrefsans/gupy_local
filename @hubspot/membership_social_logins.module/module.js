var appId;
var loginData = document.querySelectorAll('.hs-facebook-login');
if (loginData.length > 0) {
  appId = loginData[0].dataset.appid;
}

window.fbAsyncInit = function() {
  FB.init({
    appId: appId,
    autoLogAppEvents: true,
    xfbml: true,
    version: 'v7.0',
  });
  FB.Event.subscribe('xfbml.render', function() {
    var spinners = document.querySelectorAll('.hs-facebook-spinner');
    spinners.forEach(function(spinner) {
      spinner.classList.remove('hs-facebook-spinner');
      spinner.removeChild(spinner.childNodes[0]);
    });
  });
};
