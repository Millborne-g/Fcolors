let code = document.querySelectorAll('.code');

let color = document.querySelectorAll('.colors');

let copy = document.querySelectorAll('.copy');

let button = document.querySelector('button');

let click = document.querySelectorAll('.click');

let desktopsize = true;

button.addEventListener("click",colorGen);

const generate = document.querySelector('.generate');

colorGen();

//generates color
function colorGen() {

    var letters = '0123456789abcdef';

    var hastag = ['#','#','#','#','#','#'];

    for (let i=0;i<6;i++){

        hastag[i]+=letters[Math.floor(Math.random() *16)];

        hastag[i]+=letters[Math.floor(Math.random() *16)];

        hastag[i]+=letters[Math.floor(Math.random() *16)];

        hastag[i]+=letters[Math.floor(Math.random() *16)];

        hastag[i]+=letters[Math.floor(Math.random() *16)];

        hastag[i]+=letters[Math.floor(Math.random() *16)];

    }

    for (let i=0;i<code.length;i++){

        code[i].innerHTML = hastag[i];

        color[i].style.backgroundColor = hastag[i];

    }

}



//click color to copy
click_to_copy();



function click_to_copy(){
    if(screen.width <= 1000){
        desktopsize=false;
    }

    for (let i=0;i<code.length;i++){

        code[i].addEventListener("click", ()=>{
            console.log(code[i].textContent);
            
            var textArea = document.createElement("textarea");
            textArea.value = code[i].textContent;
            copy[i].innerHTML = "copied!";
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand("copy");
            textArea.remove();
            console.log(desktopsize);

            if(desktopsize == true){
                setTimeout(() => {copy[i].innerHTML = "click to copy";  }, 3000);
            }
            
            
        })
    
    }

    
}
