function navigateToPage(url) {
    window.location.href = url;
}

document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggleBtn');
    const SideBar = document.getElementById('SideBar');
    const menubutton = document.getElementById('menubutton');
    const menubutton2 = document.getElementById('menubutton2');
    const menubutton3 = document.getElementById('menubutton3');
    const menubutton4 = document.getElementById('menubutton4');
    const menubutton5 = document.getElementById('menubutton5');

    console.log(toggleBtn, SideBar, MainContent);  
    toggleBtn.addEventListener('click', () => {
        if (SideBar.style.width === '0px' || SideBar.style.width === '') {
            SideBar.style.width = '20%';
            menubutton.style.display = 'inline-block'
            menubutton2.style.display = 'inline-block'
            menubutton3.style.display = 'inline-block'
            menubutton4.style.display = 'inline-block'
            menubutton5.style.display = 'inline-block'

        } else {
            SideBar.style.width = '0';
            menubutton.style.display = 'none'
            menubutton2.style.display = 'none'
            menubutton3.style.display = 'none'
            menubutton4.style.display = 'none'
            menubutton5.style.display = 'none'

        }
    });
});
