import ProductController from "./components/product/product-controller.js";
import WishlistController from "./components/wishlist/wishlist-controller.js";
import AuthController from "./components/auth/auth-controller.js";
import AuthService from "./components/auth/auth-service.js";


//only every instatiate Auth Service once, pass refrenece to all controllers
let auth = new AuthService()


class App {
  constructor() {
    this.controllers = {
      authController: new AuthController(auth),
      productController: new ProductController(auth),
      wishlistController: new WishlistController(auth)
    }
  }
}

window.app = new App()