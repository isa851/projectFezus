import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export interface StageFezusItem {
    id: number;
    title: string;
    description: string;
    number: number;
}

export const useStagesFezus = () => {
    return useQuery<StageFezusItem[]>({
        queryKey: ['stages-fezus'],
        queryFn: async () => {
            const response = await axios.get(`${API_URL}/api/landing/stages-fezus/`);
            return response.data;
        }
    });
};
