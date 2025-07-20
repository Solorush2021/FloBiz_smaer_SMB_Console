
import type { Metadata } from 'next';
import { AppSidebar } from '@/components/layout/app-sidebar';
import { Header } from '@/components/layout/header';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import './globals.css';
import { OrdersProvider } from '@/hooks/use-orders.tsx';

export const metadata: Metadata = {
  title: 'FloBiz Smart SMB Console',
  description: 'Next-generation web dashboard for Indian SMBs by FloBiz.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased')}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <OrdersProvider>
                <div className="flex min-h-screen w-full flex-col bg-muted/40">
                    <AppSidebar />
                    <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                    <Header />
                    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                        {children}
                    </main>
                    </div>
                </div>
                <Toaster />
            </OrdersProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
