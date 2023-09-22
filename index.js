function start_login(){
    let anm_start=document.querySelector(`.nav`);
    let cross=document.querySelector(`.lines`)
    anm_start.style.display='flex';
    cross.style.display='none';
    anm_start.style.backdropFilter= "blur(5px)";
}
function end_login(){
    let anm_start=document.querySelector(`.nav`);
    let lines=document.querySelector(`.lines`)
    anm_start.style.display='none';
    let screenWidth = window.innerWidth;
    if (screenWidth < 700) {
        lines.style.display='block';
    }else{
        lines.style.display='none';
    }
    anm_start.style.backdropFilter= "none";
}
if (screenWidth>700) {
    lines.style.display='none';
}