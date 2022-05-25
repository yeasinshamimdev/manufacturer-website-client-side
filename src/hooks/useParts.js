import { useQuery } from 'react-query'

const useParts = () => {
    const { data: parts, isLoading, refetch, isError } = useQuery('repoData', () =>
        fetch('http://localhost:5000/parts').then(res => res.json())
    )

    return [parts, isLoading, refetch, isError]
}

export default useParts;