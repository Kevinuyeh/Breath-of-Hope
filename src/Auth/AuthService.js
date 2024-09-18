import axios from 'axios';

class AuthService {
  constructor() {
    
    this.apiURL = 'https://your-backend-api.com/api';
  }

  
  async signup(userData) {
    try {
      const response = await axios.post(`${this.apiURL}/signup`, userData);
      if (response.data.token) {
        this.storeToken(response.data.token); 
      }
      return response.data;
    } catch (error) {
      console.error('Error during signup:', error);
      throw error.response ? error.response.data : error;
    }
  }

  
  async login(credentials) {
    try {
      const response = await axios.post(`${this.apiURL}/login`, credentials);
      if (response.data.token) {
        this.storeToken(response.data.token); 
      }
      return response.data;
    } catch (error) {
      console.error('Error during login:', error);
      throw error.response ? error.response.data : error;
    }
  }

  
  storeToken(token) {
    localStorage.setItem('authToken', token);
  }

  
  getToken() {
    return localStorage.getItem('authToken');
  }

  
  logout() {
    localStorage.removeItem('authToken');
  }

  
  isAuthenticated() {
    return !!this.getToken();
  }
}

export default new AuthService();
