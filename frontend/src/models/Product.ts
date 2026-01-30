import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    size: { type: String, required: true },
    image: { type: String, required: false },
    category: { type: String, required: true, default: 'Energy Drink' }
});

export default mongoose.models.Product || mongoose.model('Product', productSchema);
