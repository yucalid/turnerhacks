"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Phone,
  Heart,
  Mic,
  Settings,
  Bluetooth,
  Pill,
  Play,
  Shield,
  Headphones,
  Wifi,
  MapPin,
  Clock,
  User,
  Stethoscope,
  Monitor,
  Smartphone,
  Watch,
} from "lucide-react"

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50">
      <div className="flex h-screen">
        {/* Sidebar Navigation */}
        <div className="w-64 bg-white/80 backdrop-blur-xl border-r border-blue-200 shadow-xl shadow-blue-100/50">
          <div className="p-6 border-b border-blue-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-400/25">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Alora
                </h1>
                <p className="text-sm text-blue-600">Medical Bracelet</p>
              </div>
            </div>
          </div>

          <nav className="p-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <Button
                  key={item.id}
                  variant="ghost"
                  className={`w-full justify-start transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 border border-blue-300 shadow-lg shadow-blue-200/50"
                      : "text-blue-600 hover:bg-blue-50 hover:text-blue-700"
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
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Dashboard
                  </h2>
                  <Button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-8 py-3 text-lg shadow-lg shadow-red-300/50 border border-red-300">
                    <Phone className="w-5 h-5 mr-2" />
                    Emergency Call
                  </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Device Status */}
                  <Card className="bg-white/70 backdrop-blur-xl border border-blue-200 shadow-xl shadow-blue-100/50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-blue-700">
                        <Bluetooth className="w-5 h-5" />
                        Device Status
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-blue-600">Connection</span>
                        <Badge className="bg-green-100 text-green-700 border border-green-200">Connected</Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-blue-600">Battery</span>
                          <span className="text-sm font-medium text-blue-700">87%</span>
                        </div>
                        <Progress value={87} className="h-3 bg-blue-100" />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-blue-600">Storage</span>
                        <span className="text-sm font-medium text-blue-700">12/32 MB</span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quick Actions */}
                  <Card className="bg-white/70 backdrop-blur-xl border border-cyan-200 shadow-xl shadow-cyan-100/50">
                    <CardHeader>
                      <CardTitle className="text-cyan-700">Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button className="w-full justify-start bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 border border-blue-200 hover:from-blue-200 hover:to-cyan-200">
                        <Mic className="w-4 h-4 mr-2" />
                        Record New Message
                      </Button>
                      <Button className="w-full justify-start bg-blue-50 text-blue-600 border border-blue-100 hover:bg-blue-100">
                        <Play className="w-4 h-4 mr-2" />
                        Test Emergency Flow
                      </Button>
                      <Button className="w-full justify-start bg-blue-50 text-blue-600 border border-blue-100 hover:bg-blue-100">
                        <Wifi className="w-4 h-4 mr-2" />
                        Sync to Device
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Recent Activity */}
                  <Card className="bg-white/70 backdrop-blur-xl border border-sky-200 shadow-xl shadow-sky-100/50">
                    <CardHeader>
                      <CardTitle className="text-sky-700">Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="text-sm">
                        <p className="font-medium text-blue-800">Message Updated</p>
                        <p className="text-blue-600">Seizure protocol - 2 hours ago</p>
                      </div>
                      <div className="text-sm">
                        <p className="font-medium text-blue-800">Device Synced</p>
                        <p className="text-blue-600">All data current - 4 hours ago</p>
                      </div>
                      <div className="text-sm">
                        <p className="font-medium text-blue-800">Contact Added</p>
                        <p className="text-blue-600">Dr. Sarah Chen - Yesterday</p>
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
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Medical Information
                  </h2>
                  <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg shadow-blue-300/50">
                    Add Condition
                  </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card className="bg-white/70 backdrop-blur-xl border border-blue-200 shadow-xl shadow-blue-100/50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-blue-700">
                        <Heart className="w-5 h-5" />
                        Active Conditions
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium text-blue-800">Epilepsy</h3>
                          <Badge className="bg-blue-100 text-blue-700 border border-blue-200">Active</Badge>
                        </div>
                        <p className="text-sm text-blue-600 mb-2">Triggers: Flashing lights, stress, lack of sleep</p>
                        <p className="text-sm text-blue-600">
                          Emergency Response: Stay calm, time seizure, call 911 if over 5 minutes
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-r from-sky-50 to-blue-50 rounded-lg border border-sky-200">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium text-sky-800">Type 1 Diabetes</h3>
                          <Badge className="bg-sky-100 text-sky-700 border border-sky-200">Managed</Badge>
                        </div>
                        <p className="text-sm text-sky-600">Monitor blood sugar, insulin in right pocket</p>
                      </div>
                      <div className="p-4 bg-gradient-to-r from-cyan-50 to-teal-50 rounded-lg border border-cyan-200">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium text-cyan-800">Severe Allergies</h3>
                          <Badge className="bg-red-100 text-red-700 border border-red-200">Critical</Badge>
                        </div>
                        <p className="text-sm text-cyan-600">Penicillin, Shellfish - EpiPen required</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/70 backdrop-blur-xl border border-sky-200 shadow-xl shadow-sky-100/50">
                    <CardHeader>
                      <CardTitle className="text-sky-700">Personal Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-blue-600">Name</label>
                          <p className="text-blue-800 font-medium">Alex Johnson</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-blue-600">Age</label>
                          <p className="text-blue-800 font-medium">32</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-blue-600">Blood Type</label>
                          <p className="text-blue-800 text-2xl font-bold">A+</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-blue-600">Weight</label>
                          <p className="text-blue-800 font-medium">165 lbs</p>
                        </div>
                        <div className="col-span-2">
                          <label className="text-sm font-medium text-blue-600">Insurance</label>
                          <p className="text-blue-800 font-medium">Blue Cross Blue Shield</p>
                          <p className="text-sm text-blue-600">Policy: BC123456789</p>
                        </div>
                        <div className="col-span-2">
                          <label className="text-sm font-medium text-blue-600">Emergency Medical ID</label>
                          <p className="text-blue-800 font-medium">#EMD-2024-AJ-001</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* Medications */}
            {activeSection === "medications" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Medications & Locations
                  </h2>
                  <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg shadow-blue-300/50">
                    Add Medication
                  </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card className="bg-white/70 backdrop-blur-xl border border-orange-200 shadow-xl shadow-orange-100/50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-orange-700">
                        <Pill className="w-5 h-5" />
                        Emergency Medications
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-200">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-bold text-orange-700">EpiPen Auto-Injector</h3>
                          <Badge className="bg-red-100 text-red-700 border border-red-200">Critical</Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-orange-600" />
                            <span className="text-sm text-blue-800 font-medium">Right thigh outer pocket</span>
                          </div>
                          <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                            <p className="text-sm text-blue-700 font-medium mb-1">Memory Aid:</p>
                            <p className="text-blue-800 font-bold">"Orange to the thigh, blue to the sky"</p>
                          </div>
                          <div className="text-xs text-blue-600">
                            <p>• Remove safety cap (blue)</p>
                            <p>• Inject into outer thigh (orange end)</p>
                            <p>• Hold for 10 seconds</p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-bold text-blue-700">Albuterol Inhaler</h3>
                          <Badge className="bg-blue-100 text-blue-700 border border-blue-200">Rescue</Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-blue-600" />
                            <span className="text-sm text-blue-800">Left jacket pocket</span>
                          </div>
                          <div className="text-xs text-blue-600">
                            <p>• Shake well before use</p>
                            <p>• 2 puffs, wait 1 minute between</p>
                            <p>• Call 911 if no improvement</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/70 backdrop-blur-xl border border-sky-200 shadow-xl shadow-sky-100/50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-sky-700">
                        <Clock className="w-5 h-5" />
                        Daily Medications
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="p-4 bg-gradient-to-r from-sky-50 to-blue-50 rounded-xl border border-sky-200">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium text-sky-700">Insulin (Humalog)</h3>
                          <Badge className="bg-sky-100 text-sky-700 border border-sky-200">Daily</Badge>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-3 h-3 text-sky-600" />
                            <span className="text-xs text-blue-800">Insulin pen in right pocket</span>
                          </div>
                          <p className="text-xs text-blue-600">With meals, as needed for blood sugar</p>
                        </div>
                      </div>

                      <div className="p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl border border-green-200">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium text-green-700">Metformin</h3>
                          <Badge className="bg-green-100 text-green-700 border border-green-200">2x Daily</Badge>
                        </div>
                        <p className="text-xs text-blue-600">500mg with breakfast and dinner</p>
                      </div>

                      <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium text-yellow-700">Keppra (Levetiracetam)</h3>
                          <Badge className="bg-yellow-100 text-yellow-700 border border-yellow-200">2x Daily</Badge>
                        </div>
                        <p className="text-xs text-blue-600">750mg morning and evening for seizure control</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* Emergency Contacts */}
            {activeSection === "contacts" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Emergency Contacts
                  </h2>
                  <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg shadow-blue-300/50">
                    Add Contact
                  </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Emergency Contacts */}
                  <Card className="bg-white/70 backdrop-blur-xl border border-red-200 shadow-xl shadow-red-100/50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-red-700">
                        <Phone className="w-5 h-5" />
                        Emergency Contacts
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl border border-red-200">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <p className="font-medium text-blue-800">Sarah Johnson</p>
                            <p className="text-sm text-red-600">Mother</p>
                            <p className="text-xs text-blue-600">(555) 123-4567</p>
                          </div>
                          <Button size="sm" className="bg-red-100 hover:bg-red-200 text-red-700 border border-red-200">
                            <Phone className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-200">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <p className="font-medium text-blue-800">Michael Johnson</p>
                            <p className="text-sm text-orange-600">Father</p>
                            <p className="text-xs text-blue-600">(555) 123-4568</p>
                          </div>
                          <Button
                            size="sm"
                            className="bg-orange-100 hover:bg-orange-200 text-orange-700 border border-orange-200"
                          >
                            <Phone className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl border border-pink-200">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <p className="font-medium text-blue-800">Emma Rodriguez</p>
                            <p className="text-sm text-pink-600">Sister</p>
                            <p className="text-xs text-blue-600">(555) 987-6543</p>
                          </div>
                          <Button
                            size="sm"
                            className="bg-pink-100 hover:bg-pink-200 text-pink-700 border border-pink-200"
                          >
                            <Phone className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Medical Professionals */}
                  <Card className="bg-white/70 backdrop-blur-xl border border-blue-200 shadow-xl shadow-blue-100/50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-blue-700">
                        <Stethoscope className="w-5 h-5" />
                        Medical Team
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <p className="font-medium text-blue-800">Dr. Sarah Chen</p>
                            <p className="text-sm text-blue-600">Primary Care Physician</p>
                            <p className="text-xs text-blue-600">(555) 234-5678</p>
                            <p className="text-xs text-blue-600">Metro Medical Center</p>
                          </div>
                          <Button
                            size="sm"
                            className="bg-blue-100 hover:bg-blue-200 text-blue-700 border border-blue-200"
                          >
                            <Phone className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="p-4 bg-gradient-to-r from-cyan-50 to-teal-50 rounded-xl border border-cyan-200">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <p className="font-medium text-blue-800">Dr. James Wilson</p>
                            <p className="text-sm text-cyan-600">Neurologist</p>
                            <p className="text-xs text-blue-600">(555) 345-6789</p>
                            <p className="text-xs text-blue-600">Neurology Specialists</p>
                          </div>
                          <Button
                            size="sm"
                            className="bg-cyan-100 hover:bg-cyan-200 text-cyan-700 border border-cyan-200"
                          >
                            <Phone className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="p-4 bg-gradient-to-r from-teal-50 to-green-50 rounded-xl border border-teal-200">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <p className="font-medium text-blue-800">Dr. Lisa Park</p>
                            <p className="text-sm text-teal-600">Endocrinologist</p>
                            <p className="text-xs text-blue-600">(555) 456-7890</p>
                            <p className="text-xs text-blue-600">Diabetes Care Center</p>
                          </div>
                          <Button
                            size="sm"
                            className="bg-teal-100 hover:bg-teal-200 text-teal-700 border border-teal-200"
                          >
                            <Phone className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Family Doctor */}
                  <Card className="bg-white/70 backdrop-blur-xl border border-green-200 shadow-xl shadow-green-100/50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-green-700">
                        <User className="w-5 h-5" />
                        Family & Support
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <p className="font-medium text-blue-800">Dr. Robert Johnson</p>
                            <p className="text-sm text-green-600">Family Doctor</p>
                            <p className="text-xs text-blue-600">(555) 567-8901</p>
                            <p className="text-xs text-blue-600">Family Practice Associates</p>
                          </div>
                          <Button
                            size="sm"
                            className="bg-green-100 hover:bg-green-200 text-green-700 border border-green-200"
                          >
                            <Phone className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-200">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <p className="font-medium text-blue-800">Alex Thompson</p>
                            <p className="text-sm text-emerald-600">Best Friend</p>
                            <p className="text-xs text-blue-600">(555) 678-9012</p>
                            <p className="text-xs text-blue-600">Lives nearby</p>
                          </div>
                          <Button
                            size="sm"
                            className="bg-emerald-100 hover:bg-emerald-200 text-emerald-700 border border-emerald-200"
                          >
                            <Phone className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <p className="font-medium text-blue-800">Maria Santos</p>
                            <p className="text-sm text-yellow-600">Work Emergency Contact</p>
                            <p className="text-xs text-blue-600">(555) 789-0123</p>
                            <p className="text-xs text-blue-600">HR Manager</p>
                          </div>
                          <Button
                            size="sm"
                            className="bg-yellow-100 hover:bg-yellow-200 text-yellow-700 border border-yellow-200"
                          >
                            <Phone className="w-4 h-4" />
                          </Button>
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
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Audio Messages
                  </h2>
                  <Button
                    className={`shadow-lg text-white ${
                      isRecording
                        ? "bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 shadow-red-300/50"
                        : "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-blue-300/50"
                    }`}
                    onClick={() => setIsRecording(!isRecording)}
                  >
                    <Mic className="w-4 h-4 mr-2" />
                    {isRecording ? "Stop Recording" : "Record New"}
                  </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card className="bg-white/70 backdrop-blur-xl border border-blue-200 shadow-xl shadow-blue-100/50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-blue-700">
                        <Headphones className="w-5 h-5" />
                        Saved Messages
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium text-blue-700">Seizure Protocol</h3>
                          <Button
                            size="sm"
                            className="bg-blue-100 hover:bg-blue-200 text-blue-700 border border-blue-200"
                          >
                            <Play className="w-3 h-3" />
                          </Button>
                        </div>
                        <p className="text-sm text-blue-600">Duration: 45 seconds</p>
                        <p className="text-xs text-blue-600 mt-1">
                          "Hi, I'm Alex. I'm having a seizure. Please stay calm and time how long this lasts..."
                        </p>
                      </div>
                      <div className="p-4 bg-gradient-to-r from-sky-50 to-blue-50 rounded-xl border border-sky-200">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium text-sky-700">General Emergency</h3>
                          <Button size="sm" className="bg-sky-100 hover:bg-sky-200 text-sky-700 border border-sky-200">
                            <Play className="w-3 h-3" />
                          </Button>
                        </div>
                        <p className="text-sm text-blue-600">Duration: 30 seconds</p>
                        <p className="text-xs text-blue-600 mt-1">"This is a medical emergency. Please call 911..."</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/70 backdrop-blur-xl border border-cyan-200 shadow-xl shadow-cyan-100/50">
                    <CardHeader>
                      <CardTitle className="text-cyan-700">Auto-Guided Instructions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border border-cyan-200">
                        <h3 className="font-medium text-cyan-700 mb-2">Seizure Response Flow</h3>
                        <ol className="text-sm text-blue-600 space-y-1">
                          <li>1. Play personal message</li>
                          <li>2. Guide: "Time the seizure"</li>
                          <li>3. Guide: "Clear the area"</li>
                          <li>4. Guide: "Call 911 if over 5 minutes"</li>
                        </ol>
                        <Button
                          size="sm"
                          className="mt-3 bg-cyan-100 hover:bg-cyan-200 text-cyan-700 border border-cyan-200"
                        >
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
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Device Management
                  </h2>
                  <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg shadow-blue-300/50">
                    <Wifi className="w-4 h-4 mr-2" />
                    Sync All Devices
                  </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <Card className="bg-white/70 backdrop-blur-xl border border-blue-200 shadow-xl shadow-blue-100/50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-blue-700">
                        <Bluetooth className="w-5 h-5" />
                        Alora Bracelet
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3 border border-green-200">
                          <Bluetooth className="w-8 h-8 text-green-600" />
                        </div>
                        <p className="font-medium text-green-700">Connected</p>
                        <p className="text-sm text-blue-600">AL-2024-001</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-blue-600">Battery</span>
                          <span className="text-blue-700">87%</span>
                        </div>
                        <Progress value={87} className="h-2 bg-blue-100" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/70 backdrop-blur-xl border border-cyan-200 shadow-xl shadow-cyan-100/50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-cyan-700">
                        <Smartphone className="w-5 h-5" />
                        Zebra Tech TC21
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 border border-cyan-200">
                          <Smartphone className="w-8 h-8 text-cyan-600" />
                        </div>
                        <p className="font-medium text-cyan-700">Connected</p>
                        <p className="text-sm text-blue-600">ZT-TC21-003</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-blue-600">Last Sync</span>
                          <span className="text-blue-700">1h ago</span>
                        </div>
                        <Button
                          size="sm"
                          className="w-full bg-cyan-100 hover:bg-cyan-200 text-cyan-700 border border-cyan-200"
                        >
                          Sync Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/70 backdrop-blur-xl border border-sky-200 shadow-xl shadow-sky-100/50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-sky-700">
                        <Monitor className="w-5 h-5" />
                        Zebra Tech ET51
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-sky-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 border border-sky-200">
                          <Monitor className="w-8 h-8 text-sky-600" />
                        </div>
                        <p className="font-medium text-sky-700">Connected</p>
                        <p className="text-sm text-blue-600">ZT-ET51-007</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-blue-600">Last Sync</span>
                          <span className="text-blue-700">3h ago</span>
                        </div>
                        <Button
                          size="sm"
                          className="w-full bg-sky-100 hover:bg-sky-200 text-sky-700 border border-sky-200"
                        >
                          Sync Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/70 backdrop-blur-xl border border-teal-200 shadow-xl shadow-teal-100/50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-teal-700">
                        <Watch className="w-5 h-5" />
                        Zebra Tech WT6000
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 border border-yellow-200">
                          <Watch className="w-8 h-8 text-yellow-600" />
                        </div>
                        <p className="font-medium text-yellow-700">Disconnected</p>
                        <p className="text-sm text-blue-600">ZT-WT6000-012</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-blue-600">Last Sync</span>
                          <span className="text-blue-700">2 days ago</span>
                        </div>
                        <Button
                          size="sm"
                          className="w-full bg-yellow-100 hover:bg-yellow-200 text-yellow-700 border border-yellow-200"
                        >
                          Reconnect
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Sync Status */}
                <Card className="bg-white/70 backdrop-blur-xl border border-blue-200 shadow-xl shadow-blue-100/50">
                  <CardHeader>
                    <CardTitle className="text-blue-700">Sync Status & Settings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div className="space-y-4">
                        <h3 className="font-medium text-blue-700">Auto-Sync Settings</h3>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-blue-600">Medical Data</span>
                            <Badge className="bg-green-100 text-green-700 border border-green-200">Enabled</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-blue-600">Audio Messages</span>
                            <Badge className="bg-green-100 text-green-700 border border-green-200">Enabled</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-blue-600">Emergency Contacts</span>
                            <Badge className="bg-green-100 text-green-700 border border-green-200">Enabled</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h3 className="font-medium text-blue-700">Zebra Tech Integration</h3>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-blue-600">TC21 Mobile Computer</span>
                            <Badge className="bg-cyan-100 text-cyan-700 border border-cyan-200">Active</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-blue-600">ET51 Tablet</span>
                            <Badge className="bg-sky-100 text-sky-700 border border-sky-200">Active</Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-blue-600">WT6000 Wearable</span>
                            <Badge className="bg-yellow-100 text-yellow-700 border border-yellow-200">Offline</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h3 className="font-medium text-blue-700">Last Sync Times</h3>
                        <div className="space-y-2">
                          <div className="text-sm">
                            <p className="text-blue-600">Alora Bracelet</p>
                            <p className="text-blue-700 font-medium">2 hours ago</p>
                          </div>
                          <div className="text-sm">
                            <p className="text-blue-600">All Zebra Devices</p>
                            <p className="text-blue-700 font-medium">1 hour ago</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
