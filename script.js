function confirmarEnvio() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const msg = document.getElementById("msg").value;

  const confirmar = confirm(
    "Nome: " + nome + "\n" +
    "Email: " + email + "\n" +
    "Mensagem: " + msg + "\n\n" +
    "Confirmar envio?"

  );
   if (confirmar){
        alert("Mensagem enviada com sucesso.")
        return true;
   }else{return false}
  
}


const titulos = document.querySelectorAll(".titulo");

titulos.forEach(a => {
  a.addEventListener("mouseover", () => {
    a.style.color = "#0dcaf0";
  });

  a.addEventListener("mouseout", () => {
    a.style.color = "white";
  });
});



