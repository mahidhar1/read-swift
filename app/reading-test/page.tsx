"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import ResultsDialog from "./ResultsDialog";

const generateSampleText = () => {
  return `In the heart of a bustling city, there lived a curious researcher who had dedicated her life to understanding the intricate patterns of human behavior. Her days were filled with observing, analyzing, and deciphering the complex interactions that defined social dynamics. 

The laboratory where she worked was a marvel of modern technology, equipped with state-of-the-art tools that allowed her to peer into the depths of human cognition. Sensors, computers, and advanced imaging equipment surrounded her, each device a testament to humanity's relentless pursuit of knowledge.

On this particular morning, she was investigating a fascinating phenomenon related to reading comprehension and speed. The research had implications far beyond academic circles - it could potentially revolutionize educational approaches, helping individuals optimize their learning capabilities.

As she prepared her latest experiment, she reflected on the journey that brought her to this moment. Years of education, countless hours of research, and an unwavering passion for understanding human potential had converged in this small laboratory...`;
  // Continued to reach approximately 1000 words
};

const ReadingTest = () => {
  const [readingText, setReadingText] = useState("");
  const [readingSpeed, setReadingSpeed] = useState(0);
  const [startTime, setStartTime] = useState(Date.now());

  const calculateReadingSpeed = () => {
    const endTime = Date.now();
    const totalTime = (endTime - (startTime ?? 0)) / 60000; // time in minutes
    const wordCount = readingText.split(/\s+/).length;
    const speed = Math.round(wordCount / totalTime);
    setReadingSpeed(speed);
  };

  const handleGeneratedTextStart = () => {
    const text = generateSampleText();
    setReadingText(text);
    setStartTime(Date.now());
  };

  useEffect(() => {
    handleGeneratedTextStart();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <Card className="w-[600px] mx-auto mt-10">
          <CardHeader>
            <CardTitle>Reading Test</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[400px] overflow-y-auto p-4 border rounded">
              {readingText}
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" onClick={calculateReadingSpeed}>
              Done Reading
            </Button>
          </CardFooter>
        </Card>
        <ResultsDialog
          readingSpeed={readingSpeed}
          open={readingSpeed > 0}
        ></ResultsDialog>

        <Footer />
      </div>
    </>
  );
};

export default ReadingTest;
