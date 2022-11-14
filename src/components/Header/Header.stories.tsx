import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { Header, HeaderProps } from './Header';

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    viewport: {
      defaultViewport: 'responsive',
    },
  },
} as ComponentMeta<typeof Header>;

export const Default: ComponentStory<typeof Header> = (
  args: HeaderProps
): JSX.Element => <Header {...args} />;
Default.args = {
  route: 'home',
};

export const Mobile: ComponentStory<typeof Header> = (): JSX.Element => (
  <Header />
);

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
};

Mobile.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const el = canvas.getByLabelText('Open Menu') as HTMLButtonElement;
  await userEvent.click(el);
  const nav = canvas.getByRole('navigation') as HTMLElement;
  await waitFor(() => expect(nav).toHaveStyle({ right: '0px' }));
  const closeBtn = canvas.getByLabelText('Close Menu') as HTMLButtonElement;
  await userEvent.click(closeBtn);
  await waitFor(() => expect(nav).toHaveStyle({ right: '-320px' }));
};
