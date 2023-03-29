//El codigo va aqui->
let txtNombre= document.getElementById("Name");
let txtNumber= document.getElementById("Number");
let btnAgregar= document.getElementById("btnAgregar");
let btnClear= document.getElementById("btnClear");

let alertValidaciones= document.getElementById("alertValiddaciones");
let alertValidacionesTexto= document.getElementById("alertValidacionesTexto");
btnClear.addEventListener("click", function(event){
    event.preventDefault();
    txtNombre.value="";
    txtNumber.value="";
});

btnAgregar.addEventListener("click", function(event){
    event.preventDefault();
    alertValidacionesTexto.innerHTML="";
    alertValidaciones.style.display="none";
    let lista= "Los siguientes campos deben ser llenados correctamente:<ul>"
    if (txtNombre.value.length==0){
        txtNombre.style.border="solid thin red";
        lista +="<li>se debe escribir un nombre valido</li>";
        alertValidaciones.style.display="block";
    }else{
        txtNombre.style.border="";
    }

    if (txtNumber.value.length==0){
        txtNumber.style.border="solid thin red";
        lista += "<li>Se debe escribir una cantidad valida</li>";
        alertValidaciones.style.display="block";
    } else{
        txtNumber.style.border="";
    }
    lista +="</ul>"
    alertValidacionesTexto,insertAdjacentHTML("beforeend", lista)
});

txtNumber.addEventListener("", function(event){
    event.preventDefault();
    txtNumber.value=txtNumber.value.trim();
});

txtNombre.addEventListener("", function(event){
    event.preventDefault();
    txtNombre.value=txtNombre.value.trim();
})