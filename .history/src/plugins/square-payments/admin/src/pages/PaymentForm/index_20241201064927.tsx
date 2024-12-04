import React from 'react';
import { useMutation } from 'react-query';
import { Button, Box, Alert, Flex, Typography, TextInput, NumberInput, } from '@strapi/design-system';
import { createPayment } from '../../api/payments';

const PaymentForm: React.FC = () => {
  const [formData, setFormData] = React.useState({
    amount: '',
    currency: 'USD',
    sourceId: '',
    customerId: '',
  });

  const mutation = useMutation(createPayment);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box padding={8} background="neutral100">
      <form onSubmit={handleSubmit}>
        <Flex spacing={4}>
          <Typography variant="beta">Create New Payment</Typography>

          {mutation.isError && (
            <Alert variant="danger">
              An error occurred while creating the payment
            </Alert>
          )}

          <NumberInput
            name="amount"
            label="Amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />

          <TextInput
            name="currency"
            label="Currency"
            value={formData.currency}
            onChange={handleChange}
            required
          />

          <TextInput
            name="sourceId"
            label="Source ID"
            value={formData.sourceId}
            onChange={handleChange}
            required
          />

          <TextInput
            name="customerId"
            label="Customer ID (Optional)"
            value={formData.customerId}
            onChange={handleChange}
          />

          <Button
            type="submit"
            loading={mutation.isLoading}
            disabled={mutation.isLoading}
          >
            Create Payment
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default PaymentForm;