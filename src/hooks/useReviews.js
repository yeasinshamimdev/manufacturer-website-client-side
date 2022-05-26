import axios from "axios"
import { useEffect, useState } from "react";

const useReviews = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/review').then(data => setReview(data.data));
    }, []);
    return [review];
};

export default useReviews;