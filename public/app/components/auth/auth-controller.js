
let _authService = {}

//draw when user is not logged in
function drawUserLogin() {
  console.log('not logged In')
  document.getElementById('auth').innerHTML = `
  <form onsubmit="app.controllers.authController.login(event)">
      <input type="email" name="email" placeholder="email" required>
      <input type="password" name="password" placeholder="password" required>
      <button type="submit">Login</button>
    </form>
    <p onclick="app.controllers.authController.showRegister()">Click to Register</p>
    `

}
//draw when user is logged in
function drawLogout() {
  console.log('logged in')
  document.getElementById('auth').innerHTML = `<button onclick="app.controllers.authController.logout()">logout</button>`

}

function _drawRegister() {
  document.getElementById('auth').innerHTML = `
  <form onsubmit="app.controllers.authController.register(event)">
      <input type="email" name="email" placeholder="email" required>
      <input type="password" name="password" placeholder="password" required>
      <button type="submit">Register</button>
    </form>
    <p onclick="app.controllers.authController.showLogin()">Existing User?</p>
    `
}

export default class AuthController {
  constructor(auth) {
    _authService = auth
    _authService.authenticate(drawLogout, drawUserLogin)
  }
  login(event) {
    event.preventDefault();
    let creds = {
      email: event.target.email.value,
      password: event.target.password.value
    }
    _authService.login(creds, drawLogout)
  }
  register(event) {
    event.preventDefault();
    let creds = {
      email: event.target.email.value,
      password: event.target.password.value
    }
    _authService.register(creds, drawLogout)
  }
  logout() {
    _authService.logout(drawUserLogin)
  }
  showRegister() {
    _drawRegister()
  }
  showLogin() {
    drawUserLogin()
  }
}