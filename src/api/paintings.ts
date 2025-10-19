import axiosInstance from "./axiosInstance";

export async function getPaintings(limit: number, searchTerm: string, page: number) {
    const response = await axiosInstance.get("/paintings", {
        params: {
        _page : page,
        _limit: limit,
        q: searchTerm,
    }});
    console.log(response.data);
    return response.data;
}


