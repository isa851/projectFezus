import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export interface TechStackCategory {
    id: number;
    category: string;
    icon_name: string;
    skills: string;
}

export const useTechnologyStack = () => {
    return useQuery<TechStackCategory[]>({
        queryKey: ['technology-stack'],
        queryFn: async () => {
            const response = await axios.get(`${API_URL}/api/landing/technology-stack/`);
            return response.data;
        }
    });
};
