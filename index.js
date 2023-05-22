const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


function generatePw() {
    let pw1 = document.getElementById("pw1")
    let pw2 = document.getElementById("pw2")

    let copiedEL1 = document.getElementById("copied-el-1")
    copiedEL1.textContent = ""
    let copiedEL2 = document.getElementById("copied-el-2")
    copiedEL2.textContent = ""

    if (pw1.textContent.length >= 15) {
        pw1.textContent = ""
        pw2.textContent = ""
    }

    for (i= 0 ; i < 15 ; i++) {
        let randomIndex1 = Math.floor(Math.random() * characters.length)
        console.log(`This is index ${randomIndex1}`)
        let randomIndex2 = Math.floor(Math.random() * characters.length)
        console.log(randomIndex2)
        pw1.textContent += characters[randomIndex1]
        pw2.textContent += characters[randomIndex2]
    }

}

function copyPw1() {
    let pw1Value = pw1.textContent
    navigator.clipboard.writeText(pw1Value)

    let copiedEL1 = document.getElementById("copied-el-1")
    copiedEL1.textContent = "copied!"
}

function copyPw2() {
    let pw2Value = pw2.textContent
    navigator.clipboard.writeText(pw2Value)

    let copiedEL2 = document.getElementById("copied-el-2")
    copiedEL2.textContent = "copied!"
}
