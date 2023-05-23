const container = document.querySelector("#tienda");
const menu = document.querySelector(".menu");
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");

function toggleMenu(){
    menu.classList.toggle("menu_opened");
}

openMenu.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenu);


const menuLinks = document.querySelectorAll(" .menu a[href^='#']");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute("id");
        const menuLink = document.querySelector(` .menu a[href^="#${id}"]`);

        if (entry.isIntersecting){
            menuLink.classList.add("selected");
        } else {
            menuLink.classList.remove("selected")
        }
    })
})

menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", function() {
        menu.classList.remove("menu_opened")
    })

    
})




fetch("../tienda.json")
.then((response)=> response.json())
.then((producto)=> {
    producto.forEach((producto)=>{
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
        <img src=${producto.image} alt="" class="product-image">
            <div class="detail-box">
                <h2 class="card-title">${producto.title}</h2>
                <h2 class="size">${producto.size}</h2>
                <span class="price">${producto.price}</span>
                <a href="https://api.whatsapp.com/send?l=es&phone=+5492615898719&text=¡Hola%20Cinthia!%20Quisiera%20encargarte%20un%20amigurumi" target="blank"><i class='bx bxl-whatsapp add-cart'></i></a>
        `;

        container.appendChild(card);
    })
})


