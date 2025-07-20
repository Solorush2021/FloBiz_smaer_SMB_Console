
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
import { MoreHorizontal } from 'lucide-react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';

const invoices = [
    { invoice: 'INV001', customer: 'Shree Ganesh Traders', amount: '₹2,500.00', status: 'Paid', date: '2023-11-23' },
    { invoice: 'INV002', customer: 'Modern Enterprises', amount: '₹1,500.75', status: 'Pending', date: '2023-11-20' },
    { invoice: 'INV003', customer: 'Krishna Stores', amount: '₹350.00', status: 'Paid', date: '2023-11-19' },
    { invoice: 'INV004', customer: 'New India Grocers', amount: '₹4,500.00', status: 'Overdue', date: '2023-10-25' },
    { invoice: 'INV005', customer: 'Royal Furnitures', amount: '₹1,000.00', status: 'Paid', date: '2023-11-15' },
];

export function RecentInvoices() {
    const { toast } = useToast();

    return (
        <Card>
            <CardHeader>
                <CardTitle>Recent Invoices</CardTitle>
                <CardDescription>A list of your most recent invoices.</CardDescription>
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
                            <TableHead><span className="sr-only">Actions</span></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoices.map((item) => (
                            <TableRow key={item.invoice} className="transition-colors hover:bg-muted/80">
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
                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button aria-haspopup="true" size="icon" variant="ghost" className="transition-transform hover:scale-110">
                                                <MoreHorizontal className="h-4 w-4" />
                                                <span className="sr-only">Toggle menu</span>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem asChild><Link href="/invoices">View Details</Link></DropdownMenuItem>
                                            <DropdownMenuItem onClick={() => toast({ title: "Invoice Status Updated", description: `${item.invoice} has been marked as paid.` })}>Mark as Paid</DropdownMenuItem>
                                            <DropdownMenuItem onClick={() => toast({ title: "Reminder Sent", description: `A reminder has been sent for invoice ${item.invoice}.` })}>Send Reminder</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
