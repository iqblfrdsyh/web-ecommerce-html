// alert("Content Baru 70% & responsive mobile baru navbar & footer.");

const dropdownClicked = (dropdownType) => {
  console.log("clicked");
  const btn = document.getElementById("dropdownItem");
  const btn3 = document.getElementById("mobile-menu");
  const btn4 = document.getElementById("profile-menu");

  if (dropdownType == "category") {
    if (btn.classList.contains("hidden")) {
      btn.classList.remove("hidden");
      btn.classList.add("block");
    } else {
      btn.classList.remove("block");
      btn.classList.add("hidden");
    }
  } else if (dropdownType == "mobile-menu") {
    if (btn3.classList.contains("hidden")) {
      btn3.classList.remove("hidden");
      btn3.classList.add("block");
    } else {
      btn3.classList.remove("block");
      btn3.classList.add("hidden");
    }
  } else if (dropdownType == "profile-menu") {
    if (btn4.classList.contains("hidden")) {
      btn4.classList.remove("hidden");
      btn4.classList.add("block");
    } else {
      btn4.classList.remove("block");
      btn4.classList.add("hidden");
    }
  }
};

const dataCategories = [
  {
    image: "./src/images/category-icon/Frame.png",
    category: "Man Fashion",
  },
  {
    image: "./src/images/category-icon/Frame (1).png",
    category: "Gadget Electronic",
  },
  {
    image: "./src/images/category-icon/Frame (2).png",
    category: "Voucher Game",
  },
  {
    image: "./src/images/category-icon/Frame (3).png",
    category: "Property",
  },
  {
    image: "./src/images/category-icon/Frame (4).png",
    category: "Kids Fashion",
  },
  {
    image: "./src/images/category-icon/Frame (5).png",
    category: "Computer & Laptop",
  },
  {
    image: "./src/images/category-icon/Frame (6).png",
    category: "Woman Fashion",
  },
  {
    image: "./src/images/category-icon/Frame (7).png",
    category: "Sports",
  },
  {
    image: "./src/images/category-icon/Frame (8).png",
    category: "Gaming",
  },
  {
    image: "./src/images/category-icon/Frame (9).png",
    category: "Film & Music",
  },
  {
    image: "./src/images/category-icon/Frame (10).png",
    category: "View All",
  },
];

const dataProductsFS = [
  {
    image: "./src/images/product-images/Image.png",
    name: "Durable Tupperware bottles (Black Version)",
    category: "Property",
    price1: 30.0,
    price2: 20.1,
    disc: 50,
    total: 1000,
    sold: 500,
  },
  {
    image: "./src/images/product-images/Image (1).png",
    name: "Youth The Child Bluetooth Headphones",
    category: "Electronic",
    price1: 50.0,
    price2: 40.0,
    disc: 10,
    total: 1000,
    sold: 150,
  },
  {
    image: "./src/images/product-images/Image (2).png",
    name: "CTRL brand tupperware bottles",
    category: "Property",
    price1: 15.0,
    price2: 10.5,
    disc: 15,
    total: 1000,
    sold: 700,
  },
  {
    image: "./src/images/product-images/Image (3).png",
    name: "Miniature hotwheels black sports",
    category: "Automotive",
    price1: 1000,
    price2: 800,
    disc: 35,
    total: 1000,
    sold: 350,
  },
  {
    image: "./src/images/product-images/Image (4).png",
    name: "Headphone Super Bass Stereo High Quality",
    category: "Electronic",
    price1: 50.0,
    price2: 20.1,
    disc: 80,
    total: 1000,
    sold: 870,
  },
  {
    image: "./src/images/product-images/Image (5).png",
    name: "Neve Strix Pro L123 (2021) - TP399K 1TB",
    category: "Computer & Laptop",
    price1: 500.5,
    price2: 451,
    disc: 30,
    total: 1000,
    sold: 600,
  },
];

