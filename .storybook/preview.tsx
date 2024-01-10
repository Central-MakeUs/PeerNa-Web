import type { Preview } from '@storybook/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import '../src/index.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        mobile2: {
          name: 'iPhone 13 / 13 pro',
          styles: {
            width: '390px',
            height: '844px',
          },
          type: 'mobile',
        },
      },
    },
  },
  decorators: [
    Story => (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    ),
  ],
};

export default preview;
