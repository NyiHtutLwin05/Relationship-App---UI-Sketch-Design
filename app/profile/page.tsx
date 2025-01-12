import { MobileContainer } from "@/components/mobile-container";
import { TabBar } from "@/components/navigation/tab-bar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Bell, Lock, Moon, Settings } from "lucide-react";

export default function Profile() {
  return (
    <MobileContainer>
      <div className="p-6 space-y-6">
        <div className="text-center">
          <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
            <span className="text-3xl">👤</span>
          </div>
          <h1 className="text-2xl font-bold">Alex Johnson</h1>
          <p className="text-muted-foreground">Connected with Sarah</p>
        </div>

        <div className="space-y-4">
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Bell className="h-5 w-5" />
                <span>Notifications</span>
              </div>
              <Switch />
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Moon className="h-5 w-5" />
                <span>Dark Mode</span>
              </div>
              <Switch />
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Lock className="h-5 w-5" />
                <span>Privacy</span>
              </div>
              <Button variant="ghost" size="sm">
                Manage
              </Button>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </div>
              <Button variant="ghost" size="sm">
                Configure
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </MobileContainer>
  );
}
