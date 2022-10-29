function change(){

    let opc1 = document.getElementById('monedaOrigen').value;
    let opc2 = document.getElementById('monedaDestino').value;

    let origen = document.getElementById('monedaOrigen').options; 
    let destino = document.getElementById('monedaDestino').options;

    let lista = [
        {
            text: 'Moneda Destino',
            value: ''
        },
        {
            text: 'Peso Mexicano',
            value: 'mxn'
        },
        {
            text: 'Dólar americano',
            value: 'da'
        },
        {
            text: 'Dólar canadiense',
            value: 'dc'
        },
        {
            text: 'Euro',
            value: 'eur'
        },
    ]
    let listaSINMXN = [
        {
            text: 'Moneda Destino',
            value: ''
        },
        {
            text: 'Dólar americano',
            value: 'da'
        },
        {
            text: 'Dólar canadiense',
            value: 'dc'
        },
        {
            text: 'Euro',
            value: 'eur'
        },
    ]
    let listaSINDA = [
        {
            text: 'Moneda Destino',
            value: ''
        },
        {
            text: 'Peso Mexicano',
            value: 'mxn'
        },
        {
            text: 'Dólar canadiense',
            value: 'dc'
        },
        {
            text: 'Euro',
            value: 'eur'
        },
    ]
    let listaSINDC = [
        {
            text: 'Moneda Destino',
            value: ''
        },
        {
            text: 'Peso Mexicano',
            value: 'mxn'
        },
        {
            text: 'Dólar americano',
            value: 'da'
        },
        {
            text: 'Euro',
            value: 'eur'
        },
    ]
    let listaSINEURO = [
        {
            text: 'Moneda Destino',
            value: ''
        },
        {
            text: 'Peso Mexicano',
            value: 'mxn'
        },
        {
            text: 'Dólar americano',
            value: 'da'
        },
        {
            text: 'Dólar canadiense',
            value: 'dc'
        }
    ]
    if(opc1 == 'mxn'){       
        for (let i = 0; i <= 3; i++) {
             destino[i] = new Option(listaSINMXN[i].text, listaSINMXN[i].value);     
        }
        destino.remove(4)
        
    }else if(opc1 == 'da'){
        for (let i = 0; i < 4; i++) {
            destino[i] = new Option(listaSINDA[i].text, listaSINDA[i].value);           
        }
        destino.remove(4)
    }else if(opc1 == 'dc'){
        for (let i = 0; i < 4; i++) {
            destino[i] = new Option(listaSINDC[i].text, listaSINDC[i].value);         
        }
        destino.remove(4)
    }else if(opc1 == 'eur'){
        for (let i = 0; i < 4; i++) {
           destino[i] = new Option(listaSINEURO[i].text, listaSINEURO[i].value);     
        }
        destino.remove(4)
    }
    else if(opc1 == ''){
        for (let i = 0; i <= 4; i++) {
            destino[i] = new Option(lista[i].text, lista[i].value);   
        }
    }
}
function calcular(){

    let cantidad = document.getElementById('cantidad').value;


    let monedaOrigen = document.getElementById('monedaOrigen').value;

    let monedaDestino = document.getElementById('monedaDestino').value;

    var total = 0;

    if(monedaOrigen == 'da' && monedaDestino == 'mxn'){
        total = (cantidad * 19.85);
    }else if(monedaOrigen == 'da' && monedaDestino == 'dc'){
        total = cantidad * 1.35;
    }else if(monedaOrigen == 'da' && monedaDestino == 'eur'){
        total = cantidad * 0.99;
    }

    if(monedaOrigen == 'dc' && monedaDestino == 'mxn'){
        total = (cantidad / 1.35);
        total = (total*19.85);
    }else if(monedaOrigen == 'dc' && monedaDestino == 'da'){
        total = cantidad / 1.35;
    }else if(monedaOrigen == 'dc' && monedaDestino == 'eur'){
        total = cantidad /1.35;
        total = total * 0.99;
    }

    if(monedaOrigen == 'mxn' && monedaDestino == 'da'){
        total = (cantidad / 19.85);
    }else if(monedaOrigen == 'mxn' && monedaDestino == 'dc'){
        total = cantidad / 19.85;
        total = total * 1.35;
    }else if(monedaOrigen == 'mxn' && monedaDestino == 'eur'){
        total = (cantidad / 19.85);
        total = total * 0.99;
    }

    if(monedaOrigen == 'eur' && monedaDestino == 'mxn'){
        total = (cantidad * .99);
        total = (total*19.85);
    }else if(monedaOrigen == 'eur' && monedaDestino == 'da'){
        total = cantidad * 0.99;
    }else if(monedaOrigen == 'eur' && monedaDestino == 'dc'){
        total = cantidad * 0.99;
        total = total * 1.35;
    }

    let subtotal = total;


    let totalCom = subtotal * 0.03;

    let totalPagar = (subtotal + totalCom);

    console.log(subtotal);
    console.log(totalCom);
    console.log(totalPagar);

    let subTexto = document.getElementById('subtotal');
    
    let tComTexto = document.getElementById('totalComision'); 
    
    let tPagTexto = document.getElementById('totalPagar');
    
    subTexto.innerHtml =  subTexto.setAttribute("value", subtotal);
    
    tComTexto.innerHtml =  tComTexto.setAttribute("value", totalCom);
    
    tPagTexto.innerHtml =  tPagTexto.setAttribute("value", totalPagar);
}

var subtotalF = 0;
var totalComisionF = 0;
var totalPagarF = 0;

