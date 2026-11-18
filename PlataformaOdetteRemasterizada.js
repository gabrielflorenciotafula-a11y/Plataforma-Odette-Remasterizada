const TP = document.querySelector("#TP")
const CadNomePPORPa = document.querySelector("#CadNomePPOR")
const CadSalaPPORPa = document.querySelector("#CadSalaPPOR")

CadNomePPORPa.innerText = localStorage.CadNomePPOR
CadSalaPPORPa.innerText = localStorage.CadSalaPPOR

window.onload = function() {
    if (localStorage.CadNomePPOR == undefined) {
        window.location.href = "http://127.0.0.1:5500/PlataformaOdetteRemasterizadaCad.html?"
    }
}



TP.addEventListener("click", () => {
    window.location.href = "http://127.0.0.1:5500/PlataformaOdetteRemasterizada.html"
})