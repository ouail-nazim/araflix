const show=element=>{
    element.style.opacity=1;
    element.previousSibling.previousElementSibling.style.opacity=0.2;
}
const hide=element=>{
    element.style.opacity=0;
    element.previousSibling.previousElementSibling.style.opacity=1;
}
