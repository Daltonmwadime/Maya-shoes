import React, { useState } from 'react';

// --- INLINE VECTOR LOGO COMPONENT ---
// Ensures logo is always visible even if local image paths are missing or broken
function MayaLogo({ className = "h-12" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Dynamic Vector Icon matching the MF Eagle mark */}
      <div className="relative w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center p-2 text-white shadow-sm shrink-0">
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
          {/* M & F Typography Base */}
          <text x="5" y="75" fontFamily="serif" fontWeight="900" fontSize="70" fill="currentColor">M</text>
          <text x="50" y="75" fontFamily="serif" fontWeight="900" fontSize="70" fill="currentColor">F</text>
          {/* Eagle Silhouette Motif */}
          <path d="M 35,45 Q 55,20 80,42 Q 65,55 50,48 Q 40,60 30,50 Z" fill="#ffffff" />
          <circle cx="68" cy="36" r="3" fill="#0f172a" />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col justify-center">
        <span className="text-lg sm:text-xl font-black tracking-tight text-slate-900 leading-none uppercase font-serif">
          MAYA FOOTWEAR
        </span>
        <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-slate-500 mt-1">
          STEP WITH EVERY STYLE
        </span>
      </div>
    </div>
  );
}

// --- PRODUCT CATALOG ---
const PRODUCTS = [
  {
     id: 1,
    name: "Adidas Samba 'Valentine' Heart Edition",
    category: "Sneakers",
    price: 4500,
    rating: 4.9,
    reviews: 38,
    image: "https://i.postimg.cc/Xq2SJf1f/Whats-App-Image-2026-09-25-at-17-34-59-(1).jpg",
    badge: "Limited Edition",
    description: "Iconic Samba design featuring custom heart embroidery and premium suede overlays."
  },
  {
    id: 2,
    name: "Puma Speedcat Ballet Aubergine-Pearl Pink _ Stylerunner",
    category: "Ballet Flats",
    price: 3800,
    rating: 4.8,
    reviews: 24,
    image: "https://i.postimg.cc/sxNrBs6h/Puma-Speedcat-Ballet-Aubergine-Pearl-Pink-Stylerunner.jpg",
    badge: "Trending",
    description: "Sleek low-profile motorsport-inspired ballet flat with criss-cross elastic straps."
  },
  {
    id: 3,
    name: "Puma Speedcat Ballet Flat - Soft Pink",
    category: "Ballet Flats",
    price: 3800,
    rating: 4.7,
    reviews: 19,
    image: "https://i.postimg.cc/q7bpgdtn/Whats-App-Image-2026-09-25-at-17-34-58-(1).jpg",
    badge: "New Arrival",
    description: "Ultra-comfortable suede ballet silhouette in soft pastel pink."
  },
  {
    id: 4,
    name: "Hermès Chypre Cut-Out Leather Sandals - White",
    category: "Sandals & Slides",
    price: 2200,
    rating: 5.0,
    reviews: 42,
    image: "https://i.postimg.cc/vBNtZDLm/Whats-App-Image-2026-09-25-at-17-34-58-(2).jpg",
    badge: "Luxury",
    description: "Signature 'H' cut-out velcro strap slider crafted with premium smooth calfskin."
  },
  {
    id: 5,
    name: "Hermès Oran Classic Leather Slides - Red",
    category: "Sandals & Slides",
    price: 4800,
    rating: 4.9,
    reviews: 31,
    image: "https://i.postimg.cc/4NLHCjPC/Whats-App-Image-2026-09-25-at-17-34-59.jpg",
    badge: "Bestseller",
    description: "Timeless leather slide featuring the emblematic 'H' cut-out in vivid rouge."
  },
  {
    id: 6,
    name: "Zara Gold-Accent Toe Loop Sandals",
    category: "Sandals & Slides",
    price: 3200,
    rating: 4.6,
    reviews: 15,
    image: "https://i.postimg.cc/SsvHbSnz/Whats-App-Image-2026-09-25-at-17-35-01-(1).jpg",
    badge: "Must Have",
    description: "Elegantly designed wide-strap suede sandals with sculptural gold toe accents."
  },
  { 
    id: 7,
    name: "Nike Mind 001 Slide",
    category: "Sandals & Slides",
    price: 3000,
    rating: 4.5,
    reviews: 22,
    image: "https://i.postimg.cc/hG4nmFjg/Nike-Mind-001-Slide-Best-Colourways-to-Buy-2026-PUSHAS.jpg",
    badge: "Popular",
    description: "Comfortable and stylish slide with a cushioned footbed and sleek design." 
  },
  {
    id: 7,
    name: "Nike Dunk Low “Medium Olive”",
    category: "Sneakers",
    price: 6500,
    rating: 4.8,
    reviews: 29,
    image: "https://i.postimg.cc/rFL5LgsK/Nike-Sportswear-Older-Kids-Dunk-Low-(GS)-White-Vintage-Green-Trainers-Boys-Shoes.jpg",
    badge: "Limited Release",
    description: "Classic Dunk Low silhouette in a versatile olive colorway with premium leather."
  },
  {
    id: 8,
    name: "Pink teddy-bear slippers",
    category: "Sandals & Slides",
    price: 2500,
    rating: 4.7,
    reviews: 18,
    image: "https://i.postimg.cc/Twgh7Mrj/KONTERFEIT.jpg",
    badge: "Cozy",
    description: "Soft and plush teddy-bear slippers perfect for lounging at home."
  },
  {
    id: 9,
    name: "Puma Suede XL red",
    category: "Sneakers",
    price: 4000,
    rating: 4.6,
    reviews: 21,
    image: "https://i.postimg.cc/Cx21wL7q/Whats-App-Image-2026-09-26-at-16-53-11-(1).jpg",
    badge: "Classic",
    description: "Iconic Puma Suede XL in a bold red colorway with premium suede upper."
  },
  {
    id: 10,
    name: "Puma Suede XL black",
    category: "Sneakers",
    price: 4000,
    rating: 4.5,
    reviews: 17,
    image: "https://i.postimg.cc/0QMkpVFN/Puma-Suede-XL-Black.jpg",
    badge: "Classic",
    description: "Timeless Puma Suede XL in sleek black with a durable rubber sole."
  },
  {
    id: 11,
    name: "New Balance 9060",
    category: "Sneakers",
    price: 6000,
    rating: 4.9,
    reviews: 25,
    image: "https://i.postimg.cc/pLJpT1bk/Whats-App-Image-2026-09-26-at-16-53-09.jpg",
    badge: "New Arrival",
    description: "Modern New Balance 9060 with a chunky sole and premium materials."
  },
];


