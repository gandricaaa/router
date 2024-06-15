import axios from "axios";

class productService {
    static getAllProducts = () => axios.get('/products')
    static getProduct = (id) => axios.get(`/products/${id}`);
}
export default productService