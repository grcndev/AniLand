
export function buildAnimeUrl({
    search = "",
    genres = "",
    year = "",
    airing = "",
    format = "",
    season = "",
  }: {
    search?: string;
    genres?: string;
    year?: string;
    airing?: string;
    format?: string;
    season?: string;
  }) {
    let url = "https://kitsu.io/api/edge/anime?";
  
    if (search) {
      url += `&filter[text]=${encodeURIComponent(search)}`;
    }
    if (genres.length > 0) {
      url += `&filter[categories]=${encodeURIComponent(genres)}`;
    }
    if (year.length > 0) {
      url += `&filter[year]=${encodeURIComponent(year)}`;
    }
    if (airing.length > 0) {
      url += `&filter[status]=${encodeURIComponent(airing)}`;
    }
    if (format.length > 0) {
      url += `&filter[subtype]=${encodeURIComponent(format)}`;
    }
    if (season.length > 0) {
      url += `&filter[season]=${encodeURIComponent(season)}`;
    }
  
   
    if (url === "https://kitsu.io/api/edge/anime?") {
      return url;
    }
  
    
    return url.replace("anime?&", "anime?");
  }