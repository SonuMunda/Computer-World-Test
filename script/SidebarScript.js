// SideBar

const openSidebar = () => {
    let bar = document.getElementById("sidebar");

    bar.style.left = "0";

    document.getElementById("s-overlay").style.display = "block";
}



const closeSidebar = () => {
    let bar = document.getElementById("sidebar");

    bar.style.left = "-320px";

    document.getElementById("s-overlay").style.display = "none";
}
// Components Menu

const toggleCompsMenu = () => {
    let subMenu = document.getElementById("sub-comp-menu");


    if (subMenu.style.maxHeight === "100rem") {
        subMenu.style.maxHeight = "0rem";
    }
    else {
        subMenu.style.maxHeight = "100rem";
    }
}

// Storage MEnu

const toggleStorageMenu = () => {
    let subMenu1 = document.getElementById("storage-menu");

    if (subMenu1.style.maxHeight === "100rem") {
        subMenu1.style.maxHeight = "0rem";
    }
    else {
        subMenu1.style.maxHeight = "100rem";
    }
}

// Computer Network Menu

const toggleCPMenu = () => {
    let subMenu1 = document.getElementById("cp-menu");

    if (subMenu1.style.maxHeight === "100rem") {
        subMenu1.style.maxHeight = "0rem";
    }
    else {
        subMenu1.style.maxHeight = "100rem";
    }
}

// Game Zone Menu

const toggleGZMenu = () => {
    let subMenu1 = document.getElementById("gz-menu");

    if (subMenu1.style.maxHeight === "100rem") {
        subMenu1.style.maxHeight = "0rem";
    }
    else {
        subMenu1.style.maxHeight = "100rem";
    }
}

