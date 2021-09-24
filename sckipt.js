const userNameOne = prompt('userNameOne   Rock = 1 , Paper = 2 , Scissors = 3')
const userNameTwo = prompt('userNameTwo   Rock = 1 , Paper = 2 , Scissors = 3')
if (userNameOne == 1 || userNameOne == 2 || userNameOne == 3) {
    if(userNameTwo == 1 || userNameTwo == 2 || userNameTwo == 3){
        console.log("draw")

    }
    
}
if (userNameOne == 1) {
    if(userNameTwo == 2){
        console.log("userNameTwo win")
    }
 }
 if (userNameOne == 1){
     if(userNameTwo == 3){
         console.log("userNameOne win")
     }
 }
 if (userNameOne == 2){
     if(userNameTwo == 1){
         console.log("userNameOne win")
     }
 }
 if (userNameOne == 2){
     if(userNameTwo == 3){
         console.log("userNamneTwo win")
     }
 }
 if(userNameOne == 3){
     if(userNameTwo ==1){
         console.log("userNameTwo win")
     }
 }
if(userNameOne == 3){
    if(userNameTwo == 2){
        console.log("userNameOne win")
    }
}




