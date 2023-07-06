const tempEl=document.querySelector(".temp ")
const searchField=document.querySelector('.search-box')
const searchBtn=document.querySelector('#search-btn')
const tempDescription=document.querySelector('.temp-desc')
const tempElWrapper=document.querySelector(".temp ")

searchBtn.addEventListener("click", () =>{
    
    // const APIKey='c0ad5d003cf6a6da54642ba7e4ac64a9';
    const city=document.querySelector(".search-bar").value
    console.log(city)
    
    
    if(city===""){
        return
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=c0ad5d003cf6a6da54642ba7e4ac64a9`)
    .then(response => response.json())
    .then(json =>{
        if (json.cod==="404"){
        tempDescription.textContent="Invalid city";
        }
        tempEl.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;  
        tempDescription.innerHTML=`${json.weather[0].description}`  ;
        tempElWrapper.classList.add("active")
    })
})