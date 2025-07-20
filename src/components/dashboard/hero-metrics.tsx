import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, IndianRupee, Receipt, ShoppingCart } from 'lucide-react';

const metrics = [
  {
    icon: IndianRupee,
    title: 'Total Sales (Month)',
    value: '₹2,23,500',
    description: '+20.1% from last month',
    color: 'text-green-500',
  },
  {
    icon: Receipt,
    title: 'Receivables',
    value: '₹45,231',
    description: '4 Invoices due soon',
    color: 'text-orange-500',
  },
  {
    icon: ShoppingCart,
    title: 'Inventory Value',
    value: '₹1,89,700',
    description: 'Across 128 products',
    color: 'text-blue-500',
  },
  {
    icon: AlertTriangle,
    title: 'Low Stock Items',
    value: '2',
    description: 'Needs immediate attention',
    color: 'text-red-500',
  },
];

export function HeroMetrics() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
      {metrics.map((metric, index) => (
        <Card key={index} className="transition-all hover:shadow-lg hover:-translate-y-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
            <metric.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-headline">{metric.value}</div>
            <p className={`text-xs ${metric.color}`}>{metric.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
