import axios from 'axios';

const apiService = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

apiService.interceptors.request.use(
  config => {
    const requestConfig = config;
    requestConfig.withCredentials = true;

    return requestConfig;
  },
  error => Promise.reject(error),
);

apiService.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.status === 401) {
      try {
        // Sign out the user
      } catch (err) {
        console.error('Error during signout: ', err);
      }
    }

    return Promise.reject(error);
  },
);

export default apiService;
