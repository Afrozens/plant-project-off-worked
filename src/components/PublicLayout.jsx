import { Outlet } from "react-router-dom";
import { motion } from "framer-motion"
import Header from "./Header";
import { AppWithProvider } from "@/AppWithProvider";

const PublicLayout = () => {
  return (
    <>
      <AppWithProvider>
        <Header />
        <motion.section initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="min-h-screen w-full bg-slate-100 px-12 pt-6 lg:px-36 md:px-16">
          <Outlet />
        </motion.section>
      </AppWithProvider>
    </>
  );
};

export default PublicLayout;
