// Sample menu data
const menuItems = [
  { name: "Pizza" },
  { name: "Burger" },
  { name: "Salad" },
  // Add more menu items as needed
];

// Function to generate random Indian menu items
function generateRandomMenuItems() {
  const indianMenuItems = [
    { name: "Butter Chicken" },
    { name: "Chicken Tikka Masala" },
    { name: "Paneer Tikka" },
    { name: "Dal Makhani" },
    { name: "Palak Paneer" },
    { name: "Chole Bhature" },
    { name: "Samosa" },
    { name: "Biryani" },
    { name: "Tandoori Chicken" },
    { name: "Aloo Gobi" },
    { name: "Rogan Josh" },
    { name: "Masala Dosa" },
    { name: "Gulab Jamun" },
    { name: "Rasgulla" },
    { name: "Jalebi" },
    { name: "Chana Masala" },
    { name: "Pani Puri" },
    { name: "Dahi Vada" },
    { name: "Pav Bhaji" },
    { name: "Aloo Paratha" },
    { name: "Chilli Chicken" },
    { name: "Fish Curry" },
    { name: "Veg Pulao" },
    { name: "Chicken Biryani" },
    { name: "Mutton Curry" },
    { name: "Prawn Masala" },
    { name: "Veg Korma" },
    { name: "Malai Kofta" },
    { name: "Chicken 65" },
    { name: "Papdi Chaat" },
    // Add more Indian menu items as needed
  ];

  // Generate 30 random Indian menu items
  const randomMenuItems = [];
  for (let i = 0; i < 30; i++) {
    const randomIndex = Math.floor(Math.random() * indianMenuItems.length);
    randomMenuItems.push(indianMenuItems[randomIndex]);
  }

  // Add the random Indian menu items to the existing menu
  menuItems.push(...randomMenuItems);
}

// Call the function to generate random Indian menu items
generateRandomMenuItems();

// Function to dynamically generate menu items
function renderMenu() {
  const menuSection = document.querySelector(".menu");
  const menuList = document.createElement("ul");

  menuItems.forEach((item) => {
    const menuItem = document.createElement("li");
    menuItem.textContent = `${item.name}`;
    menuList.appendChild(menuItem);
  });

  menuSection.appendChild(menuList);
}

// Call the function to render menu items
renderMenu();
