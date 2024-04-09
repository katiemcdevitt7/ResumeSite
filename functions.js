function navigateToPage(url) {
    window.location.href = url; // Replace 'another-page.html' with the URL of the desired file
}
const toggleBtn = document.getElementById('toggleBtn');
const sidebar = document.getElementById('SideBar');
const mainContent = document.getElementById('MainContent');

toggleBtn.addEventListener('click', () => {
    if (sidebar.style.width === '0px' || sidebar.style.width === '') {
        sidebar.style.width = '250px';
        mainContent.style.marginLeft = '250px';
    } else {
        sidebar.style.width = '0';
        mainContent.style.marginLeft = '0';
    }
});
