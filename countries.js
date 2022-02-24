const loadData=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>displayUser(data))
}

const displayUser=users=>{
    const container=document.getElementById('container');
    users.forEach(user => {
        // console.log(user)
        const div=document.createElement('div');
        div.classList.add('card')
        div.innerHTML=`
        <h2>Country:${user.name.common}</h2>
        <p>Capital:${user.capital}</p>
        <button onclick="dynamic('${user.name.common}')">Details</button>
        `
        container.appendChild(div);
    });
}
const dynamic=name=>{
    const url=`https://restcountries.com/v3.1/name/${name}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>countryDetails(data))
}
const countryDetails=detailsElement=>{
    const countryDetails=document.getElementById('countryDetails');
    countryDetails.innerText=''
    detailsElement.forEach(element => {
        console.log(element.population)
        const div=document.createElement('div');
        div.innerHTML=`
        <img src="${element.flags.png}" alt="">
        <h3>name:${element.name.common}</h3> 
        <h4>population:${element.population}</h4>
        `
        countryDetails.appendChild(div)
    });
}