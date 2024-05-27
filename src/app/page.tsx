import AnimeContainer from "@/components/AnimeContainer";
import Filters from "@/components/Filters";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";

// 1. qnd o cara digitar na home page, a gente joga ele pra search page
// 2. guardar a query da home page e enviar ela pra search page, parece q eh jogo botar no query param
// 3. primeiro lugar, pegar o query param do url e jogar como valor do input
// 4. e se houver valor, no query/param/input, a gente faz um fetch

const Home = async () => {
  const queryParams = {
    search: "",
    Genres: "",
    Year: "",
    ["Airing Status"]: "",
    Format: "",
    Season: "",
  };

  const fetchRows = async () => {
    const trendingResponse = await fetch(
      `https://kitsu.io/api/edge/trending/anime?limit=40?`
    );
   
    const { data: trendingData } = await trendingResponse.json();

    const popularResponse = await fetch(
      `https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=current&page%5Blimit%5D=6&sort=-user_count`
    );

    const { data: popularData } = await popularResponse.json();

    const upcominResponse = await fetch(
      `https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=upcoming&page%5Blimit%5D=6&sort=-user_count`
    );

    const { data: upcomingData } = await upcominResponse.json();

    const allTimeResponse = await fetch(
      `https://kitsu.io/api/edge/trending/manga?page[limit]=0&sort=-canonicalTitle`
    );

    const { data: allTimeData } = await allTimeResponse.json();

    return [
      {
        title: "Trending Anime",
        data: trendingData,
      },
      {
        title: "Popular This Season",
        data: popularData,
      },
      {
        title: "Upcoming Next Season",
        data: upcomingData,
      },
      {
        title: "All Time Popular",
        data: allTimeData,
      },
    ];
  };

  const rowsData = await fetchRows();

  return (
    <>
      <Navbar />
      <Landing />
      <Filters queryParams={queryParams} />
      <AnimeContainer rowsData={rowsData} />
      <Footer/>
    </>
  );
};

export default Home;
