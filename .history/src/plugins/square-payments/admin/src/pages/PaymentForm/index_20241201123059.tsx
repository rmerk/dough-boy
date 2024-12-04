import React from 'react';
import { useMutation } from 'react-query';
import { Button, Box, Alert, Flex, Field, Typography, TextInput, NumberInput, } from '@strapi/design-system';
import { createPayment } from '../../api/payments';

const PaymentForm: React.FC = () => {
  const [formData, setFormData] = React.useState({
    amount: 0,
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
        <Flex gap={4}>
          <Typography variant="beta">Create New Payment</Typography>

          {mutation.isError && (
            <Alert variant="danger" closeLabel={''}>
              An error occurred while creating the payment
            </Alert>
          )}

          <Field.Root>
            <Field.Label>Amount</Field.Label>
            <NumberInput
              name="amount"
              value={formData.amount}
              onValueChange={(value) => setFormData({ ...formData, amount: value ?? 0 })}
              required
            />
          </Field.Root>

          <Field.Root>
            <Field.Label>Currency</Field.Label>
            <TextInput
              name="currency"
              value={formData.currency}
              onChange={handleChange}
              required
            />
          </Field.Root>

          <Field.Root>
            <Field.Label>Source ID</Field.Label>
            <TextInput
              name="sourceId"
              value={formData.sourceId}
              onChange={handleChange}
              required
            />
          </Field.Root>

          <Field.Root>
            <Field.Label>Customer ID (Optional)</Field.Label>
            <TextInput
              name="customerId"
              value={formData.customerId}
              onChange={handleChange}
            />
          </Field.Root>

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