const TP = document.querySelector("#TP")
const Cad = document.querySelector("#Cad")

Cad.addEventListener("submit", (e) => {
    const NomePPOR = Cad.inCadNomePPOR.value
    const SalaPPOR = Cad.inCadSalaPPOR.value

    save(NomePPOR, SalaPPOR)

    window.location.reload()
})

function save(NomePPOR, SalaPPOR) {
    if (window.localStorage) {
        localStorage.CadNomePPOR = NomePPOR
        localStorage.CadSalaPPOR = SalaPPOR
    }
}

window.onload = function() {
    if (localStorage.CadNomePPOR !== undefined) {
        window.location.href = "http://127.0.0.1:5500/PlataformaOdetteRemasterizada.html"
    }
}

TP.addEventListener("click", () => {
    window.location.href = "http://127.0.0.1:5500/PlataformaOdetteRemasterizada.html"
})