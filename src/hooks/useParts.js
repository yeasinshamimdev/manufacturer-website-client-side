import { useQuery } from 'react-query'

const useParts = () => {
    const { data: parts, isLoading, refetch, isError } = useQuery('repoData', () =>
        fetch('https://agile-earth-86444.herokuapp.com/parts').then(res => res.json())
    )

    return [parts, isLoading, refetch, isError]
}

export default useParts;