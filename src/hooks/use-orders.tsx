
'use client';

import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';

export interface Order {
    id: string;
    productName: string;
    orderDate: string;
    estimatedDelivery: string;
    status: 'Processing' | 'Shipped' | 'Delivered';
    progress: number;
}

interface OrdersContextType {
    orders: Order[];
    addOrder: (order: Order) => void;
    updateOrderProgress: (orderId: string, progress: number) => void;
    updateOrderStatus: (orderId: string, status: Order['status']) => void;
}

const OrdersContext = createContext<OrdersContextType | undefined>(undefined);

const initialOrders: Order[] = [
    {
        id: 'ORD736192',
        productName: 'Tata Salt 1kg',
        orderDate: '2024-05-20',
        estimatedDelivery: '2024-05-25',
        status: 'Shipped',
        progress: 75,
    },
    {
        id: 'ORD112345',
        productName: 'Saffola Gold Oil 5L',
        orderDate: '2024-05-22',
        estimatedDelivery: '2024-05-27',
        status: 'Processing',
        progress: 30,
    }
];


export const OrdersProvider = ({ children }: { children: ReactNode }) => {
    const [orders, setOrders] = useState<Order[]>(initialOrders);

    const addOrder = (order: Order) => {
        setOrders(prevOrders => [order, ...prevOrders]);
    };

    const updateOrderProgress = useCallback((orderId: string, progress: number) => {
        setOrders(prevOrders => 
            prevOrders.map(o => o.id === orderId ? { ...o, progress } : o)
        );
    }, []);

    const updateOrderStatus = useCallback((orderId: string, status: Order['status']) => {
        setOrders(prevOrders =>
            prevOrders.map(o => o.id === orderId ? { ...o, status } : o)
        );
    }, []);

    return (
        <OrdersContext.Provider value={{ orders, addOrder, updateOrderProgress, updateOrderStatus }}>
            {children}
        </OrdersContext.Provider>
    );
};

export const useOrders = () => {
    const context = useContext(OrdersContext);
    if (context === undefined) {
        throw new Error('useOrders must be used within an OrdersProvider');
    }
    return context;
};
