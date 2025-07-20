
'use client';

import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { AppSidebar } from './app-sidebar';
import { Header } from './header';

const notifications = [
    { title: "🚚 Stock Delivered!", description: "Your order for 'Tata Salt 1kg' has arrived." },
    { title: "⚠️ Low Stock Alert", description: "'Amul Butter 500g' is running low. Only 12 units left." },
    { title: "💰 New Large Order", description: "You've received a new order worth ₹8,500 from Modern Enterprises." },
    { title: "❗ Invoice Overdue", description: "Reminder: Invoice INV004 for ₹4,500.00 is now overdue." },
];

export function AppContainer({ children }: { children: React.ReactNode }) {
    const { toast } = useToast();

    useEffect(() => {
      const intervalId = setInterval(() => {
          const randomNotification = notifications[Math.floor(Math.random() * notifications.length)];
          toast(randomNotification);
      }, 10000); // 10 seconds
  
      return () => clearInterval(intervalId);
    }, [toast]);
  
    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <AppSidebar />
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <Header />
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                {children}
            </main>
            </div>
        </div>
    );
  }
  
