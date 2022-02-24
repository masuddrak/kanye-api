const loadApi=()=>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res=>res.json())
    .then(data=>displayData(data))
}
const displayData=(data)=>{
    const arrayUser= data.results;
    const showElement=document.getElementById('show-element');
    showElement.innerText=''
    for (const user of arrayUser){
        // console.log(user.name.first)
        const div=document.createElement('div');
        div.innerHTML=`<h3> Email : ${user.email}, Name :${user.name.first} ${user.name.first} </h3>`;
        showElement.appendChild(div);
    }
    
}