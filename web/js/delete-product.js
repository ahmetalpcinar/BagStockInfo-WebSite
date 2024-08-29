document.addEventListener('DOMContentLoaded', function() {
    loadProducts();

    document.getElementById('product-delete-form').addEventListener('submit', function(event) {
        event.preventDefault();
        deleteProduct();
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

function deleteProduct() {
    const productId = document.getElementById('product-id').value;

    fetch(`/api/products/${productId}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('message').style.display = 'block';
            document.getElementById('message').textContent = 'Ürün başarıyla silindi!';
        } else {
            document.getElementById('message').style.display = 'block';
            document.getElementById('message').textContent = 'Ürün silinirken bir hata oluştu.';
        }
    })
    .catch(error => {
        console.error('Ürün silinirken hata oluştu:', error);
        document.getElementById('message').style.display = 'block';
        document.getElementById('message').textContent = 'Ürün silinirken bir hata oluştu.';
    });
}