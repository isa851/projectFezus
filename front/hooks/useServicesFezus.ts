import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export interface ServiceFezusItem {
    id: number;
    title: string;
    description: string;
}

export const useServicesFezus = () => {
    return useQuery<ServiceFezusItem[]>({
        queryKey: ['services-fezus'],
        queryFn: async () => {
            const response = await axios.get(`${API_URL}/api/landing/services-fezus/`);
            return response.data;
        }
    });
};
