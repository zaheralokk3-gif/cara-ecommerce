
let toggle = document.querySelector("nav .toggle");
let links = document.querySelector("nav ul");
let closeBtn = document.querySelector("nav ul #close");

toggle.onclick = function () {
    links.classList.add("active");
}

closeBtn.onclick = function () {
    links.classList.remove("active");
}

// ----------------------------------------------- //

let arrayOfProducts = [
    {
        // img div
        ImgSrc: "img/products/f1.jpg",
        type: "f",
        // text div
        title: "Home / T-Shirt",
        dis: "Men's Fashion T-Shirt",
        price: "130"
    }, 
    {
        // img div
        ImgSrc: "img/products/f2.jpg",
        type: "f",
        // text div
        title: "Home / T-Shirt",
        dis: "Men's Fashion T-Shirt",
        price: "130"
    },
    {
        // img div
        ImgSrc: "img/products/f3.jpg",
        type: "f",
        // text div
        title: "Home / T-Shirt",
        dis: "Men's Fashion T-Shirt",
        price: "130"
    },
    {
        // img div
        ImgSrc: "img/products/f4.jpg",
        type: "f",
        // text div
        title: "Home / T-Shirt",
        dis: "Men's Fashion T-Shirt",
        price: "130"
    },
    {
        // img div
        ImgSrc: "img/products/f5.jpg",
        type: "f",
        // text div
        title: "Home / T-Shirt",
        dis: "Men's Fashion T-Shirt",
        price: "130"
    },
    {
        // img div
        ImgSrc: "img/products/f6.jpg",
        type: "f",
        // text div
        title: "Home / T-Shirt",
        dis: "Men's Fashion T-Shirt",
        price: "130"
    },
    {
        // img div
        ImgSrc: "img/products/f7.jpg",
        type: "f",
        // text div
        title: "Home / T-Shirt",
        dis: "Men's Fashion T-Shirt",
        price: "130"
    },
    {
        // img div
        ImgSrc: "img/products/f8.jpg",
        type: "f",
        // text div
        title: "Home / T-Shirt",
        dis: "Men's Fashion T-Shirt",
        price: "130"
    },
    {
        // img div
        ImgSrc: "img/products/n1.jpg",
        type: "n",
        // text div
        title: "Home / T-Shirt",
        dis: "Men's Fashion T-Shirt",
        price: "130"
    },
    {
        // img div
        ImgSrc: "img/products/n2.jpg",
        type: "n",
        // text div
        title: "Home / T-Shirt",
        dis: "Men's Fashion T-Shirt",
        price: "130"
    },
    {
        // img div
        ImgSrc: "img/products/n3.jpg",
        type: "n",
        // text div
        title: "Home / T-Shirt",
        dis: "Men's Fashion T-Shirt",
        price: "130"
    },
    {
        // img div
        ImgSrc: "img/products/n4.jpg",
        type: "n",
        // text div
        title: "Home / T-Shirt",
        dis: "Men's Fashion T-Shirt",
        price: "130"
    },
    {
        // img div
        ImgSrc: "img/products/n5.jpg",
        type: "n",
        // text div
        title: "Home / T-Shirt",
        dis: "Men's Fashion T-Shirt",
        price: "130$"
    },
    {
        // img div
        ImgSrc: "img/products/n6.jpg",
        type: "n",
        // text div
        title: "Home / T-Shirt",
        dis: "Men's Fashion T-Shirt",
        price: "130"
    },
    {
        // img div
        ImgSrc: "img/products/n7.jpg",
        type: "n",
        // text div
        title: "Home / T-Shirt",
        dis: "Men's Fashion T-Shirt",
        price: "130"
    },
    {
        // img div
        ImgSrc: "img/products/n8.jpg",
        type: "n",
        // text div
        title: "Home / T-Shirt",
        dis: "Men's Fashion T-Shirt",
        price: "130"
    }
];

let cards = Array.from(document.querySelectorAll(".products .pro"));

cards.forEach(card => {
    card.lastElementChild.addEventListener("click", () => {
        let currentImg = card.firstElementChild.getAttribute("src");
        for (let i = 0; i < arrayOfProducts.length; i++) {
            if (arrayOfProducts[i].ImgSrc === currentImg) {
                window.localStorage.setItem("proDetals", JSON.stringify(arrayOfProducts[i]));
            }
        }
    });
});

let currntPro = JSON.parse(window.localStorage.getItem("proDetals"));
let bigImg = document.querySelector("#detals .slider .current-img img");
let smallImgs = Array.from(document.querySelectorAll("#detals .slider .small-img"));
let titlePro = document.querySelector("#detals .text-con h6");
let disPro = document.querySelector("#detals .text-con h4");
let pricePro = document.querySelector("#detals .text-con h2");


smallImgs.forEach(smallImg => {
    smallImg.onclick = function () {

        smallImgs.forEach( img => img.classList.remove("active"));
        this.classList.add("active")
        bigImg.setAttribute("src", document.querySelector("#detals .slider .active img").getAttribute("src"));
    }
});
smallImgs[0]?.firstElementChild?.setAttribute("src", currntPro.ImgSrc);

bigImg?.setAttribute("src", document.querySelector("#detals .slider .active img").getAttribute("src"));

if (titlePro && disPro && pricePro) {
    titlePro.textContent = currntPro.title;
    disPro.textContent = currntPro.dis;
    pricePro.textContent = `${currntPro.price}$`;
}

// =============================================================
// =============================================================
//                               cart section
// =============================================================
// =============================================================

let arrayOfCart = JSON.parse(window.localStorage.getItem("arrayOfProducts")) || [];

let cartBtn = document.querySelector("#detals .order button");
const cartSpan = document.querySelector("header .cart span");

