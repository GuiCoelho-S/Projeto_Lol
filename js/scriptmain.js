//Descrição dos personagens na página principal
function info1(elemento){
    elemento.innerHTML = "<p>Jogada no top, lutadora e spliter</p>";
}
function info2(elemento){
    elemento.innerHTML = "<p>Jungler, ótimo assassino</p>";
}

function info3(elemento){
    elemento.innerHTML = "<p>Mid, alto dano em área</p>";
}

function info4(elemento){
    elemento.innerHTML = "<p>Hyper Carry, grande mobilidade e dano</p>";
}

function info5(elemento){
    elemento.innerHTML = "<p>Sup/Mid dano explosivo</p>";
}
// Movimento da página quando usar o select

function moverPagina(){
    document.getElementById("seletor");

    if (seletor.value ==1){
        document.getElementById("controle_de_wave").scrollIntoView({
            behavior: "smooth",
        });
    }
    if (seletor.value ==2){
        document.getElementById("rotacao").scrollIntoView({
            behavior: "smooth",
        });
    }
    if (seletor.value ==3){
        document.getElementById("comp").scrollIntoView({
            behavior: "smooth",
        });
    }
    
    return seletor.selectedIndex = 0;
}

