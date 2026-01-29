const mobile_btn=document.querySelector(".navbar__mobile-btn");
const mobile_menu=document.querySelector(".menu-mobile");
const btn_close=document.querySelector(".menu-mobile__close");

mobile_btn.addEventListener("click",()=>
{
    let show=document.querySelector(".menu-mobile--show");
    if(show)
    {
        mobile_menu.classList.remove("menu-mobile--show");
    }
    else{
         mobile_menu.classList.add("menu-mobile--show");
    }
});

window.addEventListener("resize",()=>
{
    let window_width=parseInt(document.body.clientWidth);

    if(window_width>1000)
        mobile_menu.classList.remove("menu-mobile--show");
});

btn_close.addEventListener("click",()=>{
     mobile_menu.classList.remove("menu-mobile--show");
});

//desplegar submenus
const menu_item=document.querySelectorAll(".menu-mobile__item");

menu_item.forEach(item=>
{
    item.addEventListener("click",(e)=>
    {
        const submenu=e.currentTarget.lastElementChild;
        if(submenu.tagName==="UL")
        {
            if(submenu.style.display==="block")
                submenu.style.display="none";
            else{
                submenu.style.display="block";
            }
        }
    });
});