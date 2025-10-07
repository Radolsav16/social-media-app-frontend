import type { Metadata } from "next";
import './App.scss'
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import StoreProvider from "./StoreProvider";
import { ToastContainer } from "react-toastify";
export const metadata: Metadata = {
  title: "Social Media App",
  description: "Best Social Media App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <StoreProvider>
        <Header/>
          {children}
          <ToastContainer position="top-right" autoClose={4000} theme="colored" />
          <Footer />
          </StoreProvider>
      </body>
    </html>
  );
}
