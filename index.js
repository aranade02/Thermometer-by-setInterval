
const tempLoad=() =>
{
    let temp = document.getElementById('empty');
    temp.innerHTML = '&#xf2cb';
    temp.style.color = " rgb(217, 252, 62)";

    setTimeout(()=>{
        temp.innerHTML = '&#xf2ca';
        temp.style.color = " rgb(255, 196, 0) ";
    },1000);

    setTimeout(()=>{
        temp.innerHTML = '&#xf2c9';
        temp.style.color = " rgb(255, 153, 0) ";

    },2000);

    setTimeout(()=>{
        temp.innerHTML = '&#xf2c8';
        temp.style.color = "rgb(254, 104, 3)  ";
    },3000);

    setTimeout(()=>{
        temp.innerHTML = '&#xf2c7';
        temp.style.color = " rgb(241, 41, 10)";
    },4000);

}

tempLoad();

setInterval(tempLoad,5000);