export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Sneakers", "Ballet Flats", "Sandals & Slides"];

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalCartPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;
    const orderDetails = cart
      .map((item) => `• ${item.name} (x${item.quantity}) - KSh ${(item.price * item.quantity).toLocaleString()}`)
      .join('\n');
    const message = encodeURIComponent(
      `Hello Maya Footwear! I would like to place an order:\n\n${orderDetails}\n\nTotal: KSh ${totalCartPrice.toLocaleString()}`
    );
    window.open(`https://wa.me/254112907594?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
      
      {/* Top Banner */}
      <div className="bg-slate-900 text-white text-xs py-2 px-4 text-center font-medium tracking-wide">
        ⚡ Fast Delivery Across Nairobi & Kenya | Direct Orders: +254 112 907 594
      </div>

      {/* Header / Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Always Visible Logo */}
          <MayaLogo />

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-2 sm:mx-4 hidden sm:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search sandals, flats, sneakers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-slate-100 border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all"
              />
              <svg className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Cart Trigger */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2.5 text-slate-800 hover:bg-slate-100 rounded-full transition-colors flex items-center gap-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="hidden md:inline text-sm font-semibold">Cart</span>
            {totalCartCount > 0 && (
              <span className="bg-amber-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalCartCount}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-amber-50/50 to-slate-50 border-b border-slate-200 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100 rounded-full inline-block mb-3">
            New Season Collection
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight leading-tight font-serif">
            STEP WITH EVERY STYLE
          </h1>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Discover luxury sandals, iconic street sneakers, and elegant ballet flats engineered for quality and fashion-forward aesthetics.
          </p>
        </div>
      </section>

      {/* Main Catalog */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 w-full">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">Featured Products</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <p className="text-slate-500 font-medium">No items matched your filter criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="relative aspect-square bg-slate-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback image placeholder if image file is missing locally
                      e.target.src = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800";
                    }}
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-slate-900/90 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md backdrop-blur-sm">
                      {product.badge}
                    </span>
                  )}
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700">
                      {product.category}
                    </span>
                    <h3 className="font-bold text-slate-900 text-base mt-1 line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="flex items-center gap-1 mt-3">
                      <span className="text-amber-500 text-xs">★</span>
                      <span className="text-xs font-bold text-slate-800">{product.rating}</span>
                      <span className="text-xs text-slate-400">({product.reviews} reviews)</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400 block font-medium">Price</span>
                      <span className="text-lg font-black text-slate-900">KSh {product.price.toLocaleString()}</span>
                    </div>
                    <button
                      onClick={() => addToCart(product)}
                      className="px-4 py-2 bg-slate-900 hover:bg-amber-600 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors active:scale-95"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div 
            onClick={() => setIsCartOpen(false)} 
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity"
          />

          <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10">
            <div className="p-5 border-b border-slate-200 flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900">Your Shopping Cart ({totalCartCount})</h3>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-700 rounded-full"
              >
                ✕
              </button>
            </div>

            <div className="p-5 flex-1 overflow-y-auto space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-12 text-slate-500 text-sm">
                  Your cart is currently empty.
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4 items-center pb-4 border-b border-slate-100">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-xl bg-slate-100" />
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-slate-900 line-clamp-1">{item.name}</h4>
                      <p className="text-xs text-slate-500 font-semibold mt-0.5">
                        KSh {item.price.toLocaleString()} × {item.quantity}
                      </p>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-xs text-red-500 hover:underline font-medium"
                    >
                      Remove
                    </button>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-5 border-t border-slate-200 bg-slate-50">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-semibold text-slate-600">Subtotal</span>
                  <span className="text-xl font-black text-slate-900">KSh {totalCartPrice.toLocaleString()}</span>
                </div>
                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  Order Via WhatsApp
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-900 text-white border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <MayaLogo className="text-white mb-4" />
            <p className="text-xs text-slate-400 mt-2">Step With Every Style. Premium footwear curated for elegance and everyday durability.</p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">Connect With Us</h4>
            <ul className="text-xs space-y-2 text-slate-400">
              <li>Instagram: <a href="https://instagram.com/mayafootwear254" target="_blank" rel="noreferrer" className="hover:text-white underline">@mayafootwear254</a></li>
              <li>Facebook: <a href="https://facebook.com/mayafootwear254" target="_blank" rel="noreferrer" className="hover:text-white underline">mayafootwear254</a></li>
              <li>TikTok: <a href="https://tiktok.com/@mayafootwear254" target="_blank" rel="noreferrer" className="hover:text-white underline">@mayafootwear254</a></li>
              <li>Phone / WhatsApp: <a href="tel:+254112907594" className="hover:text-white underline">+254 112 907 594</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">Store Info</h4>
            <p className="text-xs text-slate-400">Delivery available across Kenya. Order directly via WhatsApp or browse our latest catalogue online.</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-6 border-t border-slate-800 text-center text-[11px] text-slate-500">
          © {new Date().getFullYear()} Maya Footwear. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
