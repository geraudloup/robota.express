import Navbar from "./NavBar";
import Footer from "./Footer";
import React from "react";

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}