const switcher=document.querySelector(".switcher__btn");
const light=document.querySelector(".switcher__icon-light");
const dark=document.querySelector(".switcher__icon-dark");

switcher.addEventListener("click",()=>
{
    const head=document.head;

    const link=document.createElement("link");
    link.rel="stylesheet";
    link.href="./assets/css/dark.css";
    link.id="theme-dark";

    const theme_dark=document.querySelector("#theme-dark");
    if(theme_dark)
    {
        head.removeChild(theme_dark);
        dark.style.display="none";
        light.style.display="block";
    }
    else
    {
        head.appendChild(link);
        dark.style.display="block";
        light.style.display="none";
    }
});