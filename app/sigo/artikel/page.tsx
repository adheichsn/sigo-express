import React from "react";
import ArtikelPages from "./ArtikelPages";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Artikel | SIGO Express",
    description: "Generated by create next app",
};


const ArtikelPage = () => {
  return (
    <ArtikelPages />
  );
};

export default ArtikelPage;