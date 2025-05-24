"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Phone, Heart, Mic, Settings, Bluetooth, Battery, Pill, Play, Shield, Headphones, Wifi } from "lucide-react"

export default function Component() {
  const [activeSection, setActiveSection] = useState("dashboard")
  const [isRecording, setIsRecording] = useState(false)

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Shield },
    { id: "medical", label: "Medical Info", icon: Heart },
    { id: "medications", label: "Medications", icon: Pill },
    { id: "audio", label: "Audio Messages", icon: Mic },
    { id: "contacts", label: "Emergency Contacts", icon: Phone },
    { id: "device", label: "Device Sync", icon: Bluetooth },
    { id: "settings", label: "Settings", icon: Settings },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="flex h-screen">
        {/* Sidebar Navigation */}
        <div className="w-64 bg-white border-r border-slate-200 shadow-sm">
          <div className="p-6 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800">Aegis</h1>
                <p className="text-sm text-slate-500">Medical Bracelet</p>
              </div>
            </div>
          </div>

          <nav className="p-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  className={`w-full justify-start ${
                    activeSection === item.id
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                  onClick={() => setActiveSection(item.id)}
                >
                  <Icon className="w-4 h-4 mr-3" />
                  {item.label}
                </Button>
              )
            })}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <div className="p-8">
            {/* Dashboard */}
            {activeSection === "dashboard" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-bold text-slate-800">Dashboard</h2>
                  <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg">
                    <Phone className="w-5 h-5 mr-2" />
                    Emergency Call
                  </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Device Status */}
                  <Card className="border-blue-200">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-blue-700">
                        <Bluetooth className="w-5 h-5" />
                        Device Status
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">Connection</span>
                        <Badge className="bg-green-100 text-green-800">Connected</Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-600">Battery</span>
                          <span className="text-sm font-medium">87%</span>
                        </div>
                        <Progress value={87} className="h-2" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">Storage</span>
                        <span className="text-sm font-medium">12/32 MB</span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quick Actions */}
                  <Card className="border-slate-200">
                    <CardHeader>
                      <CardTitle className="text-slate-700">Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button className="w-full justify-start bg-blue-50 text-blue-700 hover:bg-blue-100">
                        <Mic className="w-4 h-4 mr-2" />
                        Record New Message
                      </Button>
                      <Button className="w-full justify-start bg-slate-50 text-slate-700 hover:bg-slate-100">
                        <Play className="w-4 h-4 mr-2" />
                        Test Emergency Flow
                      </Button>
                      <Button className="w-full justify-start bg-slate-50 text-slate-700 hover:bg-slate-100">
                        <Wifi className="w-4 h-4 mr-2" />
                        Sync to Device
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Recent Activity */}
                  <Card className="border-slate-200">
                    <CardHeader>
                      <CardTitle className="text-slate-700">Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="text-sm">
                        <p className="font-medium text-slate-800">Message Updated</p>
                        <p className="text-slate-500">Seizure protocol - 2 hours ago</p>
                      </div>
                      <div className="text-sm">
                        <p className="font-medium text-slate-800">Device Synced</p>
                        <p className="text-slate-500">All data current - 4 hours ago</p>
                      </div>
                      <div className="text-sm">
                        <p className="font-medium text-slate-800">Contact Added</p>
                        <p className="text-slate-500">Dr. Sarah Chen - Yesterday</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* Medical Info */}
            {activeSection === "medical" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-bold text-slate-800">Medical Information</h2>
                  <Button className="bg-blue-500 hover:bg-blue-600">Add Condition</Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card className="border-blue-200">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-blue-700">
                        <Heart className="w-5 h-5" />
                        Active Conditions
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium text-blue-800">Epilepsy</h3>
                          <Badge className="bg-blue-100 text-blue-800">Active</Badge>
                        </div>
                        <p className="text-sm text-slate-600 mb-2">Triggers: Flashing lights, stress, lack of sleep</p>
                        <p className="text-sm text-slate-600">
                          Emergency Response: Stay calm, time seizure, call 911 if over 5 minutes
                        </p>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium text-slate-800">Type 1 Diabetes</h3>
                          <Badge variant="secondary">Managed</Badge>
                        </div>
                        <p className="text-sm text-slate-600">Monitor blood sugar, insulin in right pocket</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-slate-200">
                    <CardHeader>
                      <CardTitle className="text-slate-700">Personal Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-slate-600">Name</label>
                          <p className="text-slate-800">Alex Johnson</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-slate-600">Age</label>
                          <p className="text-slate-800">32</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-slate-600">Blood Type</label>
                          <p className="text-slate-800 text-xl font-bold">A+</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-slate-600">Allergies</label>
                          <p className="text-slate-800">Penicillin, Shellfish</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* Audio Messages */}
            {activeSection === "audio" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-bold text-slate-800">Audio Messages</h2>
                  <Button
                    className={`${isRecording ? "bg-red-500 hover:bg-red-600" : "bg-blue-500 hover:bg-blue-600"}`}
                    onClick={() => setIsRecording(!isRecording)}
                  >
                    <Mic className="w-4 h-4 mr-2" />
                    {isRecording ? "Stop Recording" : "Record New"}
                  </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card className="border-blue-200">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-blue-700">
                        <Headphones className="w-5 h-5" />
                        Saved Messages
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium text-blue-800">Seizure Protocol</h3>
                          <Button size="sm" variant="outline">
                            <Play className="w-3 h-3" />
                          </Button>
                        </div>
                        <p className="text-sm text-slate-600">Duration: 45 seconds</p>
                        <p className="text-xs text-slate-500 mt-1">
                          "Hi, I'm Alex. I'm having a seizure. Please stay calm and time how long this lasts..."
                        </p>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium text-slate-800">General Emergency</h3>
                          <Button size="sm" variant="outline">
                            <Play className="w-3 h-3" />
                          </Button>
                        </div>
                        <p className="text-sm text-slate-600">Duration: 30 seconds</p>
                        <p className="text-xs text-slate-500 mt-1">"This is a medical emergency. Please call 911..."</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-slate-200">
                    <CardHeader>
                      <CardTitle className="text-slate-700">Auto-Guided Instructions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="p-4 bg-slate-50 rounded-lg">
                        <h3 className="font-medium text-slate-800 mb-2">Seizure Response Flow</h3>
                        <ol className="text-sm text-slate-600 space-y-1">
                          <li>1. Play personal message</li>
                          <li>2. Guide: "Time the seizure"</li>
                          <li>3. Guide: "Clear the area"</li>
                          <li>4. Guide: "Call 911 if over 5 minutes"</li>
                        </ol>
                        <Button size="sm" className="mt-3 bg-blue-500 hover:bg-blue-600">
                          <Play className="w-3 h-3 mr-1" />
                          Test Flow
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* Device Sync */}
            {activeSection === "device" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-bold text-slate-800">Device Management</h2>
                  <Button className="bg-blue-500 hover:bg-blue-600">
                    <Wifi className="w-4 h-4 mr-2" />
                    Sync Now
                  </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <Card className="border-blue-200">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-blue-700">
                        <Bluetooth className="w-5 h-5" />
                        Connection Status
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Bluetooth className="w-8 h-8 text-green-600" />
                        </div>
                        <p className="font-medium text-green-800">Connected</p>
                        <p className="text-sm text-slate-500">Aegis Bracelet #AE-2024-001</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-slate-200">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-slate-700">
                        <Battery className="w-5 h-5" />
                        Device Health
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Battery</span>
                            <span>87%</span>
                          </div>
                          <Progress value={87} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Storage</span>
                            <span>12/32 MB</span>
                          </div>
                          <Progress value={37} className="h-2" />
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Last Sync</span>
                          <span>2 hours ago</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-slate-200">
                    <CardHeader>
                      <CardTitle className="text-slate-700">Firmware</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Current Version</span>
                          <span>v2.1.3</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Latest Version</span>
                          <span>v2.1.3</span>
                        </div>
                        <Badge className="bg-green-100 text-green-800 w-full justify-center">Up to Date</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
