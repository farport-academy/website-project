import '../index.css'


window.closeDialog = (element) =>{
    element.parentNode.parentNode.parentNode.removeAttribute('open')
}

window.toggleAccordion = (element) => {
    // individuo il contenitore di tutti i miei elemeti accordion
    const container = element.parentNode.parentNode
    // individuo il contenitore del mio elemento
    const currentElement = element.parentNode
    // creo una copia dell'array dei figli del contenitore di tutti gli elementi accordion
    const childrenArray = [...container.children];
    // recupero l'index del mio elemento corrente all'interno dell'array di tutti i figli
    const elementIndex = childrenArray.indexOf(currentElement);
    // ciclo sull'array di tutti i figli
    document.querySelectorAll('.accordion').forEach((el, index)=>{
        //se l'index della corrente iterazione è diverso dall'index del mio elemento
       if(index !== elementIndex){
            //rimuovo classe opened
           el.classList.remove('opened')
       }
    })
    // faccio lo switch della classe opened nell'elemento corrente
    currentElement.classList.toggle('opened')
}