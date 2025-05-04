import { Form } from "react-router";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function ColorSchemeToggle({ action }: { action: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={5}>
        <Form navigate={false} method="POST" action={action}>
          <DropdownMenuItem asChild>
            <Button
              name="color-scheme"
              value="dark"
              variant="ghost"
              className="w-full"
            >
              Dark
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Button
              name="color-scheme"
              value="light"
              variant="ghost"
              className="w-full"
            >
              Light
            </Button>
          </DropdownMenuItem>
        </Form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
