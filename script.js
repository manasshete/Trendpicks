
const products = [
  {
    id: 1,
    title: "Waist Chain",
    description: "3 in 1 layered waist chain. Adjustable, trendy, and perfect for summer outfits.",
    price: "249₹",
    oldPrice: "999₹",
    image: "./assets/waist-chain.jpg",
    affiliateUrl: "https://amzn.to/46Fp2g3",
    category: "fashion",
    badge: "Best Seller",
    rating: 4.5,
    reviewCount: "4.2k"
  },
  {
    id: 2,
    title: "Floor Lamp for Living Room and Bedroom",
    description: "Mid-century modern tripod lamp with dimmable LED bulb. Adds warm ambiance to any space.",
    price: "999₹",
    oldPrice: "1999₹",
    image: "./assets/lamp.jpg",
    affiliateUrl: "https://amzn.to/479Ykwc",
    category: "home",
    badge: "Top Pick",
    rating: 5,
    reviewCount: "8.7k"
  },
  {
    id: 3,
    title: "Aesthink Aesthetic Desk Organizer",
    description: "Bamboo multi-compartment organizer. Declutter your desk in style.",
    price: "$29.99",
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80",
    affiliateUrl: "https://www.amazon.com/s?k=desk+organizer+bamboo&tag=YOUR_TAG",
    category: "study",
    badge: null,
    rating: 4,
    reviewCount: "1.3k"
  },
  {
    id: 4,
    title: "Kindle Paperwhite (16 GB)",
    description: "Glare-free display, 10 weeks battery. Read anywhere, anytime.",
    price: "$149.99",
    oldPrice: "$169.99",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&q=80",
    affiliateUrl: "https://www.amazon.com/dp/B09TMF6742?tag=YOUR_TAG",
    category: "study",
    badge: "Hot 🔥",
    rating: 5,
    reviewCount: "22k"
  },
  {
    id: 5,
    title: "Veuve Mini LED Desk Lamp",
    description: "USB-C powered, dimmable, eye-caring light. Great for late-night study.",
    price: "$24.99",
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1606986628420-0b36e957e3b2?w=600&q=80",
    affiliateUrl: "https://www.amazon.com/s?k=led+desk+lamp+usb&tag=YOUR_TAG",
    category: "home",
    badge: null,
    rating: 4,
    reviewCount: "980"
  },
  {
    id: 6,
    title: "Apple MagSafe Charger 15W",
    description: "Snap-and-charge wireless charging with MagSafe speed for iPhone.",
    price: "$39.00",
    oldPrice: "$45.00",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&q=80",
    affiliateUrl: "https://www.amazon.com/dp/B09G9HD6PD?tag=YOUR_TAG",
    category: "tech",
    badge: "Trending",
    rating: 5,
    reviewCount: "15k"
  },
  {
    id: 7,
    title: "Hydro Flask 32 oz Water Bottle",
    description: "Double-wall vacuum insulation. Keeps drinks cold 24 hrs, hot 12 hrs.",
    price: "$44.95",
    oldPrice: "$54.95",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80",
    affiliateUrl: "https://www.amazon.com/s?k=hydroflask+32oz&tag=YOUR_TAG",
    category: "lifestyle",
    badge: "Fan Fave",
    rating: 5,
    reviewCount: "30k"
  },
  {
    id: 8,
    title: "Nuage Aesthetic Throw Blanket",
    description: "Ultra-soft chunky knit throw for cozy dorm rooms and study sessions.",
    price: "$34.99",
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=600&q=80",
    affiliateUrl: "https://www.amazon.com/s?k=chunky+knit+throw+blanket&tag=YOUR_TAG",
    category: "home",
    badge: null,
    rating: 4,
    reviewCount: "2.1k"
  },
  {
    id: 9,
    title: "Anker Nano 65W Charger",
    description: "Charge laptop + phone together from a single tiny adapter. Travel-ready.",
    price: "$35.99",
    oldPrice: "$45.99",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&q=80",
    affiliateUrl: "https://www.amazon.com/s?k=anker+nano+65w+charger&tag=YOUR_TAG",
    category: "tech",
    badge: "Editor's Pick",
    rating: 5,
    reviewCount: "11k"
  },
  {
    id: 10,
    title: "MUJI Gel Ink Pens (Pack of 3)",
    description: "Smooth 0.5 mm gel ink. The cult-favorite pen every student swears by.",
    price: "$12.00",
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=600&q=80",
    affiliateUrl: "https://www.amazon.com/s?k=muji+gel+pen&tag=YOUR_TAG",
    category: "study",
    badge: null,
    rating: 5,
    reviewCount: "6.4k"
  },
  {
    id: 11,
    title: "Linen Crossbody Bag",
    description: "Minimalist canvas sling bag — fits a phone, cards, and earbuds easily.",
    price: "$22.99",
    oldPrice: "$29.99",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
    affiliateUrl: "https://www.amazon.com/s?k=canvas+crossbody+bag+women&tag=YOUR_TAG",
    category: "fashion",
    badge: "Trending",
    rating: 4,
    reviewCount: "3.8k"
  },
  {
    id: 12,
    title: "Philips Hue Go Portable Light",
    description: "16M colours, battery-powered ambient lamp. Set the vibe anywhere.",
    price: "$79.99",
    oldPrice: "$89.99",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    affiliateUrl: "https://www.amazon.com/s?k=philips+hue+go&tag=YOUR_TAG",
    category: "home",
    badge: "Vibe ✨",
    rating: 5,
    reviewCount: "7.2k"
  }
];

