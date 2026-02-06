import type { ReactNode } from "react";
import Navbar from "./Navbar.tsx";
import Footer from "./Footer.tsx";

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout = ({children}: MainLayoutProps) => {
    return (
        <div className="min-h-screen bg-secondary">
            {/* We'll place header/navbar here */}
            <Navbar />
            <main className="min-h-screen">
                {children}
            </main>
            {/* We'll place footer here */}
            <Footer />
        </div>
    );
}

export default MainLayout;