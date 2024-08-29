document.addEventListener('DOMContentLoaded', function() {
    loadProducts();

    document.getElementById('stock-update-form').addEventListener('submit', function(event) {
        event.preventDefault();
        updateStock();
    });
});

function loadProducts() {
    fetch('/api/products')
        .then(response => response.json())
        .then(products => {
            const productSelect = document.getElementById('product-id');
            products.forEach(product => {
                const option = document.createElement('option');
                option.value = product.name;
                option.textContent = `${product.name} (${product.category}) - Stok: ${product.stock}`;
                productSelect.appendChild(option);
            });
        });
}

function updateStock() {
    const productId = document.getElementById('product-id').value;
    const newStock = document.getElementById('product-stock').value;

    fetch(`/api/products/${productId}/stock`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ stock: newStock })
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('message').style.display = 'block';
            document.getElementById('message').textContent = 'Stok başarıyla güncellendi!';
        } else {
            document.getElementById('message').style.display = 'block';
            document.getElementById('message').textContent = 'Stok güncellenirken bir hata oluştu.';
        }
    })
    .catch(error => {
        console.error('Stok güncellenirken hata oluştu:', error);
        document.getElementById('message').style.display = 'block';
        document.getElementById('message').textContent = 'Stok güncellenirken bir hata oluştu.';
    });
}