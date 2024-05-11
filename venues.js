// Sample venue data
const venues = [
  {
    name: "Hotel Grand Nirvana",
    location: "Karampur Chaudary Bareilly",
    details:
      "Step into our elegant hall and experience luxury like never before.",
    reviews: 100,
    rating: 5,
    price: "See Details For More",
  },
  {
    name: "Hotel Raddison",
    location: "Mudia Ahmad Nagar Bareilly",
    details:
      "Join us at our charming venue, where every detail is crafted to perfection.",
    reviews: 150,
    rating: 5.0,
    price: "See Details For More",
  },
  {
    name: "Faham Lawn",
    location: "Pawan Vihar Bareilly",
    details:
      "Discover the serenity of our tranquil lodge, nestled amidst nature's embrace.",
    reviews: 50,
    rating: 3.7,
    price: "See Details For More",
  },
  {
    name: "Darwar-e-Khas",
    location: "Khushboo Enclave Bareilly",
    details:
      "Welcome to our vibrant club, where the energy is contagious and the memories are everlasting.",
    reviews: 40,
    rating: 4.0,
    price: "See Details For More",
  },
  {
    name: "Jalsa Green",
    location: "Khushboo Enclave Bareilly",
    details:
      "Indulge in the sophistication of our exquisite place, where every moment is a celebration.",
    reviews: 40,
    rating: 4.0,
    price: "See Details For More",
  },
  {
    name: "Mannat Lawn",
    location: "Pawan Vihar Bareilly",
    details:
      "Escape to our cozy inn, where warmth and comfort await you at every turn.",
    reviews: 45,
    rating: 3.5,
    price: "See Details For More",
  },
  {
    name: "Aarsih lawn",
    location: "Khushboo Enclave Bareilly",
    details:
      "Experience the grandeur of our majestic resort, where opulence meets unparalleled hospitality.",
    reviews: 30,
    rating: 3.5,
    price: "See Details For More",
  },
  {
    name: "Flora Garden",
    location: "Bisalpur Chauraha Bareilly",
    details:
      "Unwind at our serene house, where relaxation and rejuvenation are our top priorities.",
    reviews: 20,
    rating: 4.0,
    price: "See Details For More",
  },
  {
    name: "Sparsh Hotel and Resort",
    location: "Suresh Sharma Nagar Bareilly",
    details:
      "Immerse yourself in the beauty of our picturesque center, where every corner tells a story.",
    reviews: 45,
    rating: 4.0,
    price: "See Details For More",
  },
  {
    name: "The Krati Resort",
    location: "After Barrier Chawar Bareilly",
    details:
      "Join us at our lively lodge, where laughter echoes and friendships bloom.",
    reviews: 40,
    rating: 4.0,
    price: "See Details For More",
  },
  {
    name: "KO Bnaquet Hall",
    location: "Brahampura Bareilly",
    details:
      "Discover the charm of our quaint venue, where intimacy and elegance go hand in hand.",
    reviews: 60,
    rating: 3.7,
    price: "See Details For More",
  },
  {
    name: "Iqwal Palace",
    location: "Brahampura Bareilly",
    details:
      "Step into our modern hall and elevate your event to new heights of sophistication.",
    reviews: 20,
    rating: 3.5,
    price: "See Details For More",
  },
  {
    name: "Sangam Palace",
    location: "Koharapeer Bareilly",
    details:
      "Welcome to our stylish club, where luxury and comfort are woven into every detail.",
    reviews: 19,
    rating: 3.5,
    price: "See Details For More",
  },
  {
    name: "King's Heritage",
    location: "Bisalpur Chauraha Bareilly",
    details:
      "Escape to our peaceful place, where tranquility reigns supreme and worries fade away.",
    reviews: 12,
    rating: 4.0,
    price: "See Details For More",
  },
  {
    name: "Shehnai Banquet Hall",
    location: "Nainital Road Civil Lines Bareilly",
    details:
      "Experience the magic of our enchanting resort, where dreams come to life and memories are made.",
    reviews: 11,
    rating: 3.5,
    price: "See Details For More",
  },
  {
    name: "Maanya Palace",
    location: "C.B Ganj Bareilly",
    details:
      "Indulge in the beauty of our scenic inn, where breathtaking views and impeccable service await.",
    reviews: 10,
    rating: 3.5,
    price: "See Details For More",
  },
  {
    name: "Elysium Krsihna",
    location: "Pashupati Vihar Bareilly",
    details:
      "Join us at our vibrant lodge, where adventure awaits and excitement never ends.",
    reviews: 12,
    rating: 4.0,
    price: "See Details For More",
  },
  {
    name: "Hotel Yatrik",
    location: "Civil Lines Bareilly",
    details:
      "Discover the elegance of our timeless center, where tradition meets modernity in perfect harmony.",
    reviews: 19,
    rating: 3.5,
    price: "See Details For More",
  },
  {
    name: "Utshav Garden Banquet Hall",
    location: "Barahampura Bareilly",
    details:
      "Step into our inviting house and feel right at home amidst the warmth of our hospitality.",
    reviews: 19,
    rating: 3.5,
    price: "See Details For More",
  },
  {
    name: "The Green Door",
    location: "Mudia Ahmad Nagar Bareilly",
    details:
      "Experience the splendor of our luxurious venue, where every detail is designed to impress and delight.",
    reviews: 30,
    rating: 4.0,
    price: "See Details For More",
  },

  // Add more venues here...
];

