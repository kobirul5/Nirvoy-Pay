import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const useUser = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();

    const { data: userDB = {}, isLoading, isError, error, refetch } = useQuery({
        queryKey: ['userDBk', user?.email],
        // enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosPublic.get(`/user/${user?.email}`);
            console.log(res.data);
            return res.data;
        }
    });

    return [userDB, isLoading, isError, error, refetch];
};

export default useUser;
