const sistemas = document.querySelectorAll(".system-icon");
const input = document.getElementById('busca-input')

input.addEventListener("input", (ev) => {
    const busca = ev.target.value.toLowerCase();

    sistemas.forEach(sistema => {
        const nome = sistema.querySelector("p").textContent.toLowerCase();

        if (nome.includes(busca)) {
            sistema.style.display = ''
        } else {
            sistema.style.display = 'none'
        }
    })
})