"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Heart, AlertTriangle, User, Flower2, Leaf } from "lucide-react"

export default function Component() {
  const [activeTab, setActiveTab] = useState("emergency")

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-green-50 to-pink-100 p-4">
      {/* Decorative flowers */}
      <div className="fixed top-4 right-4 text-pink-300 opacity-30">
        <Flower2 className="w-12 h-12" />
      </div>
      <div className="fixed bottom-4 left-4 text-green-300 opacity-30">
        <Leaf className="w-10 h-10" />
      </div>
      <div className="fixed top-1/3 left-8 text-pink-200 opacity-20">
        <Flower2 className="w-8 h-8" />
      </div>

      <div className="max-w-md mx-auto space-y-4">
        {/* Header */}
        <div className="text-center py-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Flower2 className="w-6 h-6 text-pink-500" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-green-600 bg-clip-text text-transparent">
              MediBloom
            </h1>
            <Leaf className="w-6 h-6 text-green-500" />
          </div>
          <p className="text-sm text-gray-600 italic">Where Calm Blooms in Crisis</p>
        </div>

        {/* Emergency Button */}
        <Card className="border-2 border-red-200 bg-gradient-to-r from-red-50 to-pink-50 shadow-lg">
          <CardContent className="p-6">
            <Button
              className="w-full h-16 text-xl font-bold bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white shadow-lg transform hover:scale-105 transition-all duration-200"
              size="lg"
            >
              <Phone className="w-8 h-8 mr-3" />
              EMERGENCY CALL
            </Button>
            <p className="text-center text-sm text-gray-600 mt-2">Tap to call 911</p>
          </CardContent>
        </Card>

        {/* Navigation Tabs */}
        <div className="flex gap-2">
          <Button
            variant={activeTab === "emergency" ? "default" : "outline"}
            onClick={() => setActiveTab("emergency")}
            className={`flex-1 ${
              activeTab === "emergency"
                ? "bg-gradient-to-r from-pink-500 to-green-500 text-white"
                : "border-pink-200 text-pink-600 hover:bg-pink-50"
            }`}
          >
            <AlertTriangle className="w-4 h-4 mr-2" />
            Medical
          </Button>
          <Button
            variant={activeTab === "contacts" ? "default" : "outline"}
            onClick={() => setActiveTab("contacts")}
            className={`flex-1 ${
              activeTab === "contacts"
                ? "bg-gradient-to-r from-pink-500 to-green-500 text-white"
                : "border-green-200 text-green-600 hover:bg-green-50"
            }`}
          >
            <User className="w-4 h-4 mr-2" />
            Contacts
          </Button>
        </div>

        {/* Content Cards */}
        {activeTab === "emergency" && (
          <div className="space-y-4">
            {/* Medical Conditions */}
            <Card className="border-pink-200 bg-gradient-to-r from-pink-50 to-white shadow-md">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-pink-700">
                  <Heart className="w-5 h-5" />
                  Medical Conditions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Badge variant="secondary" className="bg-pink-100 text-pink-800 border-pink-200">
                  Type 1 Diabetes
                </Badge>
                <Badge variant="secondary" className="bg-pink-100 text-pink-800 border-pink-200">
                  Penicillin Allergy
                </Badge>
                <Badge variant="secondary" className="bg-pink-100 text-pink-800 border-pink-200">
                  Asthma
                </Badge>
              </CardContent>
            </Card>

            {/* Medications */}
            <Card className="border-green-200 bg-gradient-to-r from-green-50 to-white shadow-md">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <Flower2 className="w-5 h-5" />
                  Current Medications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-sm">
                  <p className="font-medium text-green-800">Insulin (Humalog)</p>
                  <p className="text-gray-600">As needed with meals</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium text-green-800">Albuterol Inhaler</p>
                  <p className="text-gray-600">For asthma attacks</p>
                </div>
              </CardContent>
            </Card>

            {/* Blood Type */}
            <Card className="border-pink-200 bg-gradient-to-r from-pink-50 to-green-50 shadow-md">
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-sm text-gray-600">Blood Type</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-green-600 bg-clip-text text-transparent">
                    O+
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "contacts" && (
          <div className="space-y-4">
            {/* Emergency Contacts */}
            <Card className="border-green-200 bg-gradient-to-r from-green-50 to-white shadow-md">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <Phone className="w-5 h-5" />
                  Emergency Contacts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-green-100">
                  <div>
                    <p className="font-medium text-green-800">Sarah Johnson</p>
                    <p className="text-sm text-gray-600">Mother</p>
                  </div>
                  <Button size="sm" className="bg-green-500 hover:bg-green-600">
                    <Phone className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-green-100">
                  <div>
                    <p className="font-medium text-green-800">Dr. Emily Chen</p>
                    <p className="text-sm text-gray-600">Primary Care</p>
                  </div>
                  <Button size="sm" className="bg-green-500 hover:bg-green-600">
                    <Phone className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-green-100">
                  <div>
                    <p className="font-medium text-green-800">Mark Johnson</p>
                    <p className="text-sm text-gray-600">Father</p>
                  </div>
                  <Button size="sm" className="bg-green-500 hover:bg-green-600">
                    <Phone className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Personal Info */}
            <Card className="border-pink-200 bg-gradient-to-r from-pink-50 to-white shadow-md">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-pink-700">
                  <User className="w-5 h-5" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-sm">
                  <p className="font-medium text-pink-800">Emma Johnson</p>
                  <p className="text-gray-600">Age: 28 • DOB: 03/15/1996</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium text-pink-800">Insurance</p>
                  <p className="text-gray-600">Blue Cross Blue Shield</p>
                  <p className="text-gray-600">ID: BC123456789</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Footer */}
        <div className="text-center py-4">
          <p className="text-xs text-gray-500">In case of emergency, show this screen to medical personnel</p>
          <div className="flex items-center justify-center gap-1 mt-2">
            <Flower2 className="w-3 h-3 text-pink-400" />
            <span className="text-xs text-gray-400">Stay calm, help is coming</span>
            <Leaf className="w-3 h-3 text-green-400" />
          </div>
        </div>
      </div>
    </div>
  )
}
