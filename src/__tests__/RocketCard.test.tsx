import { render, screen } from '@testing-library/react';
import { RocketCard } from '@/components/custom/RocketCard';
import { Rocket } from '@/types/rocket';

const mockRocket: Rocket = {
  id: '1',
  name: 'Falcon 9',
  type: 'FT',
  active: true,
  stages: 2,
  boosters: 0,
  cost_per_launch: 50000000,
  success_rate_pct: 98,
  first_flight: '2010-06-04',
  country: 'USA',
  company: 'SpaceX',
  description: 'A reliable workhorse of SpaceX.'
};

describe('RocketCard', () => {
  it('renders rocket information correctly', () => {
    render(<RocketCard rocket={mockRocket} />);
    const activeLine = screen.getByText((content, element) =>
      element?.tagName.toLowerCase() === 'p' &&
      element.textContent === '🟢 Active: Yes'
    );

    expect(screen.getByText(/Falcon 9/i)).toBeInTheDocument();
    expect(screen.getByText(/FT/i)).toBeInTheDocument();
    expect(activeLine).toBeInTheDocument();
    expect(screen.getByText(/A reliable workhorse of SpaceX./i)).toBeInTheDocument();
    expect(screen.getByText((_, element) =>
      element?.textContent === '🌍 Country: USA'
    )).toBeInTheDocument();
  });
});
