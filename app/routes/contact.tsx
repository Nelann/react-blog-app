import type { Route } from "./+types/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact | Nelan" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function AboutPage() {
  return <div>Contact Page</div>;
}
