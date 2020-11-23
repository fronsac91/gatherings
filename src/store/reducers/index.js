import { combineReducers } from 'redux';

import loggedInUser from './loggedInUser';

// About
import title from './about/title';
import description from './about/description';
import category from './about/category';
import payment from './about/payment';
import reward from './about/reward';

// Responsible
import responsible from './coordinator/responsible';
import email from './coordinator/email';

// When
import startsOn from './when/startsOn';
import duration from './when/duration';

export default combineReducers({
  loggedInUser,

  title,
  description,
  category,
  payment,
  reward,

  responsible,
  email,

  startsOn,
  duration
});
