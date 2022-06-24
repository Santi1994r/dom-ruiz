let primerTitulo = ()=>{
    alert("Urbanos/ Ropa para Hombres")
}

let tituloPrinc = document.getElementById("tituloPrincipal");

/* tituloPrinc.onclick = primerTitulo; */
tituloPrinc.addEventListener("click", primerTitulo);
/*
El metodo mas recomendable es este addEventListener que como primer parametro va el evento que nosotros requerimos y como segundo parametro va una funcion o mejor echo seria que halla el nombre de la variable o constante que contiene una funcion.
*/