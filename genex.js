  const menuButton = document.getElementById('menu-button');
  const menuItems = document.getElementById('mobile-menu-items');
  
  menuButton.addEventListener('click', () => {
    if(menuItems.style.display === 'block'){
      menuItems.style.display = "none";
      menuButton.src = "images/responsive menu.png"
    } else {
      menuItems.style.display = 'block';
      menuButton.src = "images/close.png"
    }
  });
