

function menu(e) {
    e.stopPropagation();
    const menuItems = query('.menu-itens');
    menuItems.classList.add('show-menu');
}
function menuItem(e) {
    e.stopPropagation();
    const menuItems = query('.menu-itens');
    menuItems.classList.remove('show-menu');
}