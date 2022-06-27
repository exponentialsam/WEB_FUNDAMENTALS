// console.log(hello);

function uploadPup(element){
    console.log("hello", element);
    element.innerText = "Uploaded! Thank you.";
}

function removeElement(element){
    console.log("trying to remove something...")
    element.remove()
}

function playVideo(element){
    console.log("Playing video...")
    element.play();
}

function pauseVideo(element){
    element.pause();
}

function changeImg(element){
    console.log("Hello", element);
    element.src = "./resources/anothaPuppy.jpeg"
}

function cookieMonster(){
    console.log("cookie monster!")
    var element = document.querySelector("#cookie-box");
    element.remove();
}