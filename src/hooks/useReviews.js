import axios from "axios"
import { useEffect, useState } from "react";

const useReviews = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        axios.get('https://agile-earth-86444.herokuapp.com/review').then(data => setReview(data.data));
    }, []);
    return [review];
};

export default useReviews;