const createPDFButton = document.querySelector('.create-pdf-btn')

function createPdf(){

    //instanciar o jsPDF
    let doc = new jsPDF()

    //texto
    doc.text(`Gerando pdf`, 10, 10)

    doc.save(`teste.pdf`)


}

createPDFButton.addEventListener('click', createPdf)