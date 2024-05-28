export const fetchMovieDetails = async (id: string) => {
    const accessToken = process.env.REACT_APP_TMDB_ACCESS_TOKEN;
  
    try {
      const response = await fetch(
        `${process.env.REACT_APP_TMDB_BASE_URL}/movie/${id}?language=en-US`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch popular movies:", error);
      throw error;
    }
  };