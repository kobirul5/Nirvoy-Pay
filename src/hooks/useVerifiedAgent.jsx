import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";

const useVerifiedAgent = () => {
     const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const { data: verifiedAgent = [], refetch } = useQuery({
        queryKey: ['verifiedAgent'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/agent/verify/${user?.email}`);
            return res.data;
        }
    })
    return [verifiedAgent, refetch]
};

export default useVerifiedAgent;