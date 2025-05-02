
import AnimeContainer from "@/components/AnimeContainer";
import Filters from "@/components/Filters";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";

const Home = async () => {

  return (
    <>
      <Navbar />
      <Landing />
      <Filters />
      <AnimeContainer/>
      <Footer />
    </>
  );
};

export default Home;
