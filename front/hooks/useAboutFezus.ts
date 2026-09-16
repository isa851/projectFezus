import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export interface AboutFezusData {
    title: string;
    description1: string;
    description2: string;
    image: string;
}

export const useAboutFezus = () => {
    return useQuery<AboutFezusData[]>({
        queryKey: ['about-fezus'],
        queryFn: async () => {
            const response = await axios.get(`${API_URL}/api/landing/about-fezus/`);
            return response.data;
        }
    });
};
