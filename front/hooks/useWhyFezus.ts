import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export interface WhyFezusItem {
    id: number;
    title: string;
    description: string;
}

export const useWhyFezus = () => {
    return useQuery<WhyFezusItem[]>({
        queryKey: ['why-fezus'],
        queryFn: async () => {
            const response = await axios.get(`${API_URL}/api/landing/why-fezus/`);
            return response.data;
        }
    });
};
