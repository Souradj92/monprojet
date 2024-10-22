document.getElementById("contactForm").addEventListener("submit", function(event){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    if (!name || !email) {
        alert("Tous les champs sont obligatoires !");
        event.preventDefault();
    }
});
