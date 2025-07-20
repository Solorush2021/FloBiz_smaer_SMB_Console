import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function InventoryPage() {
  return (
    <div className="flex justify-center items-center h-[70vh]">
        <Card className="w-full max-w-md text-center">
            <CardHeader>
                <CardTitle className="text-2xl font-headline">Inventory Management</CardTitle>
                <CardDescription>This page is under construction.</CardDescription>
            </CardHeader>
            <CardContent>
                <p>A powerful inventory management system is being built here. Stay tuned!</p>
            </CardContent>
        </Card>
    </div>
  );
}
