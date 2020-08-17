var count=0;
var count1=0;


function like(){
  let likecounter =  document.querySelector("#like");
  count++;
    document.querySelector("#like").innerHTML=count;
    
}

function dislike(){
    let dislikecounter = document.querySelector("#dislike");
    count1++;
    document.querySelector("#dislike").innerHTML=count1;
}

function comment(){
    let inpvalue = document.querySelector("#inp").value;
    let clonevalue = document.querySelector("#placeComment").cloneNode(true);
    clonevalue.innerHTML=inpvalue;
    let commentDiv =document.querySelector("#commentDiv");
    commentDiv.insertBefore(clonevalue,commentDiv.firstChild)


}