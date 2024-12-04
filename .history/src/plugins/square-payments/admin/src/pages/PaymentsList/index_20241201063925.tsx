import React from 'react';
import { useQuery } from 'react-query';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
} from '@strapi/design-system/Table';
import { Typography } from '@strapi/design-system/Typography';
import { Loader } from '@strapi/design-system/Loader';
import { Alert } from '@strapi/design-system/Alert';
import { Box } from '@strapi/design-system/Box';
import { fetchPayments } from '../../api/payments';

const PaymentsList: React.FC = () => {
  const { data: payments, isLoading, error } = useQuery('payments', fetchPayments);

  if (isLoading) {
    return (
      <Box padding={8} background="neutral100">
        <Loader>Loading payments...</Loader>
      </Box>
    );
  }

  if (error) {
    return (
      <Alert variant="danger">
        An error occurred while fetching payments
      </Alert>
    );
  }

  return (
    <Box padding={4}>
      <Table colCount={4} rowCount={payments?.length ?? 0}>
        <Thead>
          <Tr>
            <Th>
              <Typography variant="sigma">ID</Typography>
            </Th>
            <Th>
              <Typography variant="sigma">Amount</Typography>
            </Th>
            <Th>
              <Typography variant="sigma">Status</Typography>
            </Th>
            <Th>
              <Typography variant="sigma">Date</Typography>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {payments?.map((payment: any) => (
            <Tr key={payment.id}>
              <Td>
                <Typography>{payment.id}</Typography>
              </Td>
              <Td>
                <Typography>
                  {payment.amount} {payment.currency}
                </Typography>
              </Td>
              <Td>
                <Typography>{payment.status}</Typography>
              </Td>
              <Td>
                <Typography>
                  {new Date(payment.created_at).toLocaleDateString()}
                </Typography>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default PaymentsList;