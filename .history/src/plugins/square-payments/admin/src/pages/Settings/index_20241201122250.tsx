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

const Settings: React.FC = () => {
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

          <TextInput
            name="squareAccessToken"
            label="Square Access Token"
            value={settings.squareAccessToken}
            onChange={handleChange}
            type="password"
            required
          />

          <Field.Label>Environment</Field.Label>
          <Select
            name="squareEnvironment"
            value={settings.squareEnvironment}
            onChange={(value) =>
              setSettings({ ...settings, squareEnvironment: value })
            }
          >
            <Option value="sandbox">Sandbox</Option>
            <Option value="production">Production</Option>
          </Select>

          <TextInput
            name="webhookSecret"
            label="Webhook Secret"
            value={settings.webhookSecret}
            onChange={handleChange}
            type="password"
            required
          />

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

export default Settings;