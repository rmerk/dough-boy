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
          <Tabs defaultValue="payments" onValueChange={(value) => setSelectedTab(value)}>
            <TabsList>
              <TabsTrigger value="payments">Payments</TabsTrigger>
              <TabsTrigger value="create-payment">Create Payment</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="payments">
              <PaymentsList />
            </TabsContent>
            <TabsContent value="create-payment">
              <PaymentForm />
            </TabsContent>
            <TabsContent value="settings">
              <Settings />
            </TabsContent>
          </Tabs>
        </Box>
      </ContentLayout>
    </Layout>
  );
};

export default App;