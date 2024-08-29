document.getElementById('product-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData();
    formData.append('name', document.getElementById('name').value);
    formData.append('category', document.getElementById('category').value);
    formData.append('price', document.getElementById('price').value);
    formData.append('currency', document.getElementById('currency').value);
    formData.append('stock', document.getElementById('stock').value);
    formData.append('image', document.getElementById('image').files[0]);
    formData.append('description', document.getElementById('description').value);

    fetch('/api/products', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert('Ürün başarıyla eklendi!');
            document.getElementById('product-form').reset();
        } else {
            alert('Ürün eklenirken bir hata oluştu.');
        }
    })
    .catch(error => console.error('Ürün eklenirken hata oluştu:', error));
});