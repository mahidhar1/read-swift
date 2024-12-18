"use client";
import React from "react";

import { Button } from "@/components/ui/button";

import { BookOpen, TrendingUp } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";

// Mock Authentication State
const App = () => {
  // const ReadingTestPage = () => {
  //   return (
  //     <div className="min-h-screen bg-gray-50 flex flex-col">
  //       <Navbar />
  //       <div className="flex-grow container mx-auto flex items-center justify-center px-6 py-12">
  //         <Card className="w-[500px] bg-white shadow-xl">
  //           <CardHeader>
  //             <CardTitle className="text-center text-purple-600">
  //               Reading Speed Test
  //             </CardTitle>
  //           </CardHeader>
  //           <CardContent className="space-y-4">
  //             <Button className="w-full bg-purple-600 hover:bg-purple-700">
  //               Upload Text File
  //             </Button>
  //             <Separator className="my-4" />
  //             <Button className="w-full bg-purple-600 hover:bg-purple-700">
  //               Start AI-Generated Test
  //             </Button>
  //           </CardContent>
  //         </Card>
  //       </div>
  //       <Footer />
  //     </div>
  //   );
  // };

  // const Dashboard = () => {
  //   return (
  //     <div className="min-h-screen bg-gray-50 flex flex-col">
  //       <Navbar />
  //       <div className="flex-grow container mx-auto px-6 py-12">
  //         <h1 className="text-3xl font-bold mb-6">Your Reading Journey</h1>
  //         <div className="grid grid-cols-3 gap-6">
  //           <Card>
  //             <CardHeader>
  //               <CardTitle>Current Speed</CardTitle>
  //             </CardHeader>
  //             <CardContent className="text-center">
  //               <div className="text-4xl font-bold text-purple-600">
  //                 250 WPM
  //               </div>
  //             </CardContent>
  //           </Card>
  //           <Card>
  //             <CardHeader>
  //               <CardTitle>Target Speed</CardTitle>
  //             </CardHeader>
  //             <CardContent className="text-center">
  //               <div className="text-4xl font-bold text-green-600">350 WPM</div>
  //             </CardContent>
  //           </Card>
  //           <Card>
  //             <CardHeader>
  //               <CardTitle>Progress</CardTitle>
  //             </CardHeader>
  //             <CardContent className="text-center">
  //               <div className="text-2xl font-bold text-blue-600">+40%</div>
  //             </CardContent>
  //           </Card>
  //         </div>
  //       </div>
  //       <Footer />
  //     </div>
  //   );
  // };

  // const Pricing = () => {
  //   return (
  //     <div className="min-h-screen bg-gray-50 flex flex-col">
  //       <Navbar />
  //       <div className="flex-grow container mx-auto px-6 py-12">
  //         <Button
  //           variant="ghost"
  //           className="mb-6"
  //           onClick={() => setCurrentPage("dashboard")}
  //         >
  //           <ChevronLeft className="mr-2" /> Back to Dashboard
  //         </Button>
  //         <h1 className="text-3xl font-bold mb-6">Choose Your Plan</h1>
  //         <div className="grid grid-cols-3 gap-6">
  //           <Card>
  //             <CardHeader>
  //               <CardTitle>Free Plan</CardTitle>
  //             </CardHeader>
  //             <CardContent>Basic reading speed measurement</CardContent>
  //             <CardFooter>
  //               <Button className="w-full">Select</Button>
  //             </CardFooter>
  //           </Card>
  //           <Card>
  //             <CardHeader>
  //               <CardTitle>Annual Plan</CardTitle>
  //             </CardHeader>
  //             <CardContent>Advanced analytics and tracking</CardContent>
  //             <CardFooter>
  //               <Button className="w-full">Select</Button>
  //             </CardFooter>
  //           </Card>
  //           <Card>
  //             <CardHeader>
  //               <CardTitle>Lifetime Plan</CardTitle>
  //             </CardHeader>
  //             <CardContent>Unlimited access forever</CardContent>
  //             <CardFooter>
  //               <Button className="w-full">Select</Button>
  //             </CardFooter>
  //           </Card>
  //         </div>
  //       </div>
  //       <Footer />
  //     </div>
  //   );
  // };

  // const Courses = () => {
  //   return (
  //     <div className="min-h-screen bg-gray-50 flex flex-col">
  //       <Navbar />
  //       <div className="flex-grow container mx-auto px-6 py-12">
  //         <Button
  //           variant="ghost"
  //           className="mb-6"
  //           onClick={() => setCurrentPage("dashboard")}
  //         >
  //           <ChevronLeft className="mr-2" /> Back to Dashboard
  //         </Button>
  //         <h1 className="text-3xl font-bold mb-6">Reading Speed Courses</h1>
  //         {/* Course content would be added here */}
  //       </div>
  //       <Footer />
  //     </div>
  //   );
  // };

  // const renderPage = () => {
  //   switch (currentPage) {
  //     case "landing":
  //       return <LandingPage />;
  //     case "reading-test":
  //       return <ReadingTestPage />;
  //     case "dashboard":
  //       return <Dashboard />;
  //     case "pricing":
  //       return <Pricing />;
  //     case "courses":
  //       return <Courses />;
  //     default:
  //       return <LandingPage />;
  //   }
  // };

  return (
    <div className="font-sans">
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 flex flex-col">
        <Navbar />
        <div className="flex-grow container mx-auto flex items-center justify-between px-6 py-12">
          <div className="w-1/2 space-y-6">
            <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
              Read Faster, <br />
              <span className="text-purple-600">Learn Smarter</span>
            </h1>
            <p className="text-xl text-gray-600">
              Ditch video tutorials and podcasts. Reading is the ultimate
              superpower of learning. Measure, improve, and accelerate your
              reading speed with ReadSwift.
            </p>
            <div className="flex space-x-4">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                Get Started for Free
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-50"
              >
                <Link href="/pricing">View Plans</Link>
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-gray-600">
              <TrendingUp className="text-green-500" />
              <span>Average user increases reading speed by 40%</span>
            </div>
          </div>
          <div className="w-1/2 flex justify-center">
            <div className="bg-white shadow-2xl rounded-2xl p-8">
              <BookOpen size={200} className="text-purple-300 mx-auto" />
              <p className="text-center mt-4 text-gray-500">
                Reading is not just about consuming words, its about
                understanding ideas
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
