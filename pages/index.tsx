import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainSection from "../components/MainSection";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <MainSection />
      <Footer />
    </>
  );
};

export default Home;
