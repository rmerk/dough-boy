import React from 'react';
import {
  Layout,
  HeaderLayout,
  ContentLayout,
} from '@strapi/design-system';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs';
import { Box } from '@strapi/design-system';

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
          <Tabs
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
          </Tabs>
        </Box>
      </ContentLayout>
    </Layout>
  );
};

export default App;