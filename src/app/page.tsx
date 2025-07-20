import { AnalyticsChart } from '@/components/dashboard/analytics-chart';
import { HeroMetrics } from '@/components/dashboard/hero-metrics';
import { InventoryAlerts } from '@/components/dashboard/inventory-alerts';
import { RecentInvoices } from '@/components/dashboard/recent-invoices';

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8 animate-fade-in">
      <HeroMetrics />
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <AnalyticsChart />
        </div>
        <InventoryAlerts />
      </div>
      <RecentInvoices />
    </div>
  );
}
