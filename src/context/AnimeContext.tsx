"use client";
import { useSearchParams } from "next/navigation";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type AnimeContextType = {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  queryParams: Record<string, string>;
  rowsData: RowsData;
};

export type Anime = {
  id: string;
  attributes: {
    titles: {
      en: string;
    };
    canonicalTitle: string;
    posterImage: {
      large: string;
    };
    averageRating: number;
    episodeLength: string;
    status: string;
    ageRatingGuide: string;
    subtype: string;
  };
};

export type RowsData = {
  title: string;
  data: Anime[];
}[]



export const AnimeContext = createContext<AnimeContextType | undefined>(
  undefined
);

export const useAnimes = () => {
  const context = useContext(AnimeContext);
  if (!context) {
    throw new Error("useAnimes must be used within an AnimeProvider");
  }
  return context;
};

export const AnimesProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [rowsData, setRowsData] = useState<RowsData>([]);

  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams.toString());

  const queryParams = {
    Search: params.get("Search") || "",
    Genres: params.get("Genres") || "",
    Year: params.get("Year") || "",
    ["Airing Status"]: params.get("Airing Status") || "",
    Format: params.get("Format") || "",
    Season: params.get("Year") || "",
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

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      const data = await fetchRows();
      setRowsData(data);
      setIsLoading(false);
    };

    loadData();
  }, []);

  return (
    <AnimeContext.Provider
      value={{ isLoading, setIsLoading, rowsData, queryParams }}
    >
      {children}
    </AnimeContext.Provider>
  );
};
