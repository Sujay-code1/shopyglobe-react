import React from 'react';
import { useDispatch } from 'react-redux';
import { Trash } from 'lucide-react';
import { removeFromCart, updateQuantity } from '../store/cartSlice';

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center py-4 border-b">
      <img
        src={item.thumbnail}
        alt={item.title}
        className="w-24 h-24 object-cover rounded"
      />
      <div className="flex-1 ml-4">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="text-gray-600">${item.price}</p>
      </div>
      <div className="flex items-center space-x-4">
        <select
          value={item.quantity}
          onChange={(e) => dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))}
          className="border rounded p-1"
        >
          {[...Array(10)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        <button
          onClick={() => dispatch(removeFromCart(item.id))}
          className="text-red-600 hover:text-red-800"
        >
          <Trash className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}