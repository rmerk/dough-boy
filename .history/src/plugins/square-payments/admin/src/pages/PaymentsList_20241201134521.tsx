import { useQuery } from 'react-query';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
  Typography,
  Loader,
  Alert,
  Box
} from '@strapi/design-system';
import { fetchPayments } from '../api/payments';

const PaymentsList = () => {
  const { data, isLoading, error } = useQuery('payments', fetchPayments);
  const payments = data?.data ?? [];

  if (isLoading) {
    return (
      <Box padding={8} background="neutral100">
        <Loader>Loading payments...</Loader>
      </Box>
    );
  }

  if (error) {
    return (
      <Alert variant="danger" closeLabel={''}>
        An error occurred while fetching payments
      </Alert>
    );
  }

  return (
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
  );
};

export { PaymentsList };