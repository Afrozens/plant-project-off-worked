import { Outlet } from "react-router-dom";
import Header from "./Header";
import { AppWithProvider } from "@/AppWithProvider";

const PublicLayout = () => {

  return (
    <>
      <AppWithProvider>
        <Header />
        <section className="min-h-screen w-full bg-slate-100 px-12 pt-6 lg:px-36 md:px-16">
          <Outlet />
        </section>
      </AppWithProvider>
    </>
  );
};

export default PublicLayout;
