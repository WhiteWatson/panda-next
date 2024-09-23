const baseUrl = "https://www.znooj.com:8443";

export const getInformation = async (
  moduleCode: string = "FIRST_TOP1_RESUME"
) => {
  //   const headers = new Headers({
  //     "User-Agent": "Apifox/1.0.0 (https://apifox.com)",
  //   });

  try {
    const response = await fetch(
      `${baseUrl}/housekeep/homePageConfig/queryMoudleConfigVoByCode?moudleCode=${moduleCode}`,
      {
        method: "GET",
        // headers,
        redirect: "follow",
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching information:", error);
    throw error;
  }
};
