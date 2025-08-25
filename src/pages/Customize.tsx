import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';

// Mock data for customization options
const customizationOptions = {
  backrest: [
    { name: 'Standard Mesh', price: 0 },
    { name: 'Premium Fabric', price: 50 },
    { name: 'Genuine Leather', price: 150 },
  ],
  seat: [
    { name: 'Standard Foam', price: 0 },
    { name: 'Memory Foam', price: 75 },
  ],
  armrests: [
    { name: 'Fixed Armrests', price: 0 },
    { name: 'Adjustable Armrests', price: 100 },
  ],
  base: [
    { name: 'Nylon Base', price: 0 },
    { name: 'Aluminum Base', price: 120 },
  ],
  casters: [
    { name: 'Standard Casters', price: 0 },
    { name: 'Rollerblade Casters', price: 40 },
  ],
};

type Option = {
  name: string;
  price: number;
};

type Selections = {
  backrest: Option;
  seat: Option;
  armrests: Option;
  base: Option;
  casters: Option;
};

const Customize: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const basePrice = 500; // Base price of the chair

  const [selections, setSelections] = useState<Selections>({
    backrest: customizationOptions.backrest[0],
    seat: customizationOptions.seat[0],
    armrests: customizationOptions.armrests[0],
    base: customizationOptions.base[0],
    casters: customizationOptions.casters[0],
  });

  const handleOptionChange = (part: keyof Selections, option: Option) => {
    setSelections((prev) => ({ ...prev, [part]: option }));
  };

  const totalOptionsPrice = useMemo(() => {
    return Object.values(selections).reduce((total, option) => total + option.price, 0);
  }, [selections]);

  const totalPrice = basePrice + totalOptionsPrice;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src="https://via.placeholder.com/600x600" alt="Chair" className="w-full rounded-lg shadow-lg" />
          <h1 className="text-3xl font-bold mt-4">SuperChair Model {id}</h1>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Customize Your Chair</h2>
          
          {Object.entries(customizationOptions).map(([part, options]) => (
            <div key={part} className="mb-6">
              <h3 className="text-xl font-semibold capitalize mb-2">{part}</h3>
              <div className="flex flex-col space-y-2">
                {options.map((option) => (
                  <label key={option.name} className="flex items-center p-3 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name={part}
                      value={option.name}
                      checked={selections[part as keyof Selections].name === option.name}
                      onChange={() => handleOptionChange(part as keyof Selections, option)}
                      className="form-radio h-5 w-5 text-indigo-600"
                    />
                    <span className="ml-3 text-lg">{option.name}</span>
                    <span className="ml-auto text-lg font-medium">+${option.price}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-8 p-6 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Price Breakdown</h3>
            <div className="flex justify-between mb-2">
              <span>Base Price</span>
              <span>${basePrice}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Options</span>
              <span>${totalOptionsPrice}</span>
            </div>
            <hr className="my-2 border-gray-300" />
            <div className="flex justify-between text-2xl font-bold">
              <span>Total Price</span>
              <span>${totalPrice}</span>
            </div>
          </div>

          <button className="w-full mt-8 bg-indigo-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Customize;