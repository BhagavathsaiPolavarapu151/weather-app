// api key
// const apikey='4724f3d3edaf543f531250aacd7cb454'
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


// accessing the input values to display the data
let Input=document.getElementById('Location')
let BtnEle=document.getElementById('btn')
let Temp=document.getElementById('temp')
let DiscripEle=document.getElementById('discription')
let PlaceEle=document.getElementById('place')
let Imagename=document.getElementById('image')

// api key
const apikey='4724f3d3edaf543f531250aacd7cb454'

BtnEle.onclick=function(){
    if(Input.value ==''){
        alert('please enter the location😒😒')
    }else{
        loc=Input.value
        url=`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}`
        // fetching the api data
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        
        const{name}=data
        const{feels_like}=data.main
        const{description}=data.weather[0]

        PlaceEle.innerText=name
        Temp.innerText=Math.round(feels_like-276)
        DiscripEle.innerText=description
        Imagename.innerHTML=Imagename
    }).catch(()=>{
        alert('please enter a valid location')
    })
    }
    Input.value=''
}