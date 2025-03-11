function showhide() {
    let article = document.getElementById("text");
    
    if (article.style.display === "none") { 
        article.style.display = "block";
    } else {
        article.style.display = "none";
    }
}

document.getElementById("button").addEventListener("click", showhide);