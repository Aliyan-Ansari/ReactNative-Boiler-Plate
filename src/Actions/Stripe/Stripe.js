import {BASE_URL} from '../../constants/Constants';
import apiService from '../../services/Axios';

export const checkAPI = async () =>
  await apiService({
    url: 'checkServer',
    method: 'POST',
    baseURL: BASE_URL,
  })
    .then(res => res)
    .catch(err => err);

export const createStripeUser = async ({data}) =>
  apiService({
    url: 'api/stripe/create-user',
    method: 'POST',
    baseURL: BASE_URL,
    data,
  })
    .then(res => res)
    .catch(err => err);
