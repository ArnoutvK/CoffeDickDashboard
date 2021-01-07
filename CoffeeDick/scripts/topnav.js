function expand() {
    var x = document.getElementsByClassName("balloontxt");
    if (x.style.display === "none") {
        x.style.display = "inline-block";
    } else if (x.style.display === "inline-block") {
        x.style.display = "none";
    } else {
        x.style.display = "none";
    }
}