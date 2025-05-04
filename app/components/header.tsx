import { href, Link, NavLink } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { ColorSchemeToggle } from "./color-scheme-toggle";

export default function Header() {
  return (
    <header>
      <nav className="max-w-3xl mx-auto px-4 flex items-center h-20 justify-between">
        <div className="flex items-center gap-x-4 lowercase h-5">
          <Link to="/">
            <Avatar>
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/49295389?v=4"
                alt="avatar"
                decoding="async"
                loading="lazy"
                width={32}
                height={32}
              />
              <AvatarFallback>Ne</AvatarFallback>
            </Avatar>
          </Link>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-foreground"
                : "text-slate-600/30 hover:text-zinc-600 dark:text-slate-200/50 dark:hover:text-slate-200 transition-colors duration-150"
            }
            to="/"
            viewTransition
          >
            Home
          </NavLink>
          <Separator orientation="vertical" className="bg-slate-300/60" />
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-foreground"
                : "text-slate-600/30 hover:text-zinc-600 dark:text-slate-200/50 dark:hover:text-slate-200 transition-colors duration-150"
            }
            to="/blog"
            viewTransition
          >
            Blog
          </NavLink>
          <Separator orientation="vertical" className="bg-slate-300/60" />
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-foreground"
                : "text-slate-600/30 hover:text-zinc-600 dark:text-slate-200/50 dark:hover:text-slate-200 transition-colors duration-150"
            }
            to="/contact"
            viewTransition
          >
            Contact
          </NavLink>
        </div>
        <div className="flex items-center gap-x-3">
          <ColorSchemeToggle action={href("/actions/color-scheme")} />
        </div>
      </nav>
    </header>
  );
}
