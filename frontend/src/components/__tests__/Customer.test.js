import {render, screen} from '@testing-library/react';
import Customer from '../Customer';

test('renders menu', () => {
    const customer = {
        id: 1,
        title: "test-title",
        firstname: "test-firstname",
        lastname: "test-lastname",
        postal_code: 1020,
        city: "test-city",
        email: "test-email",
    };
    render(<Customer customer={customer} />);

    const element = screen.getByTestId("customer-test");
    expect(element).toBeInTheDocument();
    });