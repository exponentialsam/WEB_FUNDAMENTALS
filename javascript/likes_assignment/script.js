




function incrementLike(id){
    console.log("Liking!", id);
    var element = document.querySelector(id);
    console.log("element looks like this", element.innerText);
    let likeCount = Number(element.innerText);
    console.log(likeCount);
    likeCount+=1;
    element.innerText = likeCount;
}