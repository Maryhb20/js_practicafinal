import './styles/app.css';
import UI from './UI';

document.addEventListener('DOMContentLoaded', () => {
    const ui = new UI();
    ui.renderProducts();
});

document.getElementById('product-form')
    .addEventListener('submit', e => {
       const name = document.getElementById('name').value;
       const empresa = document.getElementById('empresa').value;
       const cantidad = document.getElementById('cantidad').value;
       const code = document.getElementById('code').value;
       const image = document.getElementById('image').files;

       const formData = new FormData();
       formData.append('image',image[0]);
       formData.append('name', name);
       formData.append('empresa', empresa);
       formData.append('cantidad', cantidad);
       formData.append('code', code);

       const ui = new UI();
       ui.addNewProduct(formData);
       ui.renderMessage('Nuevo Producto Agregado','success', 3000);

       e.preventDefault();
    });

    document.getElementById('products-cards')
        .addEventListener('click', e =>{
            if (e.target.classList.contains('delete')){
                const ui = new UI()
                ui.deleteProduct(e.target.getAttribute('_id')); 
                ui.renderMessage('Producto Eliminado', 'danger', 2000);               
            }
            e.preventDefault();
        });