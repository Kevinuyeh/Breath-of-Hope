import axios from 'axios';

class AuthService {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://boh-c5a2.onrender.com', // Backend base URL
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  // Login Method
  login(email, password) {
    return this.api.post('/login', {
      email,
      password,
    });
  }

  // Signup Method
  signUp(firstName, lastName, email, password, confirmPassword) {
    return this.api.post('/register', {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      confirm_password: confirmPassword,
    });
  }
}

export default new AuthService();
