
var i=0;
var j=0;
var k=0;
const subhanallahCount = document.getElementById('subhanallah_count')
subhanallahCount.innerText = i;

const alhamdulillahCount = document.getElementById('alhamdulillah_count')
alhamdulillahCount.innerText = j;

const allahuakberCount = document.getElementById('allahuakber_count')
allahuakberCount.innerText = k;

//................For Increments.........

document.getElementById('sub-inc').addEventListener('click',function(){

    subhanallahCount.innerText = ++i;
})
document.getElementById('alh-inc').addEventListener('click',function(){

    alhamdulillahCount.innerText = ++j;
})
document.getElementById('alhakbr-inc').addEventListener('click',function(){

    allahuakberCount.innerText = ++k;
})

//................For Decrements.........

document.getElementById('sub-dec').addEventListener('click',function(){

    --i;
    if(i<0)
    {
        alert("Cannot have negetive value");
    }
    else{
        subhanallahCount.innerText = i;
    }
    
    
})
document.getElementById('alh-dec').addEventListener('click',function(){

    --j;
    if(j<0)
    {
        alert("Cannot have negetive value");
    }
    else{
        alhamdulillahCount.innerText = j;
    }
})
document.getElementById('alhakbr-dec').addEventListener('click',function(){

    --k
    if(k<0)
    {
        alert("Cannot have negetive value");
    }
    else{
        allahuakberCount.innerText = k;
    }
})

//Reset All
document.getElementById('resetAll').addEventListener('click',function(){
      
           i=0;
           j=0;
           k=0;
           subhanallahCount.innerText = i;
           alhamdulillahCount.innerText = j;
           allahuakberCount.innerText = k;

})