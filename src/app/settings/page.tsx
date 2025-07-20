
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { useTheme } from '@/components/theme-provider';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { User, Bell, Palette, Shield } from 'lucide-react';

export default function SettingsPage() {
    const { toast } = useToast();
    const { theme, setTheme } = useTheme();

    const handleSave = (section: string) => {
        toast({
            title: 'Settings Saved',
            description: `${section} settings have been successfully updated.`,
        });
    };

    return (
        <div className="flex-1 space-y-8 p-4 md:p-8 animate-fade-in">
            <div className="flex items-center justify-between space-y-2">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight font-headline">Settings</h2>
                    <p className="text-muted-foreground">Manage your account, appearance, and notification settings.</p>
                </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
                <div className="lg:col-span-1">
                    <h3 className="text-lg font-medium"><User className="inline-block mr-2 h-5 w-5"/>Profile Information</h3>
                    <p className="text-sm text-muted-foreground">Update your personal and business details.</p>
                </div>
                <div className="lg:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Business Details</CardTitle>
                            <CardDescription>This information will appear on your invoices.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="business-name">Business Name</Label>
                                <Input id="business-name" defaultValue="My Kirana Store" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="owner-name">Owner Name</Label>
                                <Input id="owner-name" defaultValue="Ramesh Kumar" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="gstin">GSTIN</Label>
                                <Input id="gstin" defaultValue="29ABCDE1234F1Z5" />
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="address">Business Address</Label>
                                <Textarea id="address" defaultValue="123, Main Market, Koramangala, Bengaluru, 560034" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="ml-auto" onClick={() => handleSave('Profile')}>Save Changes</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>

            <Separator />

            <div className="grid gap-8 lg:grid-cols-3">
                <div className="lg:col-span-1">
                    <h3 className="text-lg font-medium"><Palette className="inline-block mr-2 h-5 w-5"/>Appearance</h3>
                    <p className="text-sm text-muted-foreground">Customize the look and feel of the application.</p>
                </div>
                <div className="lg:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Theme</CardTitle>
                            <CardDescription>Select your preferred color scheme.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label>Color Mode</Label>
                                <Select onValueChange={(value: 'light' | 'dark' | 'system') => setTheme(value)} defaultValue={theme}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a theme" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="light">Light</SelectItem>
                                        <SelectItem value="dark">Dark</SelectItem>
                                        <SelectItem value="system">System</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="ml-auto" onClick={() => handleSave('Appearance')}>Save Changes</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>

            <Separator />
            
            <div className="grid gap-8 lg:grid-cols-3">
                <div className="lg:col-span-1">
                    <h3 className="text-lg font-medium"><Bell className="inline-block mr-2 h-5 w-5"/>Notifications</h3>
                    <p className="text-sm text-muted-foreground">Configure how you receive alerts.</p>
                </div>
                <div className="lg:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Alert Preferences</CardTitle>
                            <CardDescription>Choose which notifications to receive.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="low-stock" className="flex flex-col space-y-1">
                                    <span>Low Stock Alerts</span>
                                    <span className="font-normal leading-snug text-muted-foreground">Receive a notification when product stock is low.</span>
                                </Label>
                                <Switch id="low-stock" defaultChecked />
                            </div>
                            <div className="flex items-center justify-between">
                                <Label htmlFor="overdue-invoice" className="flex flex-col space-y-1">
                                    <span>Overdue Invoice Reminders</span>
                                    <span className="font-normal leading-snug text-muted-foreground">Get reminded when an invoice becomes overdue.</span>
                                </Label>
                                <Switch id="overdue-invoice" defaultChecked />
                            </div>
                            <div className="flex items-center justify-between">
                                <Label htmlFor="weekly-summary" className="flex flex-col space-y-1">
                                    <span>Weekly Summary</span>
                                    <span className="font-normal leading-snug text-muted-foreground">Receive a summary of your business performance every week.</span>
                                </Label>
                                <Switch id="weekly-summary" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="ml-auto" onClick={() => handleSave('Notification')}>Save Changes</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>

            <Separator />

            <div className="grid gap-8 lg:grid-cols-3">
                <div className="lg:col-span-1">
                    <h3 className="text-lg font-medium"><Shield className="inline-block mr-2 h-5 w-5"/>Security</h3>
                    <p className="text-sm text-muted-foreground">Manage your account security settings.</p>
                </div>
                <div className="lg:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Password</CardTitle>
                            <CardDescription>Change your password. It's recommended to use a strong, unique password.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="current-password">Current Password</Label>
                                <Input id="current-password" type="password" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="new-password">New Password</Label>
                                <Input id="new-password" type="password" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="ml-auto" variant="destructive" onClick={() => handleSave('Security')}>Update Password</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
}
