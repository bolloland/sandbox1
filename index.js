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
    i = 0; 
    while (i < 100) {
        setTimeout(function() {one()}, 3000); 
        setTimeout(function() {two()}, 3000); 
        setTimeout(function() {three()}, 3000); 
        i++
    }
}


rotation()
