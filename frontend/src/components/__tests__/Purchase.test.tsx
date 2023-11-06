import {render, screen} from '@testing-library/react';
import Purchase from '../Purchase';
import { Purchase as PurchaseType } from '../../types';

test('renders Purchase', () => {
    const purchase: PurchaseType = {
        purchase_identifier: "04/01",
        last_name: "Doe",
        date: "2023-04-01",
        product_id: 1213,
        quantity: 123,
        price: 321,
        currency: '"euro"',
    };
    render(<Purchase purchase={purchase} />);

    const element = screen.getByTestId("purchase-test");
    expect(element).toBeInTheDocument();
    });