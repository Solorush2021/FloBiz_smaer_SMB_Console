
'use client';

import { File, ListFilter, MoreHorizontal, PlusCircle, Search } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"

const invoices = [
    { invoice: 'INV001', customer: 'Shree Ganesh Traders', amount: '₹2,500.00', status: 'Paid', date: '2023-11-23' },
    { invoice: 'INV002', customer: 'Modern Enterprises', amount: '₹1,500.75', status: 'Pending', date: '2023-11-20' },
    { invoice: 'INV003', customer: 'Krishna Stores', amount: '₹350.00', status: 'Paid', date: '2023-11-19' },
    { invoice: 'INV004', customer: 'New India Grocers', amount: '₹4,500.00', status: 'Overdue', date: '2023-10-25' },
    { invoice: 'INV005', customer: 'Royal Furnitures', amount: '₹1,000.00', status: 'Paid', date: '2023-11-15' },
    { invoice: 'INV006', customer: 'Gupta & Sons', amount: '₹7,200.00', status: 'Pending', date: '2023-11-28' },
    { invoice: 'INV007', customer: 'Daily Needs Mart', amount: '₹950.50', status: 'Paid', date: '2023-11-27' },
    { invoice: 'INV008', customer: 'Priya General Store', amount: '₹3,150.00', status: 'Overdue', date: '2023-11-02' },
];

export default function InvoicesPage() {
  const { toast } = useToast();
  return (
    <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 animate-fade-in">
          <Tabs defaultValue="all">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="paid">Paid</TabsTrigger>
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="overdue">Overdue</TabsTrigger>
              </TabsList>
              <div className="ml-auto flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-8 gap-1">
                      <ListFilter className="h-3.5 w-3.5" />
                      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Filter
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked>
                      Date
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Amount</DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button size="sm" variant="outline" className="h-8 gap-1">
                  <File className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Export
                  </span>
                </Button>
                <Button size="sm" className="h-8 gap-1">
                  <PlusCircle className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    New Invoice
                  </span>
                </Button>
              </div>
            </div>
            <TabsContent value="all">
            <Card>
                <CardHeader>
                  <CardTitle>Invoices</CardTitle>
                  <CardDescription>
                    Manage your invoices and view their status.
                  </CardDescription>
                  <div className="relative mt-4">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search invoices..." className="pl-8" />
                  </div>
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
                        <TableHead>
                          <span className="sr-only">Actions</span>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {invoices.map((item) => (
                        <TableRow key={item.invoice}>
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
                                <Button
                                  aria-haspopup="true"
                                  size="icon"
                                  variant="ghost"
                                >
                                  <MoreHorizontal className="h-4 w-4" />
                                  <span className="sr-only">Toggle menu</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>View Details</DropdownMenuItem>
                                <DropdownMenuItem onClick={() => toast({ title: "Invoice Status Updated", description: `${item.invoice} has been marked as paid.` })}>Mark as Paid</DropdownMenuItem>
                                <DropdownMenuItem>Send Reminder</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
                <Pagination className="p-4 border-t">
                    <PaginationContent>
                        <PaginationItem>
                        <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                        <PaginationLink href="#" isActive>
                            2
                        </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                        <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                        <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
  );
}
