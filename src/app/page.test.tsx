import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import Home from './page'

test('Home renders the title correctly', () => {
  render(<Home />)
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Soluciones digitales/i)
})
