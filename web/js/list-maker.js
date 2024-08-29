document.addEventListener('DOMContentLoaded', loadProducts);

function loadProducts() {
    fetch('/api/products')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            return response.json();
        })
        .then(products => {
            const categories = {
                'cuzdanlar': document.getElementById('cuzdanlar-list'),
                'el-cantalari': document.getElementById('el-cantalari-list'),
                'bel-cantalari': document.getElementById('bel-cantalari-list'),
                'erkek-cantalari': document.getElementById('erkek-cantalari-list'),
                'kadin-cantalari': document.getElementById('kadin-cantalari-list'),
            };

            products.forEach(product => {
                const categoryElement = categories[product.category];
                if (categoryElement) {
                    const productDiv = document.createElement('div');
                    productDiv.className = 'product';
                    productDiv.innerHTML = `
                        <h3>${product.name}</h3>
                        <img src="/images/${product.image}" alt="${product.name}" style="width: 100px; float: right;">
                        <p>Fiyat: ${product.price} ${product.currency}</p>
                        <p>Stok: ${product.stock} Adet</p>
                        <p>Açıklama: ${product.description}</p>
                    `;
                    categoryElement.appendChild(productDiv);
                } else {
                    console.warn(`Category ${product.category} does not have a corresponding element.`);
                }
            });
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
}