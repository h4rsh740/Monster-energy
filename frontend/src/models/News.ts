import mongoose from 'mongoose';

const newsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, default: Date.now },
    image: { type: String, required: false },
    tag: { type: String, required: true }
});

export default mongoose.models.News || mongoose.model('News', newsSchema);
