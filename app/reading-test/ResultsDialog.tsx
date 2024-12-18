"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { DialogHeader } from "@/components/ui/dialog";
import { Dialog, DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import React from "react";

type ResultsDialogProps = {
  readingSpeed: number;
  open: boolean;
};

const ResultsDialog: React.FC<ResultsDialogProps> = ({
  readingSpeed,
  open,
}) => {
  return (
    <Dialog open={open}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Results</DialogTitle>
        </DialogHeader>
        <Card className="w-[400px] mx-auto mt-10">
          <CardHeader>
            <CardTitle>Your Reading Speed</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-4xl font-bold mb-4">{readingSpeed} WPM</div>
            <p>Sign up to get detailed analysis!</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Sign Up</Button>
          </CardFooter>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default ResultsDialog;
