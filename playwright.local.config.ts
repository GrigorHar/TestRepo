import { PlaywrightTestConfig } from '@playwright/test';
import baseConfig from './playwright.config';  // Import base configuration

const config: PlaywrightTestConfig = {
  ...baseConfig,  // Extend base configuration
  use: {
    baseURL: 'http://localhost:5000',  // Local Report Portal URL
  },
};

export default config;