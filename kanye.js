const loadQuotes=()=>{
    fetch('https://api.kanye.rest/')
    .then(res=>res.json())
    .then(data=>quotesDisplay(data))
}
const quotesDisplay=data=>{
    const quotes=document.getElementById('quotes');
    quotes.innerText=data.quote
}