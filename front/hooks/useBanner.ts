import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export interface BannerData {
    title: string;
    description: string;
    image: string;
}

export const useBanner = () => {
    return useQuery<BannerData[]>({
        queryKey: ['banner'],
        queryFn: async () => {
            const response = await axios.get(`${API_URL}/api/landing/banners/`);
            return response.data;
        }
    });
};
