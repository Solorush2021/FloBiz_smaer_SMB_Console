
'use client';

import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useOrders } from '@/hooks/use-orders';
import { Truck, PackageCheck } from 'lucide-react';

export default function OrdersPage() {
    const { orders, updateOrderProgress, updateOrderStatus } = useOrders();

    useEffect(() => {
        const interval = setInterval(() => {
            orders.forEach(order => {
                if (order.status !== 'Delivered' && order.progress < 100) {
                    const randomIncrement = Math.random() * 2 + 1; // Increment between 1 and 3
                    const newProgress = Math.min(100, order.progress + randomIncrement);
                    updateOrderProgress(order.id, newProgress);

                    if (newProgress >= 100) {
                        updateOrderStatus(order.id, 'Delivered');
                    } else if (newProgress > 50 && order.status === 'Processing') {
                        updateOrderStatus(order.id, 'Shipped');
                    }
                }
            });
        }, 5000); // Update every 5 seconds

        return () => clearInterval(interval);
    }, [orders, updateOrderProgress, updateOrderStatus]);


    const getStatusBadgeVariant = (status: string) => {
        switch (status) {
            case 'Processing': return 'secondary';
            case 'Shipped': return 'default';
            case 'Delivered': return 'default';
            default: return 'outline';
        }
    };

    const getStatusBadgeClass = (status: string) => {
        switch (status) {
            case 'Processing': return 'bg-yellow-500/20 text-yellow-700';
            case 'Shipped': return 'bg-blue-500/20 text-blue-700';
            case 'Delivered': return 'bg-green-500/20 text-green-700';
            default: return '';
        }
    };

    return (
        <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 animate-fade-in">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Truck className="w-6 h-6"/> Restock Orders</CardTitle>
                    <CardDescription>Track the status of your restock orders.</CardDescription>
                </CardHeader>
                <CardContent>
                    {orders.length > 0 ? (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Product</TableHead>
                                    <TableHead>Order ID</TableHead>
                                    <TableHead>Order Date</TableHead>
                                    <TableHead>Est. Delivery</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="w-[200px]">Progress</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {orders.map((order) => (
                                    <TableRow key={order.id}>
                                        <TableCell className="font-medium">{order.productName}</TableCell>
                                        <TableCell>{order.id}</TableCell>
                                        <TableCell>{order.orderDate}</TableCell>
                                        <TableCell>{order.estimatedDelivery}</TableCell>
                                        <TableCell>
                                            <Badge variant={getStatusBadgeVariant(order.status)} className={getStatusBadgeClass(order.status)}>
                                                {order.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            {order.status === 'Delivered' ? (
                                                <div className="flex items-center gap-2 text-green-600 animate-fade-in">
                                                    <PackageCheck className="h-5 w-5 animate-bounce" style={{animationDuration: '1.5s'}}/>
                                                    <span className="font-semibold">Order Received!</span>
                                                </div>
                                            ) : (
                                                <div className="flex items-center gap-2">
                                                    <Progress value={order.progress} className="h-2" />
                                                    <span>{order.progress.toFixed(1)}%</span>
                                                </div>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    ) : (
                        <div className="text-center py-12 text-muted-foreground">
                            <Truck className="mx-auto h-12 w-12" />
                            <h3 className="mt-4 text-lg font-semibold">No Orders Yet</h3>
                            <p className="mt-2 text-sm">When you re-stock items from your inventory, your orders will appear here.</p>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
