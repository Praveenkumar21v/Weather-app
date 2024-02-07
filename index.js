let inputEle=document.getElementById('location-input');
let tempEle=document.getElementById('temp-value');
let locEle=document.getElementById('location');
let weatherdescEle=document.getElementById('weather-desc');
let btnEle=document.getElementById('btn');
let icon=document.getElementById('icon');
let humEle=document.getElementById('numb')
let windEle=document.getElementById('kmph');



const apiKey='076a928133692f1c9f1086fa9463d040'

btnEle.onclick=function(){
    if(inputEle.value==''){
        alert('please enter some location')
    }
    else{
        loc=inputEle.value
        url=`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`

        fetch(url).then(res=>res.json()).then(data=>{
            console.log(data);
            if(data.weather[0].main=='Clouds'){
                icon.src='clouds.png'
            }else if(data.weather[0].main='Clear'){
                icon.src='clear.png'
            }else if(data.weather[0].main='Rain'){
                icon.src='rain.png'
            }else if(data.weather[0].main='Drizzle'){
                icon.src='drizzle.png'
            }
            else if(data.weather[0].main='Mist'){
                icon.src='mist.png'
            }
            else if(data.weather[0].main='Snow'){
                icon.src='snow.png'
            }
            //Object deStructuring
            const{name}=data
            const{temp}=data.main
            const{description}=data.weather[0]
            const{humidity}=data.main
            const{speed}=data.wind
            windEle.innerText=speed
            humEle.innerText=humidity
            tempEle.innerText=Math.floor(temp-273)
            locEle.innerText=name
            weatherdescEle.innerText=description
        })

        .catch(()=>{
            alert('Enter Valid Location')
        })
        inputEle.value=''

        
    }
}