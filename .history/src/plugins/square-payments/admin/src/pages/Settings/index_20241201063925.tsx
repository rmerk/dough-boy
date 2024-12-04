import React from 'react';
import {
  Box,
  Stack,
  Typography,
  TextInput,
  Select,
  Option,
  Button,
} from '@strapi/design-system';
import { useMutation } from 'react-query';
import { updateSettings } from '../../api/settings';

const Settings: React.FC = () => {
  const [settings, setSettings] = React.useState({
    squareAccessToken: '',
    squareEnvironment: 'sandbox',
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
        <Stack spacing={4}>
          <Typography variant="beta">Square Payment Settings</Typography>

          <TextInput
            name="squareAccessToken"
            label="Square Access Token"
            value={settings.squareAccessToken}
            onChange={handleChange}
            type="password"
            required
          />

          <Select
            name="squareEnvironment"
            label="Environment"
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
        </Stack>
      </form>
    </Box>
  );
};

export default Settings;