import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import axiosPrivate from '../api/axiosPrivate';
import auth from '../firebase.init';

const useBooking = () => {
    const [user] = useAuthState(auth);
    const email = user.email;
    const url = `http://localhost:5000/booking/email?email=${email}`;

    const { data: booking, isLoading, refetch, isError } = useQuery(['booking', email], () =>
        axiosPrivate.get(url)
    )

    return [booking, isLoading, refetch, isError];
}

export default useBooking;