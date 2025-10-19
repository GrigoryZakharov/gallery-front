import axiosInstance from "./axiosInstance";

export async function getAuthors() {
    const response = await axiosInstance.get(`/authors/`);
    return response.data;
}