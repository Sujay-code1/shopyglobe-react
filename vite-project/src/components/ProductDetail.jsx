import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ShoppingCart, ArrowLeft, Loader } from 'lucide-react';
import { addToCart } from '../store/cartSlice';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch (`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error('Product not found');
        }
        const data = await response.json();
        setProduct(data);
        setSelectedImage(data.thumbnail);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-red-600">{error || 'Product not found'}</p>
        <button
          onClick={() => navigate('/')}
          className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate('/')}
        className="mb-6 inline-flex items-center text-blue-600 hover:text-blue-800"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Products
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={selectedImage}
            alt={product.title}
            className="w-full h-96 object-cover rounded-lg"
          />
          <div className="grid grid-cols-4 gap-2 mt-4">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.title} ${index + 1}`}
                className={`w-full h-24 object-cover rounded cursor-pointer ${
                  selectedImage === image ? 'ring-2 ring-blue-600' : ''
                }`}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>
          <div className="flex items-center mb-4">
            <span className="text-yellow-400">★</span>
            <span className="ml-1 text-gray-600">{product.rating}</span>
          </div>
          <p className="text-4xl font-bold text-blue-600 mb-4">${product.price}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <div className="mb-6">
            <p className="text-gray-600">Brand: {product.brand}</p>
            <p className="text-gray-600">Category: {product.category}</p>
            <p className="text-gray-600">Stock: {product.stock}</p>
          </div>
          <button
            onClick={() => dispatch(addToCart(product))}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors"
          >
            <ShoppingCart className="h-6 w-6" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}