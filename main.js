const showHiddenNav =(navId,iconId)=>{
    const nav = document.getElementById(navId),
          icon = document.getElementById(iconId);
    icon.addEventListener('click',()=>{
        if(window.getComputedStyle(nav).display =='none'){
            nav.style.display='block';
            icon.classList.add('ri-close-line');
            icon.classList.remove('ri-menu-line');
            document.getElementById('head').style.height='40vh'
        }else{
            nav.style.display='none';
            icon.classList.remove('ri-close-line');
            icon.classList.add('ri-menu-line');
            document.getElementById('head').style.height='10%'
        }
    })
}
showHiddenNav('nav','icon');