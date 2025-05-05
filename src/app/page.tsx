'use client'
import AnimeContainer from "@/components/ui/AnimeContainer";
import Filters from "@/components/search/filters/Filters";
import Landing from "@/components/layout/landing/Landing";
import Navbar from "@/components/layout/Navbar";

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