function addToCart() {
    let selectedSize = document.querySelector("#detals .order select").value;
    let numberOfBeasis = document.querySelector("#detals .order input[type='number']").value;
    let currentImage = document.querySelector("#detals .slider .active img").getAttribute("src");
    let priceOfOne = currntPro.price;

    const projectDetalis = {
        size: selectedSize,
        number: numberOfBeasis,
        img: currentImage,
        price: `${priceOfOne}`,
        totalPrice:` ${priceOfOne * numberOfBeasis}`,
        id: new Date(),
    };
    arrayOfCart.push(projectDetalis);
    addDetalsToLocalStorage();
    refreshCartIcon();
}

// add to local storage
function addDetalsToLocalStorage() {
    window.localStorage.setItem("arrayOfProducts", JSON.stringify(arrayOfCart));
}

function refreshCartIcon() {
    cartSpan.textContent = arrayOfCart.length;
    window.localStorage.setItem("cartSpan", JSON.stringify(arrayOfCart.length));
}

function editeSpan() {
    let newSpan = JSON.parse(window.localStorage.getItem("cartSpan"))
    cartSpan.textContent = newSpan;
}

cartBtn?.addEventListener("click", addToCart);
editeSpan()





// cart
let myTable = document.querySelector("#cart .cart-sec table");
let myTableBody = document.querySelector("#cart .cart-sec table tbody");
let tr;


if (arrayOfCart != [] && myTable ) {
    document.querySelector("tbody .non").remove()
    for (let j = 0; j < arrayOfCart.length; j++) {
        tr = document.createElement("tr");
        tr.dataset.id = arrayOfCart[j].id;
        let icon = document.createElement("i");
        icon.dataset.lucide = "trash-2"
        icon.className = "trash"

        let tdIcon =  document.createElement("td");
        tdIcon.appendChild(icon);

        let tdImg =  document.createElement("td");
        let tdImgSrc = document.createElement("img");
        tdImgSrc.src = arrayOfCart[j].img;
        tdImg.appendChild(tdImgSrc);

        let tdText =  document.createElement("td");
        let textOfTd = document.createTextNode("Cartoon Astronaut T-Shirts");
        tdText.appendChild(textOfTd);

        let tdSize = document.createElement("td");
        let sizeOfTd = document.createTextNode(arrayOfCart[j].size)
        tdSize.appendChild(sizeOfTd);

        let tdPrice = document.createElement("td");
        let priceOfTd = document.createTextNode("$" + arrayOfCart[j].price)
        tdPrice.appendChild(priceOfTd);

        let tdNum = document.createElement("td");
        let NumOfTd = document.createTextNode(arrayOfCart[j].number)
        tdNum.appendChild(NumOfTd);

        let tdTotal = document.createElement("td");
        let totalOfTd = document.createTextNode("$" + arrayOfCart[j].totalPrice)
        tdTotal.appendChild(totalOfTd);

        tr.appendChild(tdIcon);
        tr.appendChild(tdImg);
        tr.appendChild(tdText);
        tr.appendChild(tdSize);
        tr.appendChild(tdPrice);
        tr.appendChild(tdNum);
        tr.appendChild(tdTotal);
        myTableBody.appendChild(tr)
    };


    myTableBody.addEventListener("click", function(e) {
        const deleteBtn = e.target.closest(".trash"); // we will searsh to up if one of his parent have class trash if we find here we will save him in this variable
        if (deleteBtn) {  // if this variable is have true value
            const row = deleteBtn.closest("tr");

            if (row) {
                removeProFromArray(row.dataset.id)
                row.remove()
            }
        }
    })
}
function removeProFromArray(currentId) {
    for (let k = 0; k < arrayOfCart.length; k++) {
        if (arrayOfCart[k].id == currentId) {
            arrayOfCart.splice(k, 1);
            addDetalsToLocalStorage();
            refreshCartIcon();
            totalPrice();
            break;
        }
    }
}


let subTotal = document.querySelector(".cart-add .total strong");
let payBtn = document.querySelector(".cart-add .subtotal button");


function totalPrice () {
    const total = arrayOfCart.reduce((acc, current) => {
        return acc + +current.totalPrice;
    }, 0);
    if (myTable) {
        subTotal.textContent = `$${total}`;
    }
}
totalPrice();


function payOll () {
    if (arrayOfCart.length !== 0) {
    window.localStorage.removeItem("arrayOfProducts");
    arrayOfCart = [];
    const allTr = document.querySelectorAll("tbody tr");
    allTr.forEach(tr => tr.remove());
    refreshCartIcon();
        vewAlirt()
        
    } else {
        return;
    }
}
const overlay = document.querySelector("#cart .overlay");
function vewAlirt() {
    document.querySelector("#cart").style.overflow = "hidden";
    const alirt = document.querySelector("#cart .overlay .alirt");
    overlay.classList.add("on-top");
    alirt.classList.add("plus");
    const circl = document.querySelector("#cart .overlay .alirt .circl");
    const truth = document.querySelector("#cart .overlay .alirt .circl .truth");
    circl.style.animation = " rotate-y-h .8s cubic-bezier(0, 2.13, 1, 1) forwards"
    circl.addEventListener("animationend", function() {
        circl.style.animation = "rotate-y-f .8s cubic-bezier(0, 2.13, 1, 1) forwards"
        truth.style.animation = " club .8s cubic-bezier(0, 2.13, 1, 1) forwards"
    });
};

payBtn?.addEventListener("click", payOll);



overlay?.addEventListener("click", function() {
    overlay.classList.remove("on-top");
    alirt.classList.remove("plus");
    document.querySelector("#cart").style.overflow = "auto";
});