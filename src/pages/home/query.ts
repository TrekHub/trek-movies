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
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch upcoming movies:", error);
    throw error;
  }
};

export const fetchPopularMovies = async () => {
  const accessToken = process.env.REACT_APP_TMDB_ACCESS_TOKEN;

  try {
    const response = await fetch(
      `${process.env.REACT_APP_TMDB_BASE_URL}/movie/popular?language=en-US&page=1`,
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

export const fetchTopRatedMovies = async () => {
  const accessToken = process.env.REACT_APP_TMDB_ACCESS_TOKEN;

  try {
    const response = await fetch(
      `${process.env.REACT_APP_TMDB_BASE_URL}/movie/top_rated?language=en-US&page=1`,
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
    console.error("Failed to fetch top rated movies:", error);
    throw error;
  }
};
