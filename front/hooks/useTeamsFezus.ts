import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export interface TeamFezusItem {
    id: number;
    name: string;
    role: string;
    image: string;
}

export const useTeamsFezus = () => {
    return useQuery<TeamFezusItem[]>({
        queryKey: ['teams-fezus'],
        queryFn: async () => {
            const response = await axios.get(`${API_URL}/api/landing/teams/`);
            return response.data;
        }
    });
};
