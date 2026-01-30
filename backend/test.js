console.log('Test script running...');
try {
    const express = require('express');
    console.log('Express loaded successfully');
    const mongoose = require('mongoose');
    console.log('Mongoose loaded successfully');
    const cors = require('cors');
    console.log('Cors loaded successfully');
    const dotenv = require('dotenv');
    console.log('Dotenv loaded successfully');

    dotenv.config();
    console.log('Dotenv config done');

    require('./routes/productRoutes');
    console.log('Product Routes loaded');
    require('./routes/newsRoutes');
    console.log('News Routes loaded');
    require('./routes/authRoutes');
    console.log('Auth Routes loaded');
    require('./routes/newsletterRoutes');
    console.log('Newsletter Routes loaded');
} catch (error) {
    console.error('Failed to load express:', error);
}
