class ProductService {
    constructor(){
        this.URI = '/api/productos';
    }

    async getProduct(){
        const response = await fetch(this.URI);
        const products = await response.json();
        return products;
    }

    async postProduct(product){
        const res = await fetch(this.URI, {
            method: 'POST',
            body: product
        });
        const data = await res.json();
        console.log(data);
    }

    async deleteProduct(productId){
        const res = await fetch(`${this.URI}/${productId}`,{
            headers:{
                'Content-Type': 'application/json'
            },
            method: 'DELETE'
        });
        const data = await res.json;
    }

}

export default ProductService;