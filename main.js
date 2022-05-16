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



// seller_id es el objeto
let seller_id = {
    item: 179571326,
    site_id : "MLA",    
}
for(let item in seller_id ) {
    console.log(item + " = " + seller_id[item]);

}