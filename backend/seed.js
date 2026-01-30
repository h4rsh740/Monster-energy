const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();

mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/monster_energy')
    .then(() => console.log('MongoDB Connected for Seeding'))
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

const products = [
    { name: 'Monster Original', size: '500ml', price: 130, category: 'Energy Drink' },
    { name: 'Monster Ultra', size: '500ml', price: 140, category: 'Zero Sugar' },
    { name: 'Mango Loco', size: '500ml', price: 150, category: 'Juice' },
    { name: 'Pipeline Punch', size: '500ml', price: 150, category: 'Juice' },
    { name: 'Pacific Punch', size: '500ml', price: 150, category: 'Juice' },
    { name: 'Assault', size: '500ml', price: 135, category: 'Energy Drink' }
];

const seedDB = async () => {
    try {
        await Product.deleteMany({});
        console.log('Cleared existing products...');

        const createdProducts = await Product.insertMany(products);
        console.log('Products seeded:', createdProducts.length);
        console.log(createdProducts);

        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedDB();
