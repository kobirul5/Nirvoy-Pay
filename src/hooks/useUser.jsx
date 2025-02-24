
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const useUser = () => {
    const {user} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic();
    const { data: userDB = [], isLoading,  refetch } = useQuery({
        queryKey: ['userDB'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/user/${user?.email}`);
            return res.data;
        }
    })
    return [userDB, isLoading, refetch]
};

export default useUser;