let navState = false;
let sideNavWidth = 0;

function openNav() {
  const sideNav = document.getElementById('sidenav');
  sideNavWidth = sideNav.style.width = '250px';
  document.getElementById('main').style.marginLeft = '250px';
  document.getElementById('carouselSlider').style.marginLeft = '250px';
  sideNavWidth.length > 2 ? (navState = true) : null;

  switch (navState) {
    case true:
      document.getElementById('sidebarOverlay').classList.add('active');
      document.getElementById('mainHeader').classList.add('active');
      break;
    default:
      break;
  }
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById('sidenav').style.width = '0';
  document.getElementById('main').style.marginLeft = '0';
  document.getElementById('carouselSlider').style.marginLeft = '0';
  document.getElementById('sidebarOverlay').classList.remove('active');
  document.getElementById('mainHeader').classList.remove('active');
}
