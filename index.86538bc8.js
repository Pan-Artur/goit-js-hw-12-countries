const t=t=>fetch(`https://restcountries.com/v3.1/name/${t}`),n=document.querySelector("#search-country"),e=document.querySelector(".countries-list"),a=document.querySelector(".country-info"),l=t=>{e.innerHTML=t.map(t=>{t.name}).join(""),a.innerHTML=""},c=t=>{let{name:n,capital:l,population:c,language:u,flags:s}=t;a.innerHTML=`
    <h2 class="country-title">${n}</h2>
    <div class="country-couple>
        <ul class="country-list">
            <p class="country-capital">Capital: ${l}</p>
            <p class="country-population">Population: ${c}</p>
            <p class="country-languages>Languages:</p>
            <ul class="languages-list">
                ${u}
            </ul>
        </ul>
        <img src="${s}" alt="Flag of ${n}" class="country-flag"/>
    </div>
    `,e.innerHTML=""};n.addEventListener("input",debounce(n=>{t(n.target.value.trim()).then(t=>{1===t.length?c(t[0]):l(t)})},500)),t(n);
//# sourceMappingURL=index.86538bc8.js.map
