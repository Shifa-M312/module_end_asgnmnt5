import { useEffect, useState } from 'react';
import API from '../api/axiosInstance';
import ProductCard from '../components/ProductCard';
import Recommendations from '../components/Recommendations';
import Footer from '../components/Footer';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch products from backend
        API.get('/products')
            .then(res => {
                setProducts(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Fetch error:", err);
                setLoading(false);
            });
    }, []);

    // Frontend filtering for the search requirement
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) return (
        <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-900"></div>
            <p className="ml-4 text-gray-600 font-bold">Loading Store...</p>
        </div>
    );

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 py-10">
                
                
                <div className="flex justify-center mb-12">
                    <input 
                        type="text" 
                        placeholder="Search for premium products..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full md:w-2/3 p-4 border border-gray-300 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-amber-800 transition-all bg-white"
                    />
                </div>
                
                
                <h2 className="text-2xl font-bold text-gray-800 mb-8 border-l-8 border-amber-900 pl-4">
                    Product Catalog
                </h2>
                
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20 bg-white rounded-2xl border-2 border-dashed border-gray-200">
                            <p className="text-gray-400 text-lg">No products found matching your search.</p>
                        </div>
                    )}
                </div>

                
                <div className="mt-24">
                    <Recommendations />
                </div>

            </div>
            
            
            <Footer />
        </div>
    );
};

export default Home;
