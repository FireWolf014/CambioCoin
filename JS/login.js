function Enviar() {
    var nome = document.getElementById("loginid");
    var senha = document.getElementById("senhaid");

    if(nome.value == "admin" && senha.value == "admin")
    {
        //window.location.href = "saldoconta.html";
        alert("Login ou senha válidos");
        window.location.href = "saldoconta.html";
    }
    else
    {
        alert("Login ou senha inválidos");
        //window.location.href = "http://www.youtube.com";
    }

}