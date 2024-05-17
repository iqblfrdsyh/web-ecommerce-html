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
    price1: 500.50,
    price2: 451,
    disc: 30,
    total: 1000,
    sold: 600,
  },
];

let categoryContainer = document.getElementById("categoriesContainer");
let FlashSaleContainer = document.getElementById("productsFS");

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

dataCategories.forEach((data) => {
  categoryContainer.innerHTML += categoryComponent(data.image, data.category);
});

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
  return ` <div class="w-[300px] h-[380px] border-2 shadow-md rounded-md">
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
</div>`;
}

let countDownDate =
  new Date().getTime() + 6 * 60 * 60 * 1000 + 30 * 60 * 1000 + 50 * 1000;

let countdownFunction = setInterval(function () {
  let now = new Date().getTime();

  let distance = countDownDate - now;

  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("hours").innerHTML = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").innerHTML = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").innerHTML = seconds
    .toString()
    .padStart(2, "0");

  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);
