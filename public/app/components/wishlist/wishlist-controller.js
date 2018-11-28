import WishlistService from "./wishlist-service.js";

let _ws = new WishlistService()
let _auth = {}


export default class WishlistController {
  constructor(auth) {
    _auth = auth
  }
  showUser() {
    console.log(_auth.user)
  }
}