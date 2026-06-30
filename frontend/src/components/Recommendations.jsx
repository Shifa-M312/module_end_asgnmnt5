import { useEffect, useState } from 'react';
import API from '../api/axiosInstance';

const Recommendations = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    API.get('/analytics/recommendations')
      .then(res => setItems(res.data.data || []))
      .catch(() => {});
  }, []);

  if (items.length === 0) return null;

  return (
    <div className="bg-amber-50 p-8 rounded-2xl border border-amber-100 mb-10">
      <h2 className="text-xl font-bold mb-6 text-amber-900">
        ✨ AI Suggestions <span className="text-xs font-normal text-amber-600 ml-2">(RapidMiner Logic)</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map(item => (
          <div key={item._id} className="bg-white p-4 rounded-lg shadow-sm border border-amber-100 flex items-center gap-4">
           
            <div  className="w-16 h-16 bg-gray-50 rounded flex-shrink-0 flex items-center justify-center overflow-hidden border border-gray-100">
              <img 
                src={item.image || `https://placehold.co`} 
                alt={item.name} 
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://placehold.co`;
                }}
              />
            </div>
            <div>
              <h4 className="font-bold text-sm text-gray-800">{item.name}</h4>
              <p className="text-amber-800 font-bold text-sm">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
