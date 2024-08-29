document.addEventListener('DOMContentLoaded', function() {
    loadProducts();

    document.getElementById('product-update-form').addEventListener('submit', function(event) {
        event.preventDefault();
        updateProduct();
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
                option.textContent = product.name;
                productSelect.appendChild(option);
            });
        });
}

function updateProduct() {
    const productId = document.getElementById('product-id').value;
    const newName = document.getElementById('product-name').value;
    const newPrice = document.getElementById('product-price').value;
    const newDescription = document.getElementById('product-description').value;

    fetch(`/api/products/${productId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: newName, price: newPrice, description: newDescription })
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('message').style.display = 'block';
            document.getElementById('message').textContent = 'Ürün başarıyla güncellendi!';
        } else {
            document.getElementById('message').style.display = 'block';
            document.getElementById('message').textContent = 'Ürün güncellenirken bir hata oluştu.';
        }
    })
    .catch(error => {
        console.error('Ürün güncellenirken hata oluştu:', error);
        document.getElementById('message').style.display = 'block';
        document.getElementById('message').textContent = 'Ürün güncellenirken bir hata oluştu.';
    });
}