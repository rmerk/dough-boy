import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  Layout,
  HeaderLayout,
  ContentLayout,
} from '@strapi/design-system/Layout';
import { Tab, TabGroup, TabPanel, TabPanels } from '@strapi/design-system/Tabs';
import { Box } from '@strapi/design-system/Box';

import PaymentsList from '../PaymentsList';
import PaymentForm from '../PaymentForm';
import Settings from '../Settings';

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  return (
    <Layout>
      <HeaderLayout
        title="Square Payments"
        subtitle="Manage your Square payments integration"
        as="h2"
      />
      <ContentLayout>
        <Box padding={8}>
          <TabGroup
            label="Square Payments Tabs"
            onTabChange={setSelectedTab}
            selectedTab={selectedTab}
          >
            <Tab>Payments</Tab>
            <Tab>Create Payment</Tab>
            <Tab>Settings</Tab>
            <TabPanels>
              <TabPanel>
                <PaymentsList />
              </TabPanel>
              <TabPanel>
                <PaymentForm />
              </TabPanel>
              <TabPanel>
                <Settings />
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </Box>
      </ContentLayout>
    </Layout>
  );
};

export default App;