import Icon from 'react-native-vector-icons/FontAwesome';

export const stripePublishableKey =
  'pk_test_51MOK4WL2DfzLpMQBUHtgJEiSBWApQBOSXvqSBBc1xP94hUsOOLgn4lZh2uTu8LIGWfksmKxxzpHFwArD9B05ugAV004qE3XVJ7';

export const stripeSecretKey =
  'sk_test_51MOK4WL2DfzLpMQB2wePGddbVt1GumT9dIvTl41gIjcUHMauqpRxnGk6T3aaUgArj9eWlW696j46BNtc7WN7aQWA00dxJTrUHl';

export const BASE_URL = 'http://192.168.18.39:8000/';

export const tabs = [
  {
    name: 'Home',
    activeIcon: <Icon name="home" color="#fff" size={22} />,
    inactiveIcon: (
      <Icon name="home" color="#FEFEFE" size={22} style={{marginTop: -10}} />
    ),
  },
  {
    name: 'Chat',
    activeIcon: <Icon name="wechat" color="#fff" size={22} />,
    inactiveIcon: (
      <Icon name="wechat" color="#FEFEFE" size={22} style={{marginTop: -10}} />
    ),
  },
  {
    name: 'Settings',
    activeIcon: <Icon name="gear" color="#fff" size={22} />,
    inactiveIcon: (
      <Icon name="gear" color="#FEFEFE" size={22} style={{marginTop: -10}} />
    ),
  },
];
