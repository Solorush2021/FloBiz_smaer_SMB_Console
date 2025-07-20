
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageSquare, Send } from 'lucide-react';

interface Message {
    sender: 'user' | 'agent';
    text: string;
}

export function CustomerSupportChat() {
    const [messages, setMessages] = useState<Message[]>([
        { sender: 'agent', text: 'Hello! How can I assist you today?' }
    ]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim() === '') return;

        const userMessage: Message = { sender: 'user', text: input };
        const agentResponse: Message = { sender: 'agent', text: 'Thank you for your query. An agent will get back to you shortly.' };

        setMessages([...messages, userMessage, agentResponse]);
        setInput('');
    };

    return (
        <Card className="h-full flex flex-col">
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><MessageSquare className="w-6 h-6"/> Live Chat Support</CardTitle>
                <CardDescription>Can't find an answer? Chat with our support team.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col p-0">
                <ScrollArea className="flex-1 p-6">
                    <div className="space-y-4">
                        {messages.map((message, index) => (
                            <div key={index} className={`flex items-end gap-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-xs rounded-lg p-3 text-sm ${message.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                                    {message.text}
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </CardContent>
            <CardFooter className="border-t p-4">
                <div className="flex w-full items-center space-x-2">
                    <Input 
                        id="message" 
                        placeholder="Type your message..." 
                        className="flex-1" 
                        autoComplete="off" 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    />
                    <Button type="submit" size="icon" onClick={handleSend}>
                        <Send className="h-4 w-4" />
                        <span className="sr-only">Send</span>
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}
