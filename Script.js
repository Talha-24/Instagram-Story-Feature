let arr=[{
    dp:'profile8.jpg',
    story: 'profile8.jpg',
},{
    dp:'profile9.jpg',
    story: 'profile9.jpg',
},{
    dp:'profile10.jpg',
    story: 'profile10.jpg',
},{
    dp:'profile12.jpg',
    story: 'profile12.jpg',
},{
    dp:'profile13.jpg',
    story: 'profile12.jpg',
}];
let clutter='';
arr.forEach(function(element,idx){
    clutter = clutter + `<div class="story">
    <img id="${idx}"  src=${element.dp} alt="">
    </div>`;
   
})
console.log(clutter);

let storycontainer=document.querySelector("#storiyan")
storycontainer.innerHTML=clutter;

storycontainer.addEventListener("click",function(e){
    let status=arr[e.target.id].story;
    let img=new Image();
    img.src=status;
   
        document.querySelector("#full-screen").style.display='block';
        document.querySelector("#full-screen").appendChild(img);
        
setTimeout(() => {
    document.querySelector("#full-screen").style.display='none';
    document.querySelector("#full-screen").removeChild(img);

}, 3000);

})
//Modification
/*There should be usernames at bottom of every status   */