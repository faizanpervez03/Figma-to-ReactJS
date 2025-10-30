import React from "react";

const cartItems = [
  { id: 1, name: "Ut diam consequat", color: "Brown", size: "XL", price: 32.0, image: "./images/cart-1.png" },
  { id: 2, name: "Ut diam consequat", color: "Brown", size: "XL", price: 32.0, image: "./images/cart-2.png" },
  { id: 3, name: "Ut diam consequat", color: "Brown", size: "XL", price: 32.0, image: "./images/cart-3.png" },
  { id: 4, name: "Ut diam consequat", color: "Brown", size: "XL", price: 32.0, image: "./images/cart-4.png" },
  { id: 5, name: "Ut diam consequat", color: "Brown", size: "XL", price: 32.0, image: "./images/cart-5.png" },
];

const CartSummary = () => {
  return (
    <div className="bg-white !p-6 rounded-lg shadow-sm">
      {cartItems.map((item) => (
        <div key={item.id} className="flex items-center justify-between border-b border-gray-100 !pb-3 !mb-3">
          <div className="flex items-center gap-3">
            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
            <div>
              <h3 className="font-medium text-gray-800">{item.name}</h3>
              <p className="text-sm text-gray-500">Color: {item.color}</p>
              <p className="text-sm text-gray-500">Size: {item.size}</p>
            </div>
          </div>
          <p className="text-gray-700 font-medium">${item.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

export default CartSummary;
