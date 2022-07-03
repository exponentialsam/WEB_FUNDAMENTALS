


var cardname =
document.querySelector("#main-card-body>h1");

function changename() {
    cardname.innerText = "John Smith";
}

var userline =
document.querySelector("#user-line1");
var connectionrequests =
document.querySelector("#connection-requests1")

function removerequest() {
    userline.remove("userline");
    let likeCount = Number(connectionrequests.innerText);
    console.log(likeCount);
    likeCount-=1;
    connectionrequests.innerText = likeCount;
}

var userline2 =
document.querySelector("#user-line2");

function removerequest2() {
    userline2.remove("userline2");
    let likeCount = Number(connectionrequests.innerText);
    console.log(likeCount);
    likeCount-=1;
    connectionrequests.innerText = likeCount;
}

var totalconnections =
document.querySelector(".connections");

function moreconnections(){
    let likeCount2 = Number(totalconnections.innerText);
    console.log(likeCount2);
    likeCount2+=1;
    totalconnections.innerText = likeCount2;
}