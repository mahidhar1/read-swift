import React from "react";
import Navbar from "../components/Navbar";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Footer from "../components/Footer";
import Link from "next/link";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto px-6 py-12">
        <Button variant="ghost" className="mb-6">
          <ChevronLeft className="mr-2" />
          <Link href="/">Back</Link>
        </Button>
        <h1 className="text-3xl font-bold mb-6">Choose Your Plan</h1>
        <div className="grid grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Free Plan</CardTitle>
            </CardHeader>
            <CardContent>Basic reading speed measurement</CardContent>
            <CardFooter>
              <Button className="w-full">Select</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Annual Plan</CardTitle>
            </CardHeader>
            <CardContent>Advanced analytics and tracking</CardContent>
            <CardFooter>
              <Button className="w-full">Select</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Lifetime Plan</CardTitle>
            </CardHeader>
            <CardContent>Unlimited access forever</CardContent>
            <CardFooter>
              <Button className="w-full">Select</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