const dataProducts = [
  {
    name: "Neve Strix Pro L123 (2021) - TP399K 1TB",
    category: "Computer & Laptop",
    image: "./src/images/product-images/Image (5).png",
    price: 467.50,
    rating: 4.7,
    location: "Kota Solo",
    sold: 389,
  },
  {
    name: "Neve Strix Pro L123 (2021) - TP399K 1TB",
    category: "Computer & Laptop",
    image: "./src/images/product-images/Image (5).png",
    price: 467.50,
    rating: 4.7,
    location: "Kota Solo",
    sold: 389,
  },
  {
    name: "Neve Strix Pro L123 (2021) - TP399K 1TB",
    category: "Computer & Laptop",
    image: "./src/images/product-images/Image (5).png",
    price: 467.50,
    rating: 4.7,
    location: "Kota Solo",
    sold: 389,
  },
  {
    name: "Neve Strix Pro L123 (2021) - TP399K 1TB",
    category: "Computer & Laptop",
    image: "./src/images/product-images/Image (5).png",
    price: 467.50,
    rating: 4.7,
    location: "Kota Solo",
    sold: 389,
  },
  {
    name: "Neve Strix Pro L123 (2021) - TP399K 1TB",
    category: "Computer & Laptop",
    image: "./src/images/product-images/Image (5).png",
    price: 467.50,
    rating: 4.7,
    location: "Kota Solo",
    sold: 389,
  },
  {
    name: "Neve Strix Pro L123 (2021) - TP399K 1TB",
    category: "Computer & Laptop",
    image: "./src/images/product-images/Image (5).png",
    price: 467.50,
    rating: 4.7,
    location: "Kota Solo",
    sold: 389,
  },
  {
    name: "Neve Strix Pro L123 (2021) - TP399K 1TB",
    category: "Computer & Laptop",
    image: "./src/images/product-images/Image (5).png",
    price: 467.50,
    rating: 4.7,
    location: "Kota Solo",
    sold: 389,
  },
  {
    name: "Neve Strix Pro L123 (2021) - TP399K 1TB",
    category: "Computer & Laptop",
    image: "./src/images/product-images/Image (5).png",
    price: 467.50,
    rating: 4.7,
    location: "Kota Solo",
    sold: 389,
  },
]

const dataCardChoose = [
  {
    title: "Popular Product",
    icon: "./src/images/icons/Vector.png",
    stock: "327",
    gradient: "linear-gradient(90deg, #BF5AE0 0%, #A811DA 100%)",
  },
  {
    title: "Most Wanted",
    icon: "./src/images/icons/Vector (1).png",
    stock: "170",
    gradient: "linear-gradient(90deg, #06BEB6 0%, #48B1BF 100%)",
  },
  {
    title: "Top Fashion",
    icon: "./src/images/icons/Vector (2).png",
    stock: "289",
    gradient: "linear-gradient(90deg, #F85032 0%, #E73827 100%)",
  },
  {
    title: "Best Seller",
    icon: "./src/images/icons/Vector (3).png",
    stock: "430",
    gradient: "linear-gradient(90deg, #FE8C00 0%, #F83600 100%)",
  },
  {
    title: "Best Shop 2024",
    icon: "./src/images/icons/Vector (4).png",
    stock: "129",
    gradient: "linear-gradient(90deg, #F857A6 0%, #FF5858 100%)",
  },
];

let categoryContainer = document.getElementById("categoriesContainer");
let FlashSaleContainer = document.getElementById("productsFS");
let cardChooseContainer = document.getElementById("cardChoose");
let cardProductsContainer = document.getElementById("products");

dataCategories.forEach((data) => {
  categoryContainer.innerHTML += categoryComponent(data.image, data.category);
});
dataProductsFS.forEach((product) => {
  FlashSaleContainer.innerHTML += cardComponent(
    product.image,
    product.name,
    product.category,
    product.price1,
    product.price2,
    product.disc,
    product.total,
    product.sold
  );
});
dataCardChoose.forEach((data) => {
  cardChooseContainer.innerHTML += cardChooseComponent(
    data.title,
    data.icon,
    data.stock,
    data.gradient
  );
});

dataProducts.forEach((data) => {
  cardProductsContainer.innerHTML += cardProductComponent(data)
})

function categoryComponent(image, category) {
  return `<figure class="flex flex-col items-center gap-2 w-[60px] hover:cursor-pointer">
    <div class="p-3 bg-gray-200 rounded-full w-[50px] flex items-center justify-center">
        <img src="${image}" alt="1" width="27px">
    </div>
    <figcaption class="text-[16px] text-center">${category}</figcaption>
</figure>`;
}

