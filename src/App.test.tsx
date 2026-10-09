
/* @vitest-environment jsdom */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('EventHub application', () => {
  it('renders the main content successfully', () => {
    render(<App />);

    expect(screen.getByRole('main')).toBeTruthy();
  });
});