// Function to render venues
function renderVenues(searchTerm = "") {
  const venuesContainer = document.getElementById("venues");
  const showMoreButton = document.getElementById("showMoreButton");

  // Hide venues container by default
  venuesContainer.style.display = "none";
  venuesContainer.innerHTML = "";

  // Filter venues based on search term
  const filteredVenues = venues.filter((venue) =>
    venue.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Render only the first three venues
  filteredVenues.slice(0, 3).forEach((venue) => renderVenue(venue));

  // Show venues container if there are matching venues
  if (filteredVenues.length > 0) {
    venuesContainer.style.display = "block";

    // Show the "Show More" button if there are more than three venues
    if (filteredVenues.length > 3) {
      showMoreButton.style.display = "block";
    } else {
      showMoreButton.style.display = "none";
    }
  } else {
    venuesContainer.innerHTML = "<p>No venues found</p>";
  }

  // Event listener for "Show More" button
  showMoreButton.addEventListener("click", function () {
    // Render the remaining venues
    filteredVenues.slice(3).forEach((venue) => renderVenue(venue));

    // Hide the "Show More" button
    showMoreButton.style.display = "none";
  });
}

// Function to render a single venue
function renderVenue(venue) {
  const venuesContainer = document.getElementById("venues");

  const venueDiv = document.createElement("div");
  venueDiv.classList.add("venue");

  const nameHeader = document.createElement("h2");
  nameHeader.textContent = venue.name;

  const locationPara = document.createElement("p");
  locationPara.textContent = `Location: ${venue.location}`;

  const detailsPara = document.createElement("p");
  detailsPara.textContent = `Details: ${venue.details}`;

  const reviewsPara = document.createElement("p");
  reviewsPara.textContent = `Reviews: ${venue.reviews}`;

  const ratingPara = document.createElement("p");
  ratingPara.textContent = `Rating: ${venue.rating}`;

  const pricePara = document.createElement("p");
  pricePara.textContent = `Price: ${venue.price}`;

  venueDiv.appendChild(nameHeader);
  venueDiv.appendChild(locationPara);
  venueDiv.appendChild(detailsPara);
  venueDiv.appendChild(reviewsPara);
  venueDiv.appendChild(ratingPara);
  venueDiv.appendChild(pricePara);

  venuesContainer.appendChild(venueDiv);
}

// Event listener for search button click
document.getElementById("searchButton").addEventListener("click", function () {
  const searchTerm = document.getElementById("searchInput").value.trim();
  renderVenues(searchTerm);
});

// Event listener for "Enter" key press in the search input
document
  .getElementById("searchInput")
  .addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      // Trigger click on the "Go" button
      document.getElementById("searchButton").click();
    }
  });

// Initial render
renderVenues();
