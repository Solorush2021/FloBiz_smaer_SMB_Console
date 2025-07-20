import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function HelpPage() {
  return (
    <div className="flex justify-center items-center h-[70vh]">
        <Card className="w-full max-w-md text-center">
            <CardHeader>
                <CardTitle className="text-2xl font-headline">Help Center</CardTitle>
                <CardDescription>This page is under construction.</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Our comprehensive help center with FAQs and tutorials is coming soon!</p>
            </CardContent>
        </Card>
    </div>
  );
}
