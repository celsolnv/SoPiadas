document.querySelector("#sanduiche").addEventListener("click",function (event) {
    openSideMenu();
});
document.querySelector("#close-side-menu").addEventListener("click",function (event) {
    closeSideMenu();
});

function openSideMenu() {
    let menu = document.querySelector("#sideMenu");
    /*
    */
    menu.style.display = "block";
    setTimeout(() => {
        menu.style.width = "80%";
    }, 100);
    
    // setTimeout(() => {
    //     menu.style.display = "block";
    // }, 95);
    
}
function closeSideMenu() {
    let menu = document.querySelector("#sideMenu");
    /*
    menu.style.display = "none";
    */
    menu.style.width = "0%";
    setTimeout(() => {
        menu.style.display = "none";
    }, 250);
    
}