search.addEventListener('click', function () {
    let theeth = document.getElementById('theethNumber').value;
    theeth = Number(theeth);

    switch (theeth) {
        case 42:
            alert(`O animal que corresponde a ${theeth} dentes é o cachorro`);
            break;
        case 30:
            alert(`O animal que corresponde a ${theeth} dentes é o gato`);
            break;
        case 3000:
            alert(`O animal que corresponde a ${theeth} dentes é o tubarão`);
            break;
        case 44:
            alert(`O animal que corresponde a ${theeth} dentes é o cavalo`);
            break;
    }
})