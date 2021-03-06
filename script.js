function open_letter() {
    document.getElementsByClassName("open")[0].style.display = 'none'
    document.getElementsByClassName("close")[0].style.display = 'block'
}

function close_letter() {
    document.getElementsByClassName("open")[0].style.display = 'block'
    document.getElementsByClassName("close")[0].style.display = 'none'
}