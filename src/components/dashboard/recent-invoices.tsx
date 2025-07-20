
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '../ui/button';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';
import { useState } from 'react';

const initialInvoices = [
    { invoice: 'INV001', customer: 'Shree Ganesh Traders', amount: '₹2,500.00', status: 'Paid', date: '2023-11-23' },
    { invoice: 'INV002', customer: 'Modern Enterprises', amount: '₹1,500.75', status: 'Pending', date: '2023-11-20' },
    { invoice: 'INV003', customer: 'Krishna Stores', amount: '₹350.00', status: 'Paid', date: '2023-11-19' },
    { invoice: 'INV004', customer: 'New India Grocers', amount: '₹4,500.00', status: 'Overdue', date: '2023-10-25' },
    { invoice: 'INV005', customer: 'Royal Furnitures', amount: '₹1,000.00', status: 'Paid', date: '2023-11-15' },
];

export function RecentInvoices() {
    const { toast } = useToast();
    const [invoices, setInvoices] = useState(initialInvoices);

    const handleMarkAsPaid = (invoiceId: string) => {
        setInvoices(invoices.map(inv =>
            inv.invoice === invoiceId ? { ...inv, status: 'Paid' } : inv
        ));
        toast({
            title: "Invoice Status Updated",
            description: `${invoiceId} has been marked as paid.`,
        });
    }
    
    const handleSendReminder = (invoiceId: string) => {
        toast({
            title: "Reminder Sent",
            description: `A reminder has been sent for invoice ${invoiceId}.`,
        });
    }

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <div>
                    <CardTitle>Recent Invoices</CardTitle>
                    <CardDescription>A list of your most recent invoices.</CardDescription>
                </div>
                <Button asChild variant="outline" size="sm">
                    <Link href="/invoices">View All</Link>
                </Button>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Invoice</TableHead>
                            <TableHead>Customer</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoices.map((item) => (
                            <TableRow key={item.invoice} className={`transition-colors hover:bg-muted/80 ${item.status === 'Paid' ? 'text-muted-foreground/70' : ''}`}>
                                <TableCell className="font-medium">{item.invoice}</TableCell>
                                <TableCell>{item.customer}</TableCell>
                                <TableCell>{item.amount}</TableCell>
                                <TableCell>
                                    <Badge variant={
                                        item.status === 'Paid' ? 'default' : item.status === 'Pending' ? 'secondary' : 'destructive'
                                    } className={
                                        item.status === 'Paid' ? 'bg-green-500/20 text-green-700 dark:bg-green-500/20 dark:text-green-400' :
                                        item.status === 'Pending' ? 'bg-orange-500/20 text-orange-700 dark:bg-orange-500/20 dark:text-orange-400' :
                                        'bg-red-500/20 text-red-700 dark:bg-red-500/20 dark:text-red-400'
                                    }>
                                        {item.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>{item.date}</TableCell>
                                <TableCell className="text-right">
                                    {item.status !== 'Paid' ? (
                                        <div className="flex gap-2 justify-end">
                                            <Button variant="outline" size="sm" onClick={() => handleMarkAsPaid(item.invoice)}>Mark as Paid</Button>
                                            <Button variant="ghost" size="sm" onClick={() => handleSendReminder(item.invoice)}>Send Reminder</Button>
                                        </div>
                                    ) : (
                                        <span className="text-sm text-green-500 font-medium">Cleared</span>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
