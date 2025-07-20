
'use client';

import { Bar, BarChart, CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart';
import { HeroMetrics } from '@/components/dashboard/hero-metrics';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Circle, TrendingUp } from 'lucide-react';

const salesData = [
    { month: 'Jan', sales: 1860, revenue: 800 },
    { month: 'Feb', sales: 3050, revenue: 1200 },
    { month: 'Mar', sales: 2370, revenue: 980 },
    { month: 'Apr', sales: 730, revenue: 600 },
    { month: 'May', sales: 2090, revenue: 1100 },
    { month: 'Jun', sales: 2140, revenue: 1300 },
    { month: 'Jul', sales: 2540, revenue: 1450 },
    { month: 'Aug', sales: 2900, revenue: 1600 },
    { month: 'Sep', sales: 3200, revenue: 1700 },
    { month: 'Oct', sales: 3500, revenue: 1850 },
    { month: 'Nov', sales: 3800, revenue: 2000 },
    { month: 'Dec', sales: 4200, revenue: 2200 },
];
  
const salesChartConfig = {
  sales: {
    label: 'Sales',
    color: 'hsl(var(--primary))',
  },
} satisfies ChartConfig;

const revenueChartConfig = {
    revenue: {
      label: 'Revenue',
      color: 'hsl(var(--chart-2))',
    },
    sales: {
      label: 'Sales',
      color: 'hsl(var(--chart-1))',
    },
  } satisfies ChartConfig;

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-8 animate-fade-in p-4 sm:px-6 sm:py-0">
        <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold font-headline">Analytics Dashboard</h1>
            <Select defaultValue="30">
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Last 30 days" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="7">Last 7 days</SelectItem>
                    <SelectItem value="30">Last 30 days</SelectItem>
                    <SelectItem value="90">Last 90 days</SelectItem>
                    <SelectItem value="365">Last 1 Year</SelectItem>
                </SelectContent>
            </Select>
        </div>

      <HeroMetrics />

      <div className="grid gap-4 md:gap-8 lg:grid-cols-2">
        <Card className="h-full flex flex-col">
          <CardHeader>
            <CardTitle>Sales Overview</CardTitle>
            <CardDescription>Monthly sales figures.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 pb-4">
            <ChartContainer config={salesChartConfig} className="h-[300px] w-full">
              <BarChart data={salesData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} fontSize={12} />
                <YAxis tickLine={false} axisLine={false} tickMargin={8} fontSize={12} tickFormatter={(value) => `₹${Number(value) / 1000}k`} />
                <ChartTooltip content={<ChartTooltipContent formatter={(value) => `₹${value.toLocaleString()}`} />} />
                <Bar dataKey="sales" fill="var(--color-sales)" radius={[4, 4, 0, 0]} animationDuration={900} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="h-full flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div>
                    <CardTitle>Revenue vs Sales</CardTitle>
                    <CardDescription>Comparison over the year.</CardDescription>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Circle className="h-2 w-2 fill-green-500 text-green-500" /> Revenue
                    <Circle className="h-2 w-2 fill-primary text-primary" /> Sales
                </div>
            </CardHeader>
            <CardContent className="flex-1 pb-4">
                <ChartContainer config={revenueChartConfig} className="h-[300px] w-full">
                <LineChart data={salesData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} fontSize={12}/>
                    <YAxis tickFormatter={(value) => `₹${Number(value) / 1000}k`} tickLine={false} axisLine={false} tickMargin={8} fontSize={12} />
                    <ChartTooltip content={<ChartTooltipContent hideLabel indicator="line" formatter={(value, name) => `${name.charAt(0).toUpperCase() + name.slice(1)}: ₹${value.toLocaleString()}`} />} />
                    <Line type="monotone" dataKey="revenue" stroke="var(--color-revenue)" strokeWidth={2} dot={false} animationDuration={900} />
                    <Line type="monotone" dataKey="sales" stroke="var(--color-sales)" strokeWidth={2} dot={false} animationDuration={900} animationBegin={300} />
                </LineChart>
                </ChartContainer>
            </CardContent>
            </Card>
      </div>

      <Card>
        <CardHeader>
            <CardTitle>Top Selling Products</CardTitle>
            <CardDescription>Your best performing products this month.</CardDescription>
        </CardHeader>
        <CardContent>
            <ul className="space-y-4">
                <li className="flex items-center">
                    <TrendingUp className="h-5 w-5 text-green-500 mr-4" />
                    <span className="font-medium">Aashirvaad Atta 10kg</span>
                    <span className="ml-auto text-muted-foreground">212 units sold</span>
                </li>
                <li className="flex items-center">
                    <TrendingUp className="h-5 w-5 text-green-500 mr-4" />
                    <span className="font-medium">Tata Salt 1kg</span>
                    <span className="ml-auto text-muted-foreground">189 units sold</span>
                </li>
                <li className="flex items-center">
                    <TrendingUp className="h-5 w-5 text-green-500 mr-4" />
                    <span className="font-medium">Saffola Gold Oil 5L</span>
                    <span className="ml-auto text-muted-foreground">156 units sold</span>
                </li>
            </ul>
        </CardContent>
      </Card>
    </div>
  );
}
