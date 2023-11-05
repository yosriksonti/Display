export interface Action {
    type: string;
    payload: any;
}

export interface Customer {
    id: number;
    title: string;
    firstname: string;
    lastname: string;
    postal_code: number;
    city: string;
    email: string;
}

export interface Purchase {
    purchase_identifier: string;
    last_name: string;
    date: string;
    product_id: number;
    quantity: number;
    price: number;
    currency: string;
}

export interface CustomerState {
    loading: boolean;
    data: Array<Customer>;
    error: string;
}

export interface PurchaseState {
    loading: boolean;
    data: Array<Purchase>;
    error: string;
}

export interface RootState {
    customer: CustomerState;
    purchase: PurchaseState;
}