const http = require('http');

http.get('http://localhost:5000/api/products', (resp) => {
    let data = '';

    resp.on('data', (chunk) => {
        data += chunk;
    });

    resp.on('end', () => {
        try {
            const products = JSON.parse(data);
            console.log('Total products:', products.length);
            const ids = products.map(p => p._id);
            console.log('IDs:', ids);

            const uniqueIds = new Set(ids);
            if (uniqueIds.size !== products.length) {
                console.log('DUPLICATE IDS FOUND!');
                // Find duplicates
                const seen = new Set();
                const duplicates = new Set();
                ids.forEach(id => {
                    if (seen.has(id)) duplicates.add(id);
                    seen.add(id);
                });
                console.log('Duplicate IDs:', Array.from(duplicates));
            } else {
                console.log('All IDs show as unique.');
            }
        } catch (e) {
            console.error('Error parsing JSON:', e.message);
            console.log('Raw data:', data);
        }
    });

}).on("error", (err) => {
    console.log("Error: " + err.message);
});
