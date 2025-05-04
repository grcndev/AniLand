'use client'
import AnimeContainer from "@/components/AnimeContainer";
import Filters from "@/components/Filters";
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
      <>
        <Navbar />
        <Landing />
        <Filters />
        <AnimeContainer/>
      </>
  );
};

export default Home;
