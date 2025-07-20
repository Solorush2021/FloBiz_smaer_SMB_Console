import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, IndianRupee, Receipt, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

const metrics = [
  {
    icon: IndianRupee,
    title: 'Total Sales (Month)',
    value: '₹2,23,500',
    description: '+20.1% from last month',
    color: 'text-green-500',
    href: '/analytics',
  },
  {
    icon: Receipt,
    title: 'Receivables',
    value: '₹45,231',
    description: '4 Invoices due soon',
    color: 'text-orange-500',
    href: '/invoices',
  },
  {
    icon: ShoppingCart,
    title: 'Inventory Value',
    value: '₹1,89,700',
    description: 'Across 128 products',
    color: 'text-blue-500',
    href: '/inventory',
  },
  {
    icon: AlertTriangle,
    title: 'Low Stock Items',
    value: '2',
    description: 'Needs immediate attention',
    color: 'text-red-500',
    href: '/inventory',
  },
];

export function HeroMetrics() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
      {metrics.map((metric, index) => (
        <Link href={metric.href} key={index}>
          <Card className="transition-all hover:shadow-lg hover:-translate-y-1 bg-card/80 group h-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              <metric.icon className="h-4 w-4 text-muted-foreground transition-transform group-hover:rotate-12" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold font-headline transition-transform group-hover:scale-105">{metric.value}</div>
              <p className={`text-xs ${metric.color} transition-opacity group-hover:opacity-80`}>{metric.description}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
