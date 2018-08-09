var count = 0;
var installPromptEvent;
var btnInstall = document.querySelector('#install');
var easter_egg = new Konami(function () {
    window.location.href = "https://stackoverflow.com/admin.php";
});
document.body.addEventListener('click', function () {
    count++;
    if (count > 6) {
        count = 0;
        document.querySelector('.tooltip').classList.toggle('show');
        setTimeout(function () {
            document.querySelector('.tooltip').classList.toggle('show');
        }, 2000);
    }
});
window.addEventListener('beforeinstallprompt', function (event) {
    event.preventDefault();
    installPromptEvent = event;
    btnInstall.removeAttribute('disabled');
});
btnInstall.addEventListener('click', function() {
    btnInstall.setAttribute('disabled', '');
    installPromptEvent.prompt();
    installPromptEvent.userChoice.then((choice) => {
      if (choice.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      installPromptEvent = null;
    });
  });