import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs';
import { Box } from '@strapi/design-system';

import { PaymentsList } from './PaymentsList';
import { PaymentForm } from './PaymentsForm';
import { Settings } from './Settings';

const App = () => {
  const [selectedTab, setSelectedTab] = React.useState<string>('payments');

  return (
    <Box padding={8}>
      <Tabs defaultValue="payments" value={selectedTab} onValueChange={(value) => setSelectedTab(value)}>
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
  );
};

export { App };


import { Page } from '@strapi/strapi/admin';
import { Routes, Route } from 'react-router-dom';

