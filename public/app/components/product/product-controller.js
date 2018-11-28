import ProductService from "./product-service.js";


let _ps = new ProductService()
let _auth = {}

export default class ProductController {
  constructor(auth) {
    _auth = auth
  }
  showUser() {
    console.log(_auth.user)
  }
  createProduct() {
    if (!_auth.user._id) { return alert("login to create") }
  }
}