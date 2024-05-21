export const mutationLogin = async () => {
  const accessToken = process.env.REACT_APP_TMDB_ACCESS_TOKEN;

  if (!accessToken) {
    throw new Error(
      "Access token is not defined. Please check your environment variables."
    );
  }

  try {
    const res = await fetch(
      `${process.env.REACT_APP_TMDB_BASE_URL}/authentication/guest_session/new`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error creating guest session:", error);
    throw error;
  }
};
