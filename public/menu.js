function show(e, element) {
    e.stopPropagation();
    const menuItems = query(element);
    if(menuItems.classList.contains('show')){
        menuItems.classList.remove('show');
    }else{
        menuItems.classList.add('show');
    }
}
function hide(e, element) {
    e.stopPropagation();
    const menuItems = query(element);
    menuItems.classList.remove('show');
}

