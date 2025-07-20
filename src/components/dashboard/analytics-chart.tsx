'use client';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartTooltipContent } from '@/components/ui/chart';

const chartData = [
  { month: 'January', sales: 1860 },
  { month: 'February', sales: 3050 },
  { month: 'March', sales: 2370 },
  { month: 'April', sales: 730 },
  { month: 'May', sales: 2090 },
  { month: 'June', sales: 2140 },
];

export function AnalyticsChart() {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>Sales Analytics</CardTitle>
        <CardDescription>An overview of your monthly sales performance.</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-4">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} fontSize={12} />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              fontSize={12}
              tickFormatter={(value) => `₹${Number(value) / 1000}k`}
            />
            <Tooltip
              cursor={{ fill: 'hsl(var(--accent))', opacity: 0.2, radius: 'var(--radius)' }}
              content={<ChartTooltipContent
                formatter={(value) => `₹${value.toLocaleString()}`}
                indicator='dot'
              />}
            />
            <Bar dataKey="sales" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
