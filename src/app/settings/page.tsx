import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function SettingsPage() {
  return (
    <div className="flex justify-center items-center h-[70vh]">
        <Card className="w-full max-w-md text-center">
            <CardHeader>
                <CardTitle className="text-2xl font-headline">Settings</CardTitle>
                <CardDescription>This page is under construction.</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Soon you'll be able to manage your account and preferences here.</p>
            </CardContent>
        </Card>
    </div>
  );
}
