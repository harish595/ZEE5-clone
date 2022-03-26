let zee=document.getElementsByClassName("r1")
zee.onclick=function(){
    let img1=document.createElement("img");
    img1.src="https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_FMjpg_UX1000_.jpg"
    img1.style.width="183px"
    img1.style.height="130px"
    zee.appendchild(img1)
    document.body.append(zee)
}