
let likes=[]
function likePhoto(){
    const userName = prompt("Enter your name:");
    // if string is empty dont push anything
    if (userName) {
        likes.push(userName);
        const likeListElement = document.getElementById("likeList");
        if (likes.length === 0) {
            likeListElement.textContent = "";
        }
        else if (likes.length === 1) {
            likeListElement.textContent = `${likes[0]} likes this photo.`;
        }
        else if (likes.length === 2) {
            likeListElement.textContent = `${likes[1]} and ${likes[0]} like this photo.`;
        } 
        else {
            const othersCount = likes.length - 1;
            likeListElement.textContent = `${likes[othersCount]}, and ${othersCount} others like this photo.`;
        }
    }
   else{
    console.error("please enter your name")
    alert("please enter your name")
   }

} 

