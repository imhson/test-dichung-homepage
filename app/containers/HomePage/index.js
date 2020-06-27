/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import FormSection from './FormSection';
import Title from './Title';
import Form from './Form';
import AdvantageSection from './AdvantageSection';
import PromotionsSection from './PromotionsSection';
import AdsSection from './AdsSection';
import PopularDestinationsSection from './PopularDestinationsSection';

export function HomePage() {
  return (
    <div>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <div>
        <FormSection>
          <Title>Feel the freedom</Title>
          <Form />
        </FormSection>
        <AdvantageSection />
        <PromotionsSection />
        <AdsSection
          title="Members get 35% off"
          content="Create a Free DiChung account to unlock upto 35% off exclusive deals"
          buttonContent="Become a partner"
        />
        <PopularDestinationsSection />
      </div>
    </div>
  );
}
export default HomePage;
