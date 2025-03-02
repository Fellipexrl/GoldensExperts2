// Alternar modo escuro
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
}

// Adiciona um evento ao botão de "Ler Mais"
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            alert("Você clicou em 'Ler Mais'!");
        });
    });
});
