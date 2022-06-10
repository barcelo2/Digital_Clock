
const sec_hand=document.querySelector('.sec_hand')
const min_hand=document.querySelector('.min_hand')
const hour_hand= document.querySelector('.hour_hand')


setInterval(()=>{
    const now= new Date()
    const seconds=now.getSeconds()
    const secondsDegrees=(seconds/60)*360
    sec_hand.style.transform=`rotate(${secondsDegrees}deg)`
    const minutes= now.getMinutes()
    const minDegrees=(minutes/60)*360
    min_hand.style.transform=`rotate(${minDegrees}deg)`
   const hours=now.getHours()
   const hDegrees=(hours/12)*360
    hour_hand.style.transform=`rotate(${hDegrees}deg)`
})


setInterval(()=>{
let time= document.querySelector('#time')
let now= new Date()
let hours=now.getHours()
let minutes=now.getMinutes()
let seconds=now.getSeconds()
let day_night= 'PM'


if(hours >= 12){
    day_night='PM'
    hours=hours-12
}

if(hours<10){
    hours="0"+ hours
}
if(minutes<10){
    hours="0"+ minutes
}
if(seconds<10){
    hours="0"+ seconds
}

time.textContent= hours + ":" + minutes + ":"+ seconds + "" + day_night
})

