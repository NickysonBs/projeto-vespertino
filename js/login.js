function login(){
    const username = "nathalya";
    const password = "tiringa123";

    let usuario_informado = document.getElementById("username").value;

    let senha_informada = document.getElementById("password").value;

    if(usuario_informado == username 
         && senha_informada == password){

        let continuar_logado = document.getElementById("remember-me");

        if(continuar_logado){
            document.cookie = "logado=1";
        }
        
        window.location.href = "index.html";
    }   else {
            alert ("Login ou senha invalidos");
    }
}

function register(){
    let username = document.getElementById("username").value;

    let email  = document.getElementById("email").value;

    let password = document.getElementById("password").value;

    let repeat_password = document.getElementById("repeat-passwor").value;

    if(password != repeat_password){
        alert("Você deve digitar duas senhas iguais.");
    }
}