function cardComponent(
  image,
  name,
  category,
  price1,
  price2,
  disc,
  total,
  sold
) {
  return ` 
  <swiper-slide>
  <div class="w-[300px] h-[380px] border-2 shadow-md rounded-md">
    <figure class="flex justify-center bg-gray-200 p-5 hover:cursor-pointer h-[180px]">
        <img src="${image}" alt=4${name}>
    </figure>
    <div class="p-4">
        <p class="mb-2">${category}</p>
        <h4 class="text-[18px] mb-2">${name}</h4>
        <div class="flex justify-between items-center">
            <p class="flex gap-2"><span class="line-through opacity-70">$${price1}</span><span>$${price2}</span>
            </p>
            <span class="bg-red-200 py-1 px-2 rounded-md">- ${disc}%</span>
        </div>
        <div class="mt-5 flex items-center gap-2">
            <div class="w-[70%]">
                <span role="progressbar" aria-labelledby="ProgressLabel" aria-valuenow="75"
                    class="block rounded-full bg-gray-200 ">
                    <span class="block h-3 rounded-full bg-indigo-600" style="width: ${
                      (sold / total) * 100
                    }%;background: linear-gradient(to right, #FF512F 0%, #F09819 100%);"></span>
                </span>
            </div>
            <p class="text-[15px] opacity-60">${sold} Sold</p>
        </div>
    </div>
</div>
</swiper-slide>
`;
}

function cardProductComponent(product) {
  return `<div class="w-[170px] h-[305px] sm:w-[300px] sm:h-[375px] border-2 shadow-md rounded-md">
  <figure class="flex justify-center bg-gray-200 p-5 items-center hover:cursor-pointer h-[160px] sm:h-[180px]">
      <img src="${product.image}" alt="product-image" class="w-[80px] h-[60px] sm:w-[180px] sm:h-[140px]">
  </figure>
  <div class="p-2 sm:p-4 ralative">
      <span class="text-[10px] sm:text-[15px] bg-purple-200 py-1 px-2 rounded-md">${product.category}</span>
      <h3 class="my-2 text-[14px] sm:text-[18px] font-semibold truncate sm:overflow-visible sm:whitespace-normal">${product.name}</h3>
      <div class="flex items-center justify-between">
          <p class="text-[15px] sm:text-[17px]">$${product.price}</p>
          <figure class="flex gap-1 items-center">
              <img src="./src/images/icons/Frame.png" alt="rate-icon" class="w-[14px] h-[14px] sm:w-[18px] sm:h-[18px]">
              <figcaption class="text-[13px] sm:text-[16px]">${product.rating}</figcaption>
          </figure>
      </div>
      <div class="flex justify-between items-center mt-4 sm:mt-5">
          <figure class="flex gap-1 items-center">
              <img src="./src/images/icons/Frame (1).png" alt="location-icon" class="w-[14px] h-[14px] sm:w-[18px] sm:h-[18px]">
              <figcaption class="text-[13px] sm:text-[16px]">${product.location}</figcaption>
          </figure>
          <p class="text-[13px] sm:text-[16px]">${product.sold} Sold</p>
      </div>
  </div>
</div>`;
}

function cardChooseComponent(title, icon, stock, gradient) {
  return `
  <swiper-slide>
  <div class="w-[300px] h-[110px] p-5 rounded-md text-white relative hover:cursor-pointer" style="background: ${gradient};">
    <figure class="flex items-center gap-2">
        <div class="bg-[#FFFFFF40] h-[35px] w-[35px] flex justify-center items-center rounded-md">
            <img src="${icon}" alt="icon1">
        </div>
        <figcaption class="font-semibold text-[20px]">${title}</figcaption>
    </figure>
    <div class="flex items-center justify-between absolute bottom-3 w-[260px]">
        <p>Product</p>
        <p>${stock} Stock</p>
    </div>
</div>
</swiper-slide>
`;
}

const countdownTime = { hours: 7, minutes: 0, seconds: 0 };

const countDownDate =
  new Date().getTime() +
  (countdownTime.hours * 3600 +
    countdownTime.minutes * 60 +
    countdownTime.seconds) *
    1000;

const countdownFunction = setInterval(() => {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("countdown").innerHTML = "EXPIRED";
    return;
  }

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(
    2,
    "0"
  );
  document.getElementById("seconds").textContent = String(seconds).padStart(
    2,
    "0"
  );
}, 1000);
