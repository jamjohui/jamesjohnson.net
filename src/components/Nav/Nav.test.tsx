import { render, screen } from '@testing-library/react';

import { Nav } from './Nav';

const closeFunc = jest.fn();

describe('<Nav />', () => {
  describe('with close button', () => {
    beforeEach(() =>
      render(
        <Nav onClose={closeFunc} title="Test Nav">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </Nav>
      )
    );

    it('render a title', () => {
      const title = screen.getByRole('heading');
      expect(title).toHaveTextContent('Test Nav');
    });

    it('renders its links', () => {
      const links = screen.getAllByRole('link').map((item) => item.innerHTML);
      expect(links).toEqual(['Home', 'About', 'Contact']);
    });

    it('renders a close button when `onClose` is defined', () => {
      const btn = screen.getByLabelText('Close Menu', {
        selector: 'button',
      });
      expect(btn).toBeInTheDocument();
    });

    it('calls `onClose` when the user clicks the close button', () => {
      const btn = screen.getByLabelText('Close Menu', {
        selector: 'button',
      });
      btn.click();
      expect(closeFunc).toHaveBeenCalled();
    });
  });

  describe('without close button', () => {
    beforeEach(() => {
      render(
        <Nav title="Test Nav">
          <li>
            <a href="#home">Home</a>
          </li>
        </Nav>
      );
    });

    it('it does not render a close button when `onClose` is undefined', () => {
      const btn = screen.queryByLabelText('Close Menu', {
        selector: 'button',
      });
      expect(btn).not.toBeInTheDocument();
    });
  });
});
