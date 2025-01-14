const e=e=>fetch(`https://restcountries.com/v3.1/name/${e}`),t=document.querySelector("#search-country");document.querySelector(".countries-list"),document.querySelector(".country-info"),t.addEventListener("input",t=>{e(t.target.value.trim()).then(e=>{1===e.length?console.log(1):e.length<=10?console.log(2):console.log("error")})}),e();
//# sourceMappingURL=index.1a0c58e3.js.map
