function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")
  
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() )
    .then( states => {
  
      for( const state of states ) {
        ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
  
      }
  
    })
  }
  
  populateUFs()
  
  function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")
    
    const ufValue = event.target.value
  
    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text
  
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
  
    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true

    fetch(url)
    .then( res => res.json() )
    .then( cities => {
      for( const city of cities ) {
        citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
      }
  
      citySelect.disabled = false
    })
  
  }
  
  document
      .querySelector("select[name=uf]")
      .addEventListener("change", getCities)


// ITENS DE COLETA

// PEGAR TODOS OS LIS
const itemsToCollect = document.querySelectorAll(".items-grid li")

for ( const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem) 
}

//ATUALIZAR O CAMPO ESCONDIDO COM OS ITEMS SELECIONADOS
const collectedItems = document.querySelector("input[name=items]")

// ARRAY DE ITEMS SELECIONADOS - LET É UMA VARIAVEL QUE PODE SER ATUALIZADA, COLOCAR NO LUGAR DE CONST
let selectedItems = [] 

function handleSelectedItem(event) {
    //ADICIONAR OU REMOVER UMA CLASSE
    const itemLi = event.target
    // TOGGLE ADICIONA OU REMOVE CONFORME SE EXISTE OU NAO - O ADD E O REMOVE PODEM SER COLOCADOS NO LUGAR DO TOGGLE
    itemLi.classList.toggle("selected") 

    // PEGA O ID DO ELEMENTOS DE LI PARA USO POSTERIOR
    const itemId = itemLi.dataset.id

    //VERIFICAR SE EXISTEM ITEMS SELECIONADOS, SE SIM, PEGAR OS ITEMS SELECIONADOS == é igual
    const alreadySelected = selectedItems.findIndex( item => {
        // PEGA O VALOR DO ID DO ITEM ATÉ QUE O VALOR DO ITEM SEJA IGUAL AO ITEMID, QUANDO ENCONTRA O ITEMFOUND RETORNA TRUE OU FALSE
        const itemFound = item == itemId
        return itemFound
    })

    // USAR CONSOLE LOG PARA VISUALIZAR NO NAVEGADOR OQ ESTA ACONTECENDO NO CODIGO
  //  console.log(alreadySelected >= 0)

    //SE JÁ ESTIVER SELECIONADO, RETIRAR DA SELEÇÃO
    if(alreadySelected >=0) {
        // TIRAR DA SELECAO SE O ITEM SELECIONADO FOR = AO ITEMID// filteredItem é um array
        const filteredItem = selectedItems.filter( item => {
            const itemIsDifferent = item != itemId
            return itemIsDifferent
        })

        selectedItems = filteredItem
    //SE NÃO ESTIVER SELECIONADO, ADICIONAR SELEÇÃO
    } else {
            selectedItems.push(itemId)
    }
    
    collectedItems.value = selectedItems

   // console.log(collectedItems)
    
}