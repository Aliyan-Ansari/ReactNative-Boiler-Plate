import ENDPOINTS from './EndPoints';
import ApiMethods from './ApiMethods';

class ApiManager {
  static createStripeUser = async data => {
    const url = ENDPOINTS.CREATE_STRIPE_USER({email: 'younus@example.com'});
    return ApiMethods.post(url, data);
  };
}

export default ApiManager;
