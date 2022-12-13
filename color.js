console.log("HEllo");
const colors = ['A','B','C','D','E','F',0,1,2,3,4,5,6,7,8,9];



const btn = document.querySelector(".btn1");
const color = document.querySelector(".color")

btn.addEventListener('click',function(){
    let hexColor = '#';

    for (let i=0; i<6; i++){
        hexColor += colors[getRandom()]
    }
    document.body.style.backgroundColor = hexColor;
    color.innerContent = hexColor;
    console.log(color.innerText = hexColor);
    console.log(color.innerContent = hexColor);
});

function getRandom(){
    return Math.floor(Math.random() * colors.length);
}