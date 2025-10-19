import axiosInstance from "./axiosInstance";

export async function getLocations() {
    const response = await axiosInstance.get(`/locations`);
    return response.data;
}