function Limpar(){
    document.getElementById("produtoname1").value = "" 
    document.getElementById("produtoname2").value = ""
    document.getElementById("produtoname3").value = ""
    document.getElementById("produtopreco1").value = ""
    document.getElementById("produtopreco2").value = ""
    document.getElementById("produtopreco3").value = ""
} 

function Ordenar() {
    let nome1 = document.getElementById("produtoname1").value;
    let preco1 = Number(document.getElementById("produtopreco1").value);
    let nome2 = document.getElementById("produtoname2").value;
    let preco2 = Number(document.getElementById("produtopreco2").value);
    let nome3 = document.getElementById("produtoname3").value;
    let preco3 = Number(document.getElementById("produtopreco3").value);

    let p1, p2, p3;
    let n1, n2, n3; 

    if (preco1 <= preco2 && preco1 <= preco3) {
        n1 = nome1; p1 = preco1;
        if (preco2 <= preco3) {
            n2 = nome2; p2 = preco2;
            n3 = nome3; p3 = preco3;
        } else {
            n2 = nome3; p2 = preco3;
            n3 = nome2; p3 = preco2;
        }
    } else if (preco2 <= preco1 && preco2 <= preco3) {
        n1 = nome2; p1 = preco2;
        if (preco1 <= preco3) {
            n2 = nome1; p2 = preco1;
            n3 = nome3; p3 = preco3;
        } else {
            n2 = nome3; p2 = preco3;
            n3 = nome1; p3 = preco1;
        }
    } else {
        n1 = nome3; p1 = preco3;
        if (preco1 <= preco2) {
            n2 = nome1; p2 = preco1;
            n3 = nome2; p3 = preco2;
        } else {
            n2 = nome2; p2 = preco2;
            n3 = nome1; p3 = preco1;
        }
    }


    document.getElementById("resposta").innerHTML = 
        "1º: " + n3 + " (R$ " + p3 + ")<br>" +
        "2º: " + n2 + " (R$ " + p2 + ")<br>" +
        "3º: " + n1 + " (R$ " + p1 + ")";
}