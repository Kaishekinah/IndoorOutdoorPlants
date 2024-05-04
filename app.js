const wrapper = document.querySelector(".sliderWrapper");
const menuItem = document.querySelectorAll(".menuItem");

const products = [
    {
      id: 1,
      title: "Piece Lily",
      price: 119,
      colors: [
        {
          code: "white",
          img: "./img/1.png",
        },
        {
          code: "gray",
          img: "./img/gray.png",
        },
      ],
    },
    
    {
      id: 2,
      title: "Aloe Vera",
      price: 149,
      colors: [
        {
          code: "Brown",
          img: "./img/aloevera-removebg-preview.png",
        },
        {
          code: "White",
          img: "./img/white.png",
        },
      ],
    },
    {
      id: 3,
      title: "Monstera",
      price: 109,
      colors: [
        {
          code: "green",
          img: "./img/greenn.png",
        },
        {
          code: "white ",
          img: "./img/22.png",
        },
      ],
    },
    {
      id: 4,
      title: "Cactus",
      price: 129,
      colors: [
        {
          code: "orange",
          img: "./img/orange.png",
        },
        {
          code: "white",
          img: "./img/cactus white.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];
  
  let choosenProduct = products[0];

  const currentProductImg = document.querySelector(".productImg");
  const currentProductTitle = document.querySelector(".productTitle");
  const currentProductPrice = document.querySelector(".productPrice");
  const currentProductColors = document.querySelectorAll(".color");
  const currentProductSizes = document.querySelectorAll(".size");


menuItem.forEach((item,index) =>{
    item.addEventListener("click",()=>{
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        // change the choosen product
        choosenProduct = products[index];

        // change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
       currentProductImg.src = choosenProduct.colors[0].img;

       // asign new color
       currentProductColors.forEach((item,index)=>{
        item.style.backgroundColor = choosenProduct.colors[index].code;
       });
    });
});

currentProductColors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});


currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        
        currentProductSizes.forEach((size)=>{
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display = "flex";
  });
  
  close.addEventListener("click", () => {
    payment.style.display = "none";
  });