const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


function generatePw() {
    let pw1 = document.getElementById("pw1")
    let pw2 = document.getElementById("pw2")

    // if (pw1.textContent.length >= 15) {
    //     pw1.textContent = ""
    //     pw2.textContent = ""
    // }

    for (i= 0 ; i < 15 ; i++) {
        let randomIndex1 = Math.floor(Math.random() * characters.length)
        let randomIndex2 = Math.floor(Math.random() * characters.length)
        pw1.value += characters[randomIndex1]
        pw2.textContent += characters[randomIndex2]
    }

}

function copyToClipboard() {
    let copyPw = document.getElementById("pw1");
    // copyPw.focus();
    copyPw.select();
    copyPw.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyPw.value)

    alert("copied");
}


// function copy() {
//     let copyText = document.querySelector("#input");
//     copyText.select();
//     document.execCommand("copy");
//   }
//   document.querySelector("#copy").addEventListener("click", copy);