/* ─────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────── */
function buildStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let s = "★".repeat(full);
  if (half) s += "☆";
  return s;
}

function createCard(product) {
  const card = document.createElement("article");
  card.className = "card";
  card.dataset.category = product.category;

  card.innerHTML = `
    <div class="card-img-wrap">
      ${product.badge ? `<span class="card-badge">${product.badge}</span>` : ""}
      <button class="card-save" title="Save" aria-label="Save product">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
          fill="none" stroke="#e60023" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      </button>
      <img
        src="${product.image}"
        alt="${product.title}"
        loading="lazy"
        decoding="async"
      />
    </div>
    <div class="card-body">
      <span class="card-category">${product.category}</span>
      <h2 class="card-title">${product.title}</h2>
      <p class="card-desc">${product.description}</p>
      <div class="card-rating">
        <span class="stars">${buildStars(product.rating)}</span>
        <span class="rating-count">(${product.reviewCount})</span>
      </div>
      <div class="card-footer">
        <div>
          <span class="card-price">${product.price}</span>
          ${product.oldPrice ? `<span class="card-price-old">${product.oldPrice}</span>` : ""}
        </div>
        <a
          href="${product.affiliateUrl}"
          target="_blank"
          rel="noopener noreferrer sponsored"
          class="btn-buy"
          aria-label="Buy ${product.title} on Amazon"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
          Buy on Amazon
        </a>
      </div>
    </div>
  `;

  /* heart / save toggle */
  card.querySelector(".card-save").addEventListener("click", (e) => {
    e.stopPropagation();
    const btn = e.currentTarget;
    btn.classList.toggle("saved");
    const svg = btn.querySelector("svg");
    if (btn.classList.contains("saved")) {
      svg.setAttribute("fill", "#e60023");
      btn.style.background = "#fef0f2";
    } else {
      svg.setAttribute("fill", "none");
      btn.style.background = "";
    }
  });

  return card;
}

/* ─────────────────────────────────────────────
   RENDER
───────────────────────────────────────────── */
function renderProducts(filter = "all") {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";

  const filtered = filter === "all"
    ? products
    : products.filter(p => p.category === filter);

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <span>🔍</span>
        <p>No products found in this category yet. Check back soon!</p>
      </div>`;
    return;
  }

  const fragment = document.createDocumentFragment();
  filtered.forEach(p => fragment.appendChild(createCard(p)));
  grid.appendChild(fragment);
}

/* ─────────────────────────────────────────────
   FILTER TABS
───────────────────────────────────────────── */
function initFilters() {
  const filterBar = document.getElementById("filterBar");
  filterBar.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;

    filterBar.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;
    renderProducts(filter);
  });
}

/* ─────────────────────────────────────────────
   INIT
───────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  initFilters();
});
