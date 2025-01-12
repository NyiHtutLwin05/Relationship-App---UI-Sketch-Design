"use client";
import { MobileContainer } from "@/components/mobile-container";
import { TabBar } from "@/components/navigation/tab-bar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

export default function Chat() {
  return (
    <MobileContainer>
      <div className="flex flex-col h-full">
        <div className="p-6">
          <h1 className="text-2xl font-bold">Messages</h1>
        </div>

        <div className="flex-1 px-6 space-y-4 overflow-y-auto">
          <div className="flex justify-end">
            <Card className="bg-primary text-primary-foreground p-3 max-w-[80%] rounded-2xl rounded-tr-none">
              <p>Hey love! How's your day going? 💖</p>
            </Card>
          </div>
          <div className="flex justify-start">
            <Card className="bg-muted p-3 max-w-[80%] rounded-2xl rounded-tl-none">
              <p>It's going great! Missing you though 🥰</p>
            </Card>
          </div>
        </div>

        <div className="p-4 border-t bg-background">
          <div className="flex space-x-2">
            <Input placeholder="Type a message..." className="flex-1" />
            <Button size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </MobileContainer>
  );
}
