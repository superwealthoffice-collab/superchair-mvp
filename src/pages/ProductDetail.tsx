import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Star, 
  Heart, 
  ShoppingCart, 
  ArrowLeft, 
  Plus, 
  Minus, 
  Truck, 
  Shield, 
  RotateCcw,
  Check,
  ChevronLeft,
  ChevronRight,
  Zap,
  Award,
  Users
} from 'lucide-react';

interface ProductDetailProps {
  isDarkMode?: boolean;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ isDarkMode = false }) => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedBackrestColor, setSelectedBackrestColor] = useState('lime-black');
  const [selectedSeatColor, setSelectedSeatColor] = useState('black-solid');
  const [selectedPuColor, setSelectedPuColor] = useState('black-pu');
  const [selectedMaterial, setSelectedMaterial] = useState('leather');

  // Mock product data - in a real app, this would come from an API
  const product = {
    id: parseInt(id || '1'),
    name: 'Executive Office Chair',
    category: 'Executive',
    price: 899.99,
    originalPrice: 1199.99,
    rating: 4.8,
    reviews: 124,
    inStock: true,
    description: 'Premium leather executive chair with lumbar support, adjustable height, and ergonomic design - perfect for long work sessions.',
    longDescription: 'Experience ultimate comfort and productivity with our flagship Executive Office Chair. Crafted with premium materials and designed with ergonomic excellence, this chair transforms your workspace into a haven of comfort and efficiency.',
    images: [
      'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=600'
    ],
    features: [
      'Premium leather upholstery',
      'Adjustable lumbar support',
      'Height adjustable (18"-22")',
      '360° swivel base',
      'Tilt mechanism with lock',
      'Padded armrests',
      'Heavy-duty casters',
      '5-year warranty'
    ],
    specifications: {
      dimensions: '26" W x 28" D x 42-46" H',
      weight: '45 lbs',
      weightCapacity: '300 lbs',
      materials: 'Genuine leather, steel frame, high-density foam',
      assembly: 'Required (30-45 minutes)',
      warranty: '5 years comprehensive'
    },
    backrestColors: [
      { name: 'lime-black', label: 'Lime Black', hex: '#2d3748', pattern: 'mesh' },
      { name: 'ash-grey', label: 'Ash Grey', hex: '#718096', pattern: 'mesh' },
      { name: 'navy-blue', label: 'Navy Blue', hex: '#2c5282', pattern: 'mesh' },
      { name: 'light-blue', label: 'Light Blue', hex: '#63b3ed', pattern: 'mesh' },
      { name: 'tree-green', label: 'Tree Green', hex: '#38a169', pattern: 'mesh' },
      { name: 'vit-c-orange', label: 'Vit C Orange', hex: '#ed8936', pattern: 'mesh' },
      { name: 'ruby-red', label: 'Ruby Red', hex: '#e53e3e', pattern: 'mesh' },
      { name: 'red-wine', label: 'Red Wine', hex: '#742a2a', pattern: 'mesh' },
      { name: 'cherry-red', label: 'Cherry Red', hex: '#c53030', pattern: 'dots' },
      { name: 'facebook-blue', label: 'Facebook Blue', hex: '#3182ce', pattern: 'dots' },
      { name: 'smoke-grey', label: 'Smoke Grey', hex: '#a0aec0', pattern: 'dots' },
      { name: 'ultra-black', label: 'Ultra Black', hex: '#1a202c', pattern: 'dots' },
      { name: 'black-mesh', label: 'Black', hex: '#2d3748', pattern: 'fine-mesh' },
      { name: 'smoke-grey-mesh', label: 'Smoke Grey', hex: '#a0aec0', pattern: 'fine-mesh' },
      { name: 'blue-mesh', label: 'Blue', hex: '#4299e1', pattern: 'fine-mesh' }
    ],
    seatColors: [
      { name: 'black-solid', label: 'Black', hex: '#1a1a1a' },
      { name: 'light-grey-solid', label: 'Light Grey', hex: '#a0aec0' },
      { name: 'dark-grey-solid', label: 'Dark Grey', hex: '#4a5568' },
      { name: 'green-solid', label: 'Green', hex: '#38a169' },
      { name: 'red-solid', label: 'Red', hex: '#e53e3e' },
      { name: 'blue-solid', label: 'Blue', hex: '#3182ce' }
    ],
    puColors: [
      { name: 'black-pu', label: 'Black', hex: '#2d3748' },
      { name: 'grey-pu', label: 'Grey', hex: '#a0aec0' },
      { name: 'white-pu', label: 'White', hex: '#f7fafc' },
      { name: 'beige-pu', label: 'Beige', hex: '#d6bcaa' },
      { name: 'brown-pu', label: 'Brown', hex: '#8b4513' },
      { name: 'dark-brown-pu', label: 'Dark Brown', hex: '#553c2c' }
    ],
    materials: [
      { name: 'leather', label: 'Genuine Leather', price: 0 },
      { name: 'fabric', label: 'Premium Fabric', price: -100 },
      { name: 'mesh', label: 'Breathable Mesh', price: -50 }
    ]
  };

  const currentPrice = product.price + (product.materials.find(m => m.name === selectedMaterial)?.price || 0);
  const savings = product.originalPrice ? product.originalPrice - currentPrice : 0;

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Breadcrumb */}
      <div className={`py-4 border-b transition-colors duration-300 ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className={`hover:underline transition-colors ${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'}`}>
              Home
            </Link>
            <span className={`${isDarkMode ? 'text-gray-600' : 'text-gray-400'}`}>/</span>
            <Link to="/products" className={`hover:underline transition-colors ${isDarkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'}`}>
              Products
            </Link>
            <span className={`${isDarkMode ? 'text-gray-600' : 'text-gray-400'}`}>/</span>
            <span className={`transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {product.name}
            </span>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          to="/products"
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Products
        </Link>
      </div>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            {/* Main Image */}
            <div className="relative mb-6">
              <div className={`rounded-3xl overflow-hidden aspect-square transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Image Navigation */}
                <button
                  onClick={prevImage}
                  className={`absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full transition-colors ${isDarkMode ? 'bg-gray-900 bg-opacity-70 text-white hover:bg-opacity-90' : 'bg-white bg-opacity-70 text-gray-900 hover:bg-opacity-90'}`}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextImage}
                  className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full transition-colors ${isDarkMode ? 'bg-gray-900 bg-opacity-70 text-white hover:bg-opacity-90' : 'bg-white bg-opacity-70 text-gray-900 hover:bg-opacity-90'}`}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                {/* Sale Badge */}
                {product.originalPrice && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-red-500 text-white text-sm font-medium rounded-full">
                      Sale
                    </span>
                  </div>
                )}

                {/* Wishlist Button */}
                <button className="absolute top-4 right-4 p-2 rounded-full bg-white bg-opacity-90 hover:bg-opacity-100 transition-all">
                  <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
                </button>
              </div>

              {/* Image Thumbnails */}
              <div className="flex gap-3 mt-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? 'border-black'
                        : isDarkMode
                        ? 'border-gray-700 hover:border-gray-600'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <span className={`px-3 py-1 rounded-full text-xs font-medium transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                  {product.category}
                </span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className={`text-sm ml-2 transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              <h1 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {product.name}
              </h1>

              <p className={`text-lg leading-relaxed mb-6 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {product.longDescription}
              </p>

              {/* Price */}
              <div className="flex items-center gap-4 mb-8">
                <span className={`text-3xl font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  ${currentPrice.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className={`text-xl line-through transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    ${product.originalPrice}
                  </span>
                )}
                {savings > 0 && (
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                    Save ${savings.toFixed(2)}
                  </span>
                )}
              </div>
            </div>

            {/* Backrest Color Selection */}
            <div className="mb-6">
              <h3 className={`font-medium mb-3 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Backrest Color: {product.backrestColors.find(c => c.name === selectedBackrestColor)?.label}
              </h3>
              <div className="grid grid-cols-6 gap-3">
                {product.backrestColors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedBackrestColor(color.name)}
                    className={`w-16 h-12 rounded-lg border-2 transition-all relative overflow-hidden ${
                      selectedBackrestColor === color.name
                        ? 'border-black scale-105 ring-2 ring-blue-500'
                        : isDarkMode
                        ? 'border-gray-600 hover:border-gray-500'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                    title={color.label}
                  >
                    <div 
                      className="w-full h-full"
                      style={{ 
                        backgroundColor: color.hex,
                        backgroundImage: color.pattern === 'mesh' 
                          ? 'repeating-linear-gradient(45deg, transparent, transparent 1px, rgba(255,255,255,0.1) 1px, rgba(255,255,255,0.1) 2px)'
                          : color.pattern === 'dots'
                          ? 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)'
                          : color.pattern === 'fine-mesh'
                          ? 'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.1) 1px, rgba(255,255,255,0.1) 2px), repeating-linear-gradient(90deg, transparent, transparent 1px, rgba(255,255,255,0.1) 1px, rgba(255,255,255,0.1) 2px)'
                          : 'none',
                        backgroundSize: color.pattern === 'dots' ? '4px 4px' : '3px 3px'
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Seat Color Selection */}
            <div className="mb-6">
              <h3 className={`font-medium mb-3 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Seat Cushion Color: {product.seatColors.find(c => c.name === selectedSeatColor)?.label}
              </h3>
              <div className="grid grid-cols-6 gap-3">
                {product.seatColors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedSeatColor(color.name)}
                    className={`w-16 h-12 rounded-lg border-2 transition-all ${
                      selectedSeatColor === color.name
                        ? 'border-black scale-105 ring-2 ring-blue-500'
                        : isDarkMode
                        ? 'border-gray-600 hover:border-gray-500'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.label}
                  />
                ))}
              </div>
            </div>

            {/* PU Color Selection */}
            <div className="mb-6">
              <h3 className={`font-medium mb-3 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                PU Color: {product.puColors.find(c => c.name === selectedPuColor)?.label}
              </h3>
              <div className="grid grid-cols-6 gap-3">
                {product.puColors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedPuColor(color.name)}
                    className={`w-16 h-12 rounded-lg border-2 transition-all ${
                      selectedPuColor === color.name
                        ? 'border-black scale-105 ring-2 ring-blue-500'
                        : isDarkMode
                        ? 'border-gray-600 hover:border-gray-500'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.label}
                  />
                ))}
              </div>
            </div>

            {/* Material Selection */}
            <div className="mb-6">
              <h3 className={`font-medium mb-3 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Material: {product.materials.find(m => m.name === selectedMaterial)?.label}
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {product.materials.map((material) => (
                  <button
                    key={material.name}
                    onClick={() => setSelectedMaterial(material.name)}
                    className={`p-3 rounded-xl border text-sm font-medium transition-all ${
                      selectedMaterial === material.name
                        ? isDarkMode
                          ? 'border-white bg-gray-700 text-white'
                          : 'border-black bg-gray-100 text-gray-900'
                        : isDarkMode
                        ? 'border-gray-600 text-gray-300 hover:border-gray-500'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    <div>{material.label}</div>
                    {material.price !== 0 && (
                      <div className={`text-xs mt-1 ${material.price > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {material.price > 0 ? '+' : ''}${material.price}
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="mb-8">
              <h3 className={`font-medium mb-3 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Quantity
              </h3>
              <div className="flex items-center gap-4 mb-6">
                <div className={`flex items-center border rounded-full transition-colors duration-300 ${isDarkMode ? 'border-gray-600' : 'border-gray-300'}`}>
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className={`p-3 rounded-l-full transition-colors ${
                      quantity <= 1
                        ? 'text-gray-400 cursor-not-allowed'
                        : isDarkMode
                        ? 'hover:bg-gray-700 text-gray-300'
                        : 'hover:bg-gray-100 text-gray-600'
                    }`}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className={`px-6 py-3 font-medium transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= 10}
                    className={`p-3 rounded-r-full transition-colors ${
                      quantity >= 10
                        ? 'text-gray-400 cursor-not-allowed'
                        : isDarkMode
                        ? 'hover:bg-gray-700 text-gray-300'
                        : 'hover:bg-gray-100 text-gray-600'
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <span className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  disabled={!product.inStock}
                  className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-2xl text-sm font-medium transition-all duration-300 ${
                    product.inStock
                      ? isDarkMode
                        ? 'bg-white text-black hover:bg-gray-200'
                        : 'bg-black text-white hover:bg-gray-800'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart - ${(currentPrice * quantity).toFixed(2)}
                </button>
                <Link
                  to={`/customize/${product.id}`}
                  className={`px-6 py-4 rounded-2xl text-sm font-medium border transition-colors ${isDarkMode ? 'border-gray-600 text-gray-300 hover:border-gray-500 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'}`}
                >
                  Customize
                </Link>
              </div>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className={`w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <Truck className={`h-6 w-6 ${isDarkMode ? 'text-white' : 'text-gray-700'}`} />
                </div>
                <p className={`text-xs font-medium transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Free Shipping</p>
                <p className={`text-xs transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>On all orders</p>
              </div>
              <div className="text-center">
                <div className={`w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <Shield className={`h-6 w-6 ${isDarkMode ? 'text-white' : 'text-gray-700'}`} />
                </div>
                <p className={`text-xs font-medium transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>5-Year Warranty</p>
                <p className={`text-xs transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Full coverage</p>
              </div>
              <div className="text-center">
                <div className={`w-12 h-12 mx-auto mb-2 rounded-full flex items-center justify-center transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <RotateCcw className={`h-6 w-6 ${isDarkMode ? 'text-white' : 'text-gray-700'}`} />
                </div>
                <p className={`text-xs font-medium transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>30-Day Returns</p>
                <p className={`text-xs transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Money back</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Features */}
            <div className={`rounded-3xl p-6 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
              <div className="flex items-center gap-2 mb-4">
                <Zap className={`h-5 w-5 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} />
                <h3 className={`text-lg font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Key Features
                </h3>
              </div>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div className={`rounded-3xl p-6 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
              <div className="flex items-center gap-2 mb-4">
                <Award className={`h-5 w-5 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} />
                <h3 className={`text-lg font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Specifications
                </h3>
              </div>
              <dl className="space-y-3">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key}>
                    <dt className={`text-xs font-medium uppercase tracking-wide transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </dt>
                    <dd className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Customer Reviews Summary */}
            <div className={`rounded-3xl p-6 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
              <div className="flex items-center gap-2 mb-4">
                <Users className={`h-5 w-5 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} />
                <h3 className={`text-lg font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Customer Reviews
                </h3>
              </div>
              <div className="text-center mb-4">
                <div className={`text-3xl font-bold mb-1 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {product.rating}
                </div>
                <div className="flex items-center justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Based on {product.reviews} reviews
                </p>
              </div>
              
              {/* Rating Breakdown */}
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((stars) => (
                  <div key={stars} className="flex items-center gap-2">
                    <span className={`text-xs w-6 transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {stars}★
                    </span>
                    <div className={`flex-1 h-2 rounded-full transition-colors duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                      <div
                        className="h-full bg-yellow-400 rounded-full"
                        style={{ width: `${stars === 5 ? 70 : stars === 4 ? 20 : stars === 3 ? 5 : stars === 2 ? 3 : 2}%` }}
                      />
                    </div>
                    <span className={`text-xs w-8 transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {stars === 5 ? 87 : stars === 4 ? 25 : stars === 3 ? 6 : stars === 2 ? 4 : 2}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <h2 className={`text-3xl font-bold mb-8 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <Link
                key={item}
                to={`/product/${item + 10}`}
                className={`group rounded-3xl overflow-hidden transition-all duration-300 ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'}`}
              >
                <div className="aspect-square p-4">
                  <img
                    src="https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=300"
                    alt={`Related Product ${item}`}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="p-4 pt-0">
                  <h3 className={`font-medium mb-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Related Chair {item}
                  </h3>
                  <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    ${(599 + item * 100).toFixed(2)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;