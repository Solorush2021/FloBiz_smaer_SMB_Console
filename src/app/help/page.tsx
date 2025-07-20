
'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { LifeBuoy, MessageSquare, Search } from 'lucide-react';
import { CustomerSupportChat } from '@/components/help/customer-support-chat';

const faqs = [
  {
    question: 'How do I create a new invoice?',
    answer: 'Navigate to the Invoices page from the sidebar and click the "New Invoice" button. Fill in the required details for your customer, add line items, and then save or send the invoice.',
  },
  {
    question: 'Can I track my inventory levels?',
    answer: 'Yes, the Inventory page provides a complete overview of all your products. It shows current stock levels, highlights items that are low in stock, and allows you to add new products.',
  },
  {
    question: 'How are my sales analytics calculated?',
    answer: 'The Analytics page shows your total sales, revenue, and top-selling products over different time periods. The data is aggregated from all your paid invoices.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We use industry-standard encryption and security practices to ensure your business data is always safe and protected. You can manage your password in the Settings page.',
  },
];

export default function HelpPage() {
  return (
    <div className="grid flex-1 items-start gap-8 p-4 sm:px-6 md:gap-8 lg:grid-cols-3 xl:grid-cols-3 animate-fade-in">
      <div className="lg:col-span-2">
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><LifeBuoy className="w-6 h-6"/> Frequently Asked Questions</CardTitle>
                <CardDescription>Find answers to common questions about using the FloBiz console.</CardDescription>
                <div className="relative mt-4">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search help topics..." className="pl-8" />
                </div>
            </CardHeader>
            <CardContent>
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
                ))}
            </Accordion>
            </CardContent>
        </Card>
      </div>
      <div className="lg:col-span-1">
        <CustomerSupportChat />
      </div>
    </div>
  );
}
