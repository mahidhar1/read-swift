"use client";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { BookOpen, LogIn } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center space-x-4">
          <BookOpen className="text-purple-600" size={32} />
          <h1 className="text-2xl font-bold text-gray-800">ReadSwift</h1>
        </div>

        <NavigationMenu>
          <NavigationMenuList className="flex space-x-4">
            {isAuthenticated ? (
              <>
                <NavigationMenuItem>
                  <Button variant="ghost">Dashboard</Button>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Button variant="ghost">Pricing</Button>
                </NavigationMenuItem>
                <NavigationMenuItem></NavigationMenuItem>
              </>
            ) : (
              <NavigationMenuItem>
                <Button
                  onClick={() => setIsAuthenticated(true)}
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                >
                  <LogIn className="mr-2" /> Sign In
                </Button>
              </NavigationMenuItem>
            )}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default Navbar;
