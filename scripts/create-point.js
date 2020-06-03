


function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados") // busca os estados
    .then( res => res.json() ) // trnsformou em json
    .then( states => {
        for(const state of states) {
            ufSelect.innerHTML +=  `<option value="${state.id}">${state.nome}</option>`//* estrutura fixa*/
        }
        //ufSelect.innerHTML +=  `<option value="1">Valor</option>`/* estrutura fixa*/
       // $ interpolar*/
    })
}

populateUFs ()

function getCities(event){
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]")

    const ufValue =  event.target.value

    const indexofSelectedState = event.target.SelectedIndex
    stateInput.value = event.target.options[indexofSelectedState].text;

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`;

    fetch(url) // busca as cidades
    .then( res => res.json() ) // trnsformou em json
    .then( cities => {
        for(const city of cities) {
            citySelect.innerHTML +=  `<option value="${city.id}">${city.nome}</option>`// estrutura fixa*/
            
            citySelect.disabled = false
        }
    })

}


document.querySelector("[name=uf]")//*SELECIONAR O ELEMENTO SELECT COM NOME UF*/
.addEventListener("change", getCities)