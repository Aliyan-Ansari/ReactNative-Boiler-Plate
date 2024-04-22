import axios from 'axios';
import {BASE_URL} from '../constants/Constants';
class ApiMethods {
  static apiRequest(method, apiUrl, body = {}) {
    const url = BASE_URL + apiUrl;
    return new Promise((resolve, reject) => {
      axios({
        method,
        url,
        data: body,
      })
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  static get(url) {
    return this.apiRequest('GET', url);
  }

  static post(url, body) {
    return this.apiRequest('POST', url, body);
  }

  static put(url, body) {
    return this.apiRequest('PUT', url, body);
  }

  static delete(url) {
    return this.apiRequest('DELETE', url);
  }
}

export default ApiMethods;
