let user_cant=document.querySelector("#user_input");
let total_quantity=document.querySelector("#cantidadtotal");
let total_price=document.querySelector("#preciototal");
let color_requerido=document.querySelector("#color_selector");
let click=document.querySelector("button");
click.addEventListener("click", myFunction);

function myFunction(){
    quantity=user_cant.value;
    if (quantity <1){
        alert("Ingrese una cantidad mayor a 0");
    }

    else {
        
    total_price.innerHTML=400000*quantity;
    total_quantity.innerHTML=quantity;
    color_requerido=document.querySelector("#color_selector").value;
    colorMostrar=document.querySelector("#color_elegido");
    colorMostrar.style.backgroundColor=color_requerido;
    console.log(color_elegido);

    }
}



