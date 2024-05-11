// Sample vehicle data
const vehicles = [
  {
    name: "Innova",
    image: "innova.jpg",
    description: "Arrive at your event in style with our luxurious service.",
    price: "Starting from ₹5000 per day.",
  },
  {
    name: "Mahindra Scorpio",
    image: "scorpio.jpg",
    description: "Add a touch of elegance to your event with our classic cars.",
    price: "Starting from ₹6000 per day.",
  },

  {
    name: "Maruti Swift",
    image: "swift.jpg",
    description: "Add a touch of elegance to your event with our classic cars.",
    price: "Starting from ₹3000 per day.",
  },
  // Add more vehicle objects as needed
];

// Function to render vehicles
function renderVehicles() {
  const vehicleContainer = document.getElementById("vehicleContainer");

  vehicles.forEach((vehicle) => {
    const vehicleDiv = document.createElement("div");
    vehicleDiv.classList.add("vehicle");

    const vehicleImage = document.createElement("img");
    vehicleImage.src = vehicle.image;
    vehicleImage.alt = vehicle.name;

    const vehicleName = document.createElement("h2");
    vehicleName.textContent = vehicle.name;

    const vehicleDescription = document.createElement("p");
    vehicleDescription.textContent = vehicle.description;

    const vehiclePrice = document.createElement("p");
    vehiclePrice.textContent = vehicle.price;

    vehicleDiv.appendChild(vehicleImage);
    vehicleDiv.appendChild(vehicleName);
    vehicleDiv.appendChild(vehicleDescription);
    vehicleDiv.appendChild(vehiclePrice);

    vehicleContainer.appendChild(vehicleDiv);
  });
}

// Call the function to render vehicles
renderVehicles();
