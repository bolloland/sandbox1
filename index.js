let one = () => {
    document.getElementsByTagName("main")[0].children[0].children[0].children[0].innerText = "Adios!"
    document.getElementsByTagName("main")[0].children[1].children[0].children[0].innerText = "Hello!"
    document.getElementsByTagName("main")[0].children[2].children[0].children[0].innerText = "Hello!"; 
}

let two = () => {
    document.getElementsByTagName("main")[0].children[0].children[0].children[0].innerText = "Hello!"
    document.getElementsByTagName("main")[0].children[1].children[0].children[0].innerText = "Adios!"; 
    document.getElementsByTagName("main")[0].children[2].children[0].children[0].innerText = "Hello!"
}

let three = () => {
    document.getElementsByTagName("main")[0].children[0].children[0].children[0].innerText = "Hello!"
    document.getElementsByTagName("main")[0].children[1].children[0].children[0].innerText = "Hello!"
    document.getElementsByTagName("main")[0].children[2].children[0].children[0].innerText = "Adios!"; 
}



const rotation = () => {
    for (i = 0; i < 100; i++) {
        setTimeout(one(), 1); 
        setTimeout(two(), 1);
        setTimeout(three(), 1);
    }
}

rotation()