document.addEventListener("DOMContentLoaded", function () {
    const inputEmail = document.getElementById("email");
    const btnEnviar = document.getElementById("btn-enviar");

    btnEnviar.addEventListener("click", (e) => {
        e.preventDefault();

        const email = inputEmail.value.trim();

        if (!email) {
            alert("Por favor, preencha o campo de e-mail.");
            return;
        }

        const ciclo = JSON.parse(localStorage.getItem("ciclo"));
        if (!ciclo) {
            alert("Nenhum ciclo encontrado.");
            return;
        }

        const pessoa = ciclo.pessoasDoCiclo.find((p) => p.email === email);
        if (!pessoa) {
            alert("E-mail não encontrado no ciclo.");
            return;
        }

        alert(`Instruções para redefinir a senha foram enviadas para ${email}.`);
    });
});
