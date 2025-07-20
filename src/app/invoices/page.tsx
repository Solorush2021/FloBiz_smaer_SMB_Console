import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function InvoicesPage() {
  return (
    <div className="flex justify-center items-center h-[70vh]">
        <Card className="w-full max-w-md text-center">
            <CardHeader>
                <CardTitle className="text-2xl font-headline">Invoice Manager</CardTitle>
                <CardDescription>This page is under construction.</CardDescription>
            </CardHeader>
            <CardContent>
                <p>The invoice generator and manager will be available here soon.</p>
            </CardContent>
        </Card>
    </div>
  );
}
