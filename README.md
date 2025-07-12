# E-Commerce-vue

[![Vue.js](https://img.shields.io/badge/vue-3.x-brightgreen)](https://vuejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](#)
[![Platform](https://img.shields.io/badge/platform-web-blue)](#)

🚀 **E-Commerce-vue** is a simple e-commerce web application built using **Vue.js 3** for the frontend.  
It aims to demonstrate basic online shopping functionality such as product listing, adding to cart, checkout simulation, and using local storage for persistent data.

---

## ✨ Features

- 🛒 Product listing with images, prices, and descriptions  
- ➕ Add items to cart  
- 🛍️ View cart with quantity & total price calculation  
- 🗑️ Remove items from cart  
- 💾 Cart data saved in **LocalStorage** (persists after refresh)  
- 🧾 Simple checkout process simulation (no real payment gateway yet)  

---

## ⚙️ Tech Stack

| Layer      | Technology         |
|------------|---------------------|
| Frontend   | Vue.js 3 (Composition API) |
| Styling    | CSS / Tailwind (optional) |
| Data Store | LocalStorage       |

---

## 📂 Project Structure

```
E-Commerce-vue/
│
├── src/
│ ├── assets/ # Images & static assets
│ ├── components/ # Vue components
│ ├── views/ # Page views
│ ├── router/ # Vue Router setup
│ └── App.vue # Root component
│
├── public/
├── package.json
├── vite.config.js # Vite config (or vue-cli config if you used that)
└── README.md
```


---

## 🚀 Getting Started

### 1️⃣ Clone this repository

```bash
git clone https://github.com/stevanu/E-Commerce-vue.git
cd E-Commerce-vue
```

2️⃣ Install dependencies
```bash
npm install
# or
yarn install
```
3️⃣ Run the development server
```bash
npm run dev
# or
yarn dev
```
```
Visit http://localhost:5173 (or the port Vite/Vue CLI shows) to see the app.
```
🎯 Usage
Browse through available products.

Click Add to Cart to store items in your shopping cart.

The cart persists in LocalStorage, so if you refresh or close the browser, it will still be there.

Checkout will simulate a purchase and clear the cart.

🙌 Contributions
Pull requests are welcome. If you find bugs or have suggestions for improvement, please open an issue or submit a PR.

🚀 Future Enhancements (Ideas)
✅ Add user authentication (login/register)
✅ Integrate with backend (Node/Go + MySQL) for products & orders
✅ Implement order history
✅ Add payment gateway simulation
