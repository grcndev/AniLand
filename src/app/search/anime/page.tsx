import Filters from "@/components/Filters";
import FiltersResult from "@/components/FiltersResult";
import Navbar from "@/components/Navbar";


const SearchPage = async ({ searchParams }) => {
  const search = searchParams.search;
  const genres = searchParams.Genres;
  const year = searchParams.Year;
  const airing = searchParams["Airing Status"];
  const season = searchParams.Season;
  const format = searchParams.Format;

  const queryParams = {
    search: search || "",
    Genres: genres || "",
    Year: year || "",
    ["Airing Status"]: airing || "",
    Format: format || "",
    Season: season || "",
  };

  const handleFetch = async () => {
    let filters = "";
    if (queryParams.search) {
      filters += `&filter[text]=${queryParams.search}`;
    }
    console.log(queryParams.search);
    if (queryParams.Genres) {
      filters += `&filter[categories]=${queryParams.Genres}`;
    }
    if (queryParams.Year) {
      filters += `&filter[year]=${queryParams.Year}`;
    }
    if (queryParams["Airing Status"]) {
      filters += `&filter[status]=${queryParams["Airing Status"]}`;
    }
    if (queryParams.Format) {
      filters += `&filter[subtype]=${queryParams.Format}`;
    }
    if (queryParams.Season) {
      filters += `&filter%5Bseason%5D=${queryParams.Season}`;
    }

    const res = await fetch(`https://kitsu.io/api/edge/anime?${filters}`);
    return await res.json();
  };

  const results = await handleFetch();

  return (
    <>
      <Navbar />
      <Filters queryParams={queryParams} />
      <FiltersResult results={results} />
    </>
  );
};

export default SearchPage;
