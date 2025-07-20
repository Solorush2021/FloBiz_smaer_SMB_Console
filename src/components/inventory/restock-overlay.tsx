
'use client';

import { Truck } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface RestockOverlayProps {
    productName: string;
}

export function RestockOverlay({ productName }: RestockOverlayProps) {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full overflow-hidden h-32 flex items-center justify-center">
                <Truck className="w-24 h-24 text-primary animate-drive" />
            </div>
            <h2 className="text-2xl font-bold mt-4 font-headline">Restocking...</h2>
            <p className="text-muted-foreground mt-2">Placing a new order for <span className="font-semibold text-primary">{productName}</span>.</p>
            <Button asChild className="mt-8">
                <Link href="/orders">Track Order</Link>
            </Button>
        </div>
    );
}
