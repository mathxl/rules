function login() {
    var username = document.getElementById('usuario').value;
    var password = document.getElementById('pass').value;

    if (username === 'matheus' && password === 'matheus123') {
        
        
      window.location.href = 'two.html';
    }else if(username === 'art07' && password === 'art07'){
        window.location.href = 'one.html';

    } else {

        window.location.href = 'acessonegado.html';
    }
  }