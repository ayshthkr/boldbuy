"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Mail, MessageSquare, Phone, Check, X, Loader2 } from "lucide-react";
import { useToast } from "@/lib/hooks/use-toast";
import { Separator } from "@/components/ui/seperator";

interface NotificationPreferences {
  email: {
    orderUpdates: boolean;
    promotions: boolean;
    security: boolean;
  };
  sms: {
    orderUpdates: boolean;
    security: boolean;
  };
  whatsapp: {
    orderUpdates: boolean;
    support: boolean;
  };
}

type SaveState = "idle" | "loading" | "success" | "error";

export function NotificationSettings() {
  const { toast } = useToast();
  const [saveState, setSaveState] = useState<SaveState>("idle");
  const [isDirty, setIsDirty] = useState(false);
  const [initialPreferences, setInitialPreferences] =
    useState<NotificationPreferences>({
      email: {
        orderUpdates: true,
        promotions: false,
        security: true,
      },
      sms: {
        orderUpdates: true,
        security: true,
      },
      whatsapp: {
        orderUpdates: false,
        support: false,
      },
    });
  const [preferences, setPreferences] = useState(initialPreferences);

  // Check if preferences have changed from initial state
  useEffect(() => {
    const hasChanged =
      JSON.stringify(preferences) !== JSON.stringify(initialPreferences);
    setIsDirty(hasChanged);
  }, [preferences, initialPreferences]);

  const updatePreference = (
    channel: keyof NotificationPreferences,
    type: string,
    value: boolean
  ) => {
    setPreferences((prev) => ({
      ...prev,
      [channel]: {
        ...prev[channel],
        [type]: value,
      },
    }));
  };

  const handleSave = async () => {
    setSaveState("loading");

    try {
      // Simulate API call
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate 90% success rate
          if (Math.random() > 0.1) {
            resolve(true);
          } else {
            reject(new Error("Failed to save preferences"));
          }
        }, 2000);
      });

      setSaveState("success");
      setInitialPreferences(preferences);
      toast({
        title: "Success",
        description: "Your notification preferences have been saved.",
      });

      // Reset to idle after 3 seconds
      setTimeout(() => {
        setSaveState("idle");
      }, 3000);
    } catch (error) {
      setSaveState("error");
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to save preferences. Please try again.",
        variant: "destructive",
      });

      // Reset to idle after 3 seconds
      setTimeout(() => {
        setSaveState("idle");
      }, 3000);
    }
  };

  const SaveButton = () => {
    const buttonStates = {
      idle: {
        text: "Save Preferences",
        icon: null,
        className: "bg-primary hover:bg-purple-700",
      },
      loading: {
        text: "Saving...",
        icon: <Loader2 className="mr-2 h-5 w-5 animate-spin" />,
        className: "bg-primary",
      },
      success: {
        text: "Saved!",
        icon: <Check className="mr-2 h-5 w-5" />,
        className: "bg-green-600",
      },
      error: {
        text: "Failed",
        icon: <X className="mr-2 h-5 w-5" />,
        className: "bg-red-600",
      },
    };

    const { text, icon } = buttonStates[saveState];

    if (!isDirty || saveState !== "idle") {
      return <></>;
    }

    return (
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 transition-all animate-slideUp">
        <Button
          size="lg"
          disabled={!isDirty || saveState !== "idle"}
          onClick={handleSave}
          variant={"secondary"}
        >
          {icon}
          {text}
        </Button>
      </div>
    );
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSave();
      }}
      className="space-y-6 pb-20"
    >
      {/* Email Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-primary" />
            Email Notifications
          </CardTitle>
          <CardDescription>
            Manage your email notification preferences
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="email-orders" className="flex flex-col gap-1">
              <span>Order Updates</span>
              <span className="font-normal text-sm text-gray-500">
                Receive updates about your orders
              </span>
            </Label>
            <Switch
              id="email-orders"
              checked={preferences.email.orderUpdates}
              onCheckedChange={(checked) =>
                updatePreference("email", "orderUpdates", checked)
              }
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <Label htmlFor="email-promotions" className="flex flex-col gap-1">
              <span>Promotional Emails</span>
              <span className="font-normal text-sm text-gray-500">
                Receive offers and promotional updates
              </span>
            </Label>
            <Switch
              id="email-promotions"
              checked={preferences.email.promotions}
              onCheckedChange={(checked) =>
                updatePreference("email", "promotions", checked)
              }
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <Label htmlFor="email-security" className="flex flex-col gap-1">
              <span>Security Alerts</span>
              <span className="font-normal text-sm text-gray-500">
                Get notified about security updates
              </span>
            </Label>
            <Switch
              id="email-security"
              checked={preferences.email.security}
              onCheckedChange={(checked) =>
                updatePreference("email", "security", checked)
              }
            />
          </div>
        </CardContent>
      </Card>

      {/* SMS Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-primary" />
            SMS Notifications
          </CardTitle>
          <CardDescription>
            Manage your SMS notification preferences
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="sms-orders" className="flex flex-col gap-1">
              <span>Order Updates</span>
              <span className="font-normal text-sm text-gray-500">
                Receive SMS updates about your orders
              </span>
            </Label>
            <Switch
              id="sms-orders"
              checked={preferences.sms.orderUpdates}
              onCheckedChange={(checked) =>
                updatePreference("sms", "orderUpdates", checked)
              }
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <Label htmlFor="sms-security" className="flex flex-col gap-1">
              <span>Security Alerts</span>
              <span className="font-normal text-sm text-gray-500">
                Get SMS alerts for security updates
              </span>
            </Label>
            <Switch
              id="sms-security"
              checked={preferences.sms.security}
              onCheckedChange={(checked) =>
                updatePreference("sms", "security", checked)
              }
            />
          </div>
        </CardContent>
      </Card>

      {/* WhatsApp Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-primary" />
            WhatsApp Notifications
          </CardTitle>
          <CardDescription>
            Manage your WhatsApp notification preferences
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="whatsapp-orders" className="flex flex-col gap-1">
              <span>Order Updates</span>
              <span className="font-normal text-sm text-gray-500">
                Receive WhatsApp updates about your orders
              </span>
            </Label>
            <Switch
              id="whatsapp-orders"
              checked={preferences.whatsapp.orderUpdates}
              onCheckedChange={(checked) =>
                updatePreference("whatsapp", "orderUpdates", checked)
              }
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <Label htmlFor="whatsapp-support" className="flex flex-col gap-1">
              <span>Support Messages</span>
              <span className="font-normal text-sm text-gray-500">
                Receive support updates via WhatsApp
              </span>
            </Label>
            <Switch
              id="whatsapp-support"
              checked={preferences.whatsapp.support}
              onCheckedChange={(checked) =>
                updatePreference("whatsapp", "support", checked)
              }
            />
          </div>
        </CardContent>
      </Card>

      <SaveButton />
    </form>
  );
}
