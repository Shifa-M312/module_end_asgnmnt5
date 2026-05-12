const Contact = () => {
    return (
        <div className="max-w-2xl mx-auto p-10 bg-white shadow-lg mt-10 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <form className="space-y-4">
                <input type="text" placeholder="Name" className="w-full p-3 border rounded" required />
                <input type="email" placeholder="Email" className="w-full p-3 border rounded" required />
                <textarea placeholder="Message" className="w-full p-3 border rounded h-32" required></textarea>
                <button className="bg-amber-900 text-white px-6 py-2 rounded hover:bg-amber-800">Send Message</button>
            </form>
        </div>
    );
};
export default Contact;
