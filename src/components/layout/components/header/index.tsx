import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";

export function Header() {
  return (
    <NavigationMenu className="w-full">
      <NavigationMenuList>
        <NavigationMenuItem>
          <SidebarTrigger />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
