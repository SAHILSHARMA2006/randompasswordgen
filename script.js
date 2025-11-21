const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordArea1 = document.getElementById('area-1')
let passwordArea2 = document.getElementById('area-2')

function randomSelector(){
    const a = Math.floor(Math.random()*characters.length)
    return characters[a]
}

function passwordGenerator(){
    let password = ''
    for(let i = 0; i < 15; i++){
         password += randomSelector()
    }
    return password;
}

function run(){
    let a = passwordGenerator()
    let b = passwordGenerator()
    passwordArea1.textContent = a
    passwordArea2.textContent = b
}