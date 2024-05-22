export const fetchUpcomingMovies = async () => {
    const accessToken = process.env.REACT_APP_TMDB_ACCESS_TOKEN;
  
    try {
      const response = await fetch(
        `${process.env.REACT_APP_TMDB_BASE_URL}/movie/upcoming?language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );
  
      if (!response.ok) {
        // Handle HTTP errors
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
  
    } catch (error) {
      // Handle network or other errors
      console.error("Failed to fetch upcoming movies:", error);
      throw error; // Re-throw the error to handle it in the calling code if necessary
    }
  };
  