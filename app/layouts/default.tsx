import { Outlet } from "react-router";
import Header from "~/components/header";

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <Outlet />
      </main>
    </>
  );
}
