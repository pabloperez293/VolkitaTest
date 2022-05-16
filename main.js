// let count = setInterval(updated, 40);
// let up = 0 ;
// let width = 0;
// function updated () {
//     const count = document.getElementById("vista");
//     const hr = document.getElementById("hr");
//     ++up;
//     count.innerHTML = " Loading " + up + " %..";
//     hr.style.width = up + "%";
//     if (up = 100) {
//         clearInterval(count);
//         count.innerHTML = "done!";
//     }
// }



// punto 1 - seller_id es el objeto 
let seller_id = {
    item: 179571326,
    site_id : "MLA",    
}
for(let item in seller_id ) {
    console.log(item + " = " + seller_id[item]);

}

// punto 2 - Archivo Log

// Se genera un objeto 
const archivo ={
    id: "id",
    title: "titulo",
    category_id: "categoria",
    name: "nombre"
}

console.log([archivo]);

