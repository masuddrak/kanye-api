const loadData=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>displayUser(data))
}

const displayUser=users=>{
    const container=document.getElementById('container');
    users.forEach(user => {
        console.log(user)
        const div=document.createElement('div');
        div.classList.add('card')
        div.innerHTML=`
        <h2>Country:${user.name.common}</h2>
        <p>Capital:${user.capital}</p>
        `
        container.appendChild(div);
    });
}