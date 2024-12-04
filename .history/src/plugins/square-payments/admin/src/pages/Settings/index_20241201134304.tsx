import React from 'react';
import {
  Box,
  Flex,
  Field,
  Typography,
  TextInput,
  SingleSelect as Select,
  SingleSelectOption as Option,
  Button,
} from '@strapi/design-system';
import { useMutation } from 'react-query';
import { updateSettings } from '../../api/settings';

const Settings = () => {
  const [settings, setSettings] = React.useState({
    squareAccessToken: '',
    squareEnvironment: 'sandbox' as 'sandbox' | 'production',
    webhookSecret: '',
  });

  const mutation = useMutation(updateSettings);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(settings);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({
      ...settings,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box padding={8} background="neutral100">
      <form onSubmit={handleSubmit}>
        <Flex gap={4}>
          <Typography variant="beta">Square Payment Settings</Typography>

          <Field.Root>
            <Field.Label>Square Access Token</Field.Label>
            <TextInput
              name="squareAccessToken"
              value={settings.squareAccessToken}
              onChange={handleChange}
              type="password"
              required
            />
          </Field.Root>

          <Field.Root>
            <Field.Label>Environment</Field.Label>
            <Select
              name="squareEnvironment"
              value={settings.squareEnvironment}
              onChange={(value) =>
                setSettings({ ...settings, squareEnvironment: value as 'sandbox' | 'production' })
              }
            >
              <Option value="sandbox">Sandbox</Option>
              <Option value="production">Production</Option>
            </Select>
          </Field.Root>

          <Field.Root>
            <Field.Label>Webhook Secret</Field.Label>
            <TextInput
              name="webhookSecret"
              value={settings.webhookSecret}
              onChange={handleChange}
              type="password"
              required
            />
          </Field.Root>

          <Button
            type="submit"
            loading={mutation.isLoading}
            disabled={mutation.isLoading}
          >
            Save Settings
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export { Settings };