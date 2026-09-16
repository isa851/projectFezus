import { useMutation } from "@tanstack/react-query";
import { api } from "../lib/api";

interface ForumData {
    telegram: string;
    company_name: string;
    description: string;
}

export const useForumSubmit = () => {
    return useMutation({
        mutationFn: async (data: ForumData) => {
            const response = await api.post("/forums/", data);
            return response.data;
        },
    });
};
