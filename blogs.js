function store(){
    let title=document.getElementById("h3");
    let text=document.getElementById("blogtxt");
    localStorage.setItem("title",title.value);
    localStorage.setItem("text",text.value);
    document.getElementById("sec1").children[0].classList.add("blogs");
    // document.getElementById("sec1").children[0].innerHTML.localStorage.getItem;
}