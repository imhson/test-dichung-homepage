/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  promotions: {
    id: `${scope}.promotions`,
    defaultMessage: 'Promotions',
  },
  beapartner: {
    id: `${scope}.beapartner`,
    defaultMessage: 'Become a Partner',
  },
  account: {
    id: `${scope}.account`,
    defaultMessage: 'Account',
  },
});
