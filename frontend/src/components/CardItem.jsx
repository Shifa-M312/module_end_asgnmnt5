const CartItem = ({ item }) => {
    return (
        <div className="flex justify-between items-center border-b py-4">
            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
            <div className="flex-1 ml-4">
                <h4 className="font-bold">{item.name}</h4>
                <p className="text-gray-600">{item.quantity} x ${item.price}</p>
            </div>
            <p className="font-bold">${item.price * item.quantity}</p>
        </div>
    );
};
export default CartItem;
