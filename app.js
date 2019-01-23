window.addEventListener('load', function load(event) {

    var randomResult = document.getElementById('random-result')
  
    document.getElementById('random-button').onclick = function(event) {
      randomResult.textContent = Math.floor(Math.random() * 100)
    }
  
    document.getElementById('app-close').onclick = function(event) {
        const remote = require('electron').remote // chargement de l'api remote
        var window = remote.getCurrentWindow() // on récupère la fenetre courante
        window.close() // on ferme la fenetre
       }
  })