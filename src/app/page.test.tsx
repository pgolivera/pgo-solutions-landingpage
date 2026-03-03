import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import Home from './page'

test('Home renders the title correctly', () => {
  render(<Home />)
  expect(screen.getByText(/PGO Landing Template/i)).toBeInTheDocument()
})
