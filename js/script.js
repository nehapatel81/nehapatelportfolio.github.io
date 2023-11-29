//Prevent right click
document.oncontextmenu = () => {
    alert("Don't try right click")
    return false
}

/* inspect element using ctrl + U  and F12 */

document.onkeydown = e => {
    //prevent F12 key
    if(e.key == "F12"){
        alert("Don't try to inspect element")
        return false
    }
    //prevent showing page source
    if(e.ctrlKey && e.key == "u") {
        alert("Don't try to view page sources")
        return false
    }
    // prevent copying anything from the page
    if(e.ctrlKey && e.key == "c"){
        alert("Don't try to copy page element")
        return false
    }
     // prevent paste anything from the page
     if(e.ctrlKey && e.key == "v"){
        alert("Don't try to paste page element")
        return false
    }
}