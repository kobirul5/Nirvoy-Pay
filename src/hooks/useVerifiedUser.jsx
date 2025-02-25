import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";

const useVerifiedUser = () => {
     const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const { data: verifiedUser = [], refetch } = useQuery({
        queryKey: ['verifiedUser'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/verify/${user?.email}`);
            return res.data;
        }
    })
    return [verifiedUser, refetch]
};

export default useVerifiedUser;