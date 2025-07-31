"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Palette, Upload, Save } from "lucide-react"

export default function ThemeSettings() {
  const [settings, setSettings] = useState({
    siteName: "Bugema Adventist Primary School",
    tagline: "Excellence in Christian Education",
    primaryColor: "#3b82f6",
    secondaryColor: "#10b981",
    accentColor: "#f59e0b",
    darkMode: false,
    customCSS: "",
    logo: null as File | null,
    favicon: null as File | null,
  })

  const handleSave = () => {
    // Handle saving theme settings
    console.log("Theme settings saved:", settings)
  }

  const handleFileUpload = (type: "logo" | "favicon") => (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSettings((prev) => ({ ...prev, [type]: file }))
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Theme Settings</h1>
          <p className="text-muted-foreground">Customize the appearance of your website</p>
        </div>
        <Button onClick={handleSave}>
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Palette className="h-5 w-5 mr-2" />
              Brand Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="siteName">Site Name</Label>
              <Input
                id="siteName"
                value={settings.siteName}
                onChange={(e) => setSettings((prev) => ({ ...prev, siteName: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tagline">Tagline</Label>
              <Input
                id="tagline"
                value={settings.tagline}
                onChange={(e) => setSettings((prev) => ({ ...prev, tagline: e.target.value }))}
              />
            </div>

            <Separator />

            <div className="space-y-2">
              <Label htmlFor="logo">Logo</Label>
              <div className="flex items-center space-x-2">
                <Input id="logo" type="file" accept="image/*" onChange={handleFileUpload("logo")} className="hidden" />
                <Label htmlFor="logo" className="cursor-pointer">
                  <Button type="button" variant="outline" asChild>
                    <span>
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Logo
                    </span>
                  </Button>
                </Label>
                {settings.logo && <span className="text-sm text-muted-foreground">{settings.logo.name}</span>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="favicon">Favicon</Label>
              <div className="flex items-center space-x-2">
                <Input
                  id="favicon"
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload("favicon")}
                  className="hidden"
                />
                <Label htmlFor="favicon" className="cursor-pointer">
                  <Button type="button" variant="outline" asChild>
                    <span>
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Favicon
                    </span>
                  </Button>
                </Label>
                {settings.favicon && <span className="text-sm text-muted-foreground">{settings.favicon.name}</span>}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Color Scheme</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="primaryColor">Primary Color</Label>
              <div className="flex items-center space-x-2">
                <Input
                  id="primaryColor"
                  type="color"
                  value={settings.primaryColor}
                  onChange={(e) => setSettings((prev) => ({ ...prev, primaryColor: e.target.value }))}
                  className="w-16 h-10"
                />
                <Input
                  value={settings.primaryColor}
                  onChange={(e) => setSettings((prev) => ({ ...prev, primaryColor: e.target.value }))}
                  placeholder="#3b82f6"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="secondaryColor">Secondary Color</Label>
              <div className="flex items-center space-x-2">
                <Input
                  id="secondaryColor"
                  type="color"
                  value={settings.secondaryColor}
                  onChange={(e) => setSettings((prev) => ({ ...prev, secondaryColor: e.target.value }))}
                  className="w-16 h-10"
                />
                <Input
                  value={settings.secondaryColor}
                  onChange={(e) => setSettings((prev) => ({ ...prev, secondaryColor: e.target.value }))}
                  placeholder="#10b981"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="accentColor">Accent Color</Label>
              <div className="flex items-center space-x-2">
                <Input
                  id="accentColor"
                  type="color"
                  value={settings.accentColor}
                  onChange={(e) => setSettings((prev) => ({ ...prev, accentColor: e.target.value }))}
                  className="w-16 h-10"
                />
                <Input
                  value={settings.accentColor}
                  onChange={(e) => setSettings((prev) => ({ ...prev, accentColor: e.target.value }))}
                  placeholder="#f59e0b"
                />
              </div>
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="darkMode">Dark Mode</Label>
                <p className="text-sm text-muted-foreground">Enable dark mode by default</p>
              </div>
              <Switch
                id="darkMode"
                checked={settings.darkMode}
                onCheckedChange={(checked) => setSettings((prev) => ({ ...prev, darkMode: checked }))}
              />
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Custom CSS</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Label htmlFor="customCSS">Additional CSS</Label>
              <Textarea
                id="customCSS"
                value={settings.customCSS}
                onChange={(e) => setSettings((prev) => ({ ...prev, customCSS: e.target.value }))}
                placeholder="/* Add your custom CSS here */"
                rows={10}
                className="font-mono text-sm"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
