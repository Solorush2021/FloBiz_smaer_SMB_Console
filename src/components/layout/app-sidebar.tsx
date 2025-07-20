import Link from 'next/link';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  BarChart2,
  Boxes,
  Home,
  Receipt,
  Settings,
  HelpCircle,
  Truck,
} from 'lucide-react';
import { Logo } from '@/components/icons/logo';

const navItems = [
  { href: '/', icon: Home, label: 'Dashboard' },
  { href: '/invoices', icon: Receipt, label: 'Invoices' },
  { href: '/inventory', icon: Boxes, label: 'Inventory' },
  { href: '/orders', icon: Truck, label: 'Orders' },
  { href: '/analytics', icon: BarChart2, label: 'Analytics' },
];

const bottomNavItems = [
  { href: '/help', icon: HelpCircle, label: 'Help' },
  { href: '/settings', icon: Settings, label: 'Settings' },
];

export function AppSidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <TooltipProvider>
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <Link
            href="#"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Logo className="h-5 w-5 transition-all group-hover:scale-110" />
            <span className="sr-only">FloBiz Console</span>
          </Link>
          {navItems.map((item) => (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <item.icon className="h-5 w-5" />
                  <span className="sr-only">{item.label}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">{item.label}</TooltipContent>
            </Tooltip>
          ))}
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
          {bottomNavItems.map((item) => (
             <Tooltip key={item.href}>
             <TooltipTrigger asChild>
               <Link
                 href={item.href}
                 className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
               >
                 <item.icon className="h-5 w-5" />
                 <span className="sr-only">{item.label}</span>
               </Link>
             </TooltipTrigger>
             <TooltipContent side="right">{item.label}</TooltipContent>
           </Tooltip>
          ))}
        </nav>
      </TooltipProvider>
    </aside>
  );
}
