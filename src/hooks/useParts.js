import axios from "axios";
import { useEffect, useState } from "react"

const useParts = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
        axios.get('parts.json').then(data => setParts(data.data));
    }, []);

    return [parts, setParts];
}

export default useParts;