import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function AnalyticsPage() {
  return (
    <div className="flex justify-center items-center h-[70vh]">
        <Card className="w-full max-w-md text-center">
            <CardHeader>
                <CardTitle className="text-2xl font-headline">Analytics</CardTitle>
                <CardDescription>This page is under construction.</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Come back soon to see detailed analytics and insights about your business!</p>
            </CardContent>
        </Card>
    </div>
  );
}