function registro(){

    let cantidad = document.getElementById('cantidad').value;

    let monedaOrigen = document.getElementById('monedaOrigen').value;

    let monedaDestino = document.getElementById('monedaDestino').value;

    var total = 0;

    if(monedaOrigen == 'da' && monedaDestino == 'mxn'){
        total = (cantidad * 19.85);
    }else if(monedaOrigen == 'da' && monedaDestino == 'dc'){
        total = cantidad * 1.35;
    }else if(monedaOrigen == 'da' && monedaDestino == 'eur'){
        total = cantidad * 0.99;
    }

    if(monedaOrigen == 'dc' && monedaDestino == 'mxn'){
        total = (cantidad * 19.85);
        total = (total*1.35);
    }else if(monedaOrigen == 'dc' && monedaDestino == 'da'){
        total = cantidad / 1.35;
    }else if(monedaOrigen == 'dc' && monedaDestino == 'eur'){
        total = cantidad * 0.99;
        total = total * 1.35;
    }

    if(monedaOrigen == 'mxn' && monedaDestino == 'da'){
        total = (cantidad / 19.85);
    }else if(monedaOrigen == 'mxn' && monedaDestino == 'dc'){
        total = cantidad / 19.85;
        total = total * 1.35;
    }else if(monedaOrigen == 'mxn' && monedaDestino == 'eur'){
        total = (cantidad * 19.85);
        total = total * 0.99;
    }

    if(monedaOrigen == 'eur' && monedaDestino == 'mxn'){
        total = (cantidad * .99);
        total = (total*19.85);
    }else if(monedaOrigen == 'eur' && monedaDestino == 'da'){
        total = cantidad / 0.99;
    }else if(monedaOrigen == 'eur' && monedaDestino == 'dc'){
        total = cantidad * 0.99;
        total = total * 1.35;
    }

    let lblCantidad = document.getElementById('lblCantidad');
    let lblMonedaOrigen = document.getElementById('lblMonedaOrigen');
    let lblMonedaDestino = document.getElementById('lblMonedaDestino');
    let lblSubtotal = document.getElementById('lblSubtotal');
    let lblTotalComision = document.getElementById('lblTotalComision');
    let lblTotalPagar = document.getElementById('lblTotalPagar');
    
    let subtotal = total;

    let totalCom = subtotal * 0.03;

    let totalPagar = (subtotal + totalCom);

    var monedaOrigenT;

    if (monedaOrigen == 'mxn') {
        monedaOrigenT = "Peso mexicano";
    }else if (monedaOrigen == 'da') {
        monedaOrigenT = "Dólar americano";
    }else if (monedaOrigen == 'dc') {
        monedaOrigenT = "Dólar canadiense";
    }else if (monedaOrigen == 'eur') {
        monedaOrigenT = "Euro";
    }

    var monedaDestinoT;

    if (monedaDestino == 'mxn') {
        monedaDestinoT = "Peso mexicano";
    }else if (monedaDestino == 'da') {
        monedaDestinoT = "Dólar americano";
    }else if (monedaDestino == 'dc') {
        monedaDestinoT = "Dólar canadiense";
    }else if (monedaDestino == 'eur') {
        monedaDestinoT = "Euro";
    }

    lblCantidad.innerHTML = lblCantidad.innerHTML + cantidad + "<br>";

    lblMonedaOrigen.innerHTML = lblMonedaOrigen.innerHTML + monedaOrigenT + "<br>";

    lblMonedaDestino.innerHTML = lblMonedaDestino.innerHTML + monedaDestinoT + "<br>";

    lblSubtotal.innerHTML = lblSubtotal.innerHTML + subtotal + "<br>";

    lblTotalComision.innerHTML = lblTotalComision.innerHTML + totalCom + "<br>";

    lblTotalPagar.innerHTML = lblTotalPagar.innerHTML + totalPagar + "<br>";

    let regSubtotal = document.getElementById('registroSubtotal');
    let regTotalComision = document.getElementById('registroTotalComision');
    let regTotalPagar = document.getElementById('registroTotalPagar');

    subtotalF = subtotalF + subtotal;

    regSubtotal.innerText = ""
    regSubtotal.innerText = regSubtotal.innerText + subtotalF;

    totalComisionF = totalComisionF + totalCom;

    regTotalComision.innerText = ""
    regTotalComision.innerText = regTotalComision.innerText + totalComisionF;

    totalPagarF = totalPagarF + totalPagar;

    regTotalPagar.innerText = ""
    regTotalPagar.innerText = regTotalPagar.innerText + subtotalF;
}
function borrarRegistros(){

    let lblCantidad = document.getElementById('lblCantidad');
    let lblMonedaOrigen = document.getElementById('lblMonedaOrigen');
    let lblMonedaDestino = document.getElementById('lblMonedaDestino');
    let lblSubtotal = document.getElementById('lblSubtotal');
    let lblTotalComision = document.getElementById('lblTotalComision');
    let lblTotalPagar = document.getElementById('lblTotalPagar');

    lblCantidad.innerHTML = ""
    lblMonedaOrigen.innerHTML = ""
    lblMonedaDestino.innerHTML = ""
    lblSubtotal.innerHTML = ""
    lblTotalComision.innerHTML = ""
    lblTotalPagar.innerHTML = ""

    let regSubtotal = document.getElementById('registroSubtotal');
    let regTotalComision = document.getElementById('registroTotalComision');
    let regTotalPagar = document.getElementById('registroTotalPagar');


    regSubtotal.innerText = "$"
    subtotalF = 0;

    regTotalComision.innerText = "$"
    totalComisionF = 0;

    regTotalPagar.innerText = "$"
    totalPagarF = 0;
}