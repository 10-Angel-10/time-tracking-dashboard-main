
let workText2 = document.getElementById("workText2");
let workText3 = document.getElementById("workText3");
let playText2 = document.getElementById("playText2");
let playText3 = document.getElementById("playText3");
let studyText2 = document.getElementById("studyText2");
let studyText3 = document.getElementById("studyText3");
let exerciseText2 = document.getElementById("exerciseText2");
let exerciseText3 = document.getElementById("exerciseText3");
let socialText2 = document.getElementById("socialText2");
let socialText3 = document.getElementById("socialText3");
let selfCareText2 = document.getElementById("selfCareText2");
let selfCareText3 = document.getElementById("selfCareText3");


let dailyBtn = document.getElementById("dailyBtn");
let weeklyBtn = document.getElementById("weeklyBtn");
let monthlyBtn = document.getElementById("monthlyBtn");


async function getdata() {
    const promise = await fetch ("../data.json");
    const data = await promise.json();
    time(data);
}
getdata();


function time(data) {
    
    dailyBtn.addEventListener('click', function() {
        
        dailyBtn.className = "btnText1 btnHover"
        weeklyBtn.className = "btn2 btnHover"
        monthlyBtn.className = "btn3 btnHover" 

        workText2.innerText = `${data[0].timeframes.daily.current}hrs`;
        workText3.innerText = `Yesterday - ${data[0].timeframes.daily.previous}hrs`;
        
        playText2.innerText = `${data[1].timeframes.daily.current}hrs`;
        playText3.innerText = `Yesterday - ${data[1].timeframes.daily.previous}hrs`;
        
        studyText2.innerText = `${data[2].timeframes.daily.current}hrs`;
        studyText3.innerText = `Yesterday - ${data[2].timeframes.daily.previous}hrs`;
        
        exerciseText2.innerText = `${data[3].timeframes.daily.current}hrs`;
        exerciseText3.innerText = `Yesterday - ${data[3].timeframes.daily.previous}hrs`;
        
        socialText2.innerText = `${data[4].timeframes.daily.current}hrs`;
        socialText3.innerText = `Yesterday - ${data[4].timeframes.daily.previous}hrs`;
        
        selfCareText2.innerText = `${data[5].timeframes.daily.current}hrs`;
        selfCareText3.innerText = `Yesterday - ${data[5].timeframes.daily.previous}hrs`;
    });
    
   
    weeklyBtn.addEventListener('click', function() {

        dailyBtn.className = "btn1 btnHover"
        weeklyBtn.className = "btnText2 btnHover"
        monthlyBtn.className = "btn3 btnHover"

        workText2.innerText = `${data[0].timeframes.weekly.current}hrs`;
        workText3.innerText = `Last Week - ${data[0].timeframes.weekly.previous}hrs`;
        
        playText2.innerText = `${data[1].timeframes.weekly.current}hrs`;
        playText3.innerText = `Last Week - ${data[1].timeframes.weekly.previous}hrs`;
        
        studyText2.innerText = `${data[2].timeframes.weekly.current}hrs`;
        studyText3.innerText = `Last Week - ${data[2].timeframes.weekly.previous}hrs`;
        
        exerciseText2.innerText = `${data[3].timeframes.weekly.current}hrs`;
        exerciseText3.innerText = `Last Week - ${data[3].timeframes.weekly.previous}hrs`;
        
        socialText2.innerText = `${data[4].timeframes.weekly.current}hrs`;
        socialText3.innerText = `Last Week - ${data[4].timeframes.weekly.previous}hrs`;
        
        selfCareText2.innerText = `${data[5].timeframes.weekly.current}hrs`;
        selfCareText3.innerText = `Last Week - ${data[5].timeframes.weekly.previous}hrs`;
    });
    
   
    monthlyBtn.addEventListener('click', function() {

        dailyBtn.className = "btn1 btnHover"
        weeklyBtn.className = "btn2 btnHover"
        monthlyBtn.className = "btnText3 btnHover"

        workText2.innerText = `${data[0].timeframes.monthly.current}hrs`;
        workText3.innerText = `Last Month - ${data[0].timeframes.monthly.previous}hrs`;
        
        playText2.innerText = `${data[1].timeframes.monthly.current}hrs`;
        playText3.innerText = `Last Month - ${data[1].timeframes.monthly.previous}hrs`;
        
        studyText2.innerText = `${data[2].timeframes.monthly.current}hrs`;
        studyText3.innerText = `Last Month - ${data[2].timeframes.monthly.previous}hrs`;
        
        exerciseText2.innerText = `${data[3].timeframes.monthly.current}hrs`;
        exerciseText3.innerText = `Last Month - ${data[3].timeframes.monthly.previous}hrs`;
        
        socialText2.innerText = `${data[4].timeframes.monthly.current}hrs`;
        socialText3.innerText = `Last Month - ${data[4].timeframes.monthly.previous}hrs`;
        
        selfCareText2.innerText = `${data[5].timeframes.monthly.current}hrs`;
        selfCareText3.innerText = `Last Month - ${data[5].timeframes.monthly.previous}hrs`;
    });
}