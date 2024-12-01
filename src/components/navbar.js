// components/navbar.jsx
import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const navbar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white shadow-md shadow pl-10 pr-36 pb-4 pt-2">
      <h1 className="text-xl text-black-600">VaayuDrishti</h1>    
      <NavigationMenu>
        <NavigationMenuList className="flex items-center px-96 gap-8">
          <NavigationMenuItem>
            <Link href="/users" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Local users
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/researchpanel" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Researchers
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/privatecompanies" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Private Companies
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>   
          </NavigationMenu>
        
    </div>
  );
};

export default navbar;

