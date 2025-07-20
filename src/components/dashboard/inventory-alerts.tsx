import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';
import Image from 'next/image';

const lowStockItems = [
  {
    name: 'Amul Butter 500g',
    stock: 12,
    img: 'https://placehold.co/40x40.png',
    dataAiHint: 'butter package',
  },
  {
    name: 'Parle-G Biscuits',
    stock: 3,
    img: 'https://placehold.co/40x40.png',
    dataAiHint: 'biscuit packet',
  },
];

export function InventoryAlerts() {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center gap-2">
        <AlertTriangle className="w-6 h-6 text-destructive" />
        <div>
          <CardTitle>Inventory Alerts</CardTitle>
          <CardDescription>Items running low on stock</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {lowStockItems.map((item) => (
            <li key={item.name} className="flex items-center gap-4">
              <Image src={item.img} alt={item.name} width={40} height={40} className="rounded-md" data-ai-hint={item.dataAiHint}/>
              <div className="flex-1">
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-destructive">{item.stock} remaining</p>
              </div>
              <Button size="sm" variant="outline">
                Re-stock
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
