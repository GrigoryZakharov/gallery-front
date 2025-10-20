import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getPaintings } from '../../api/paintings';
import { getAuthors } from '../../api/authors';
import { getLocations } from '../../api/locations';
import PaintingCard from '../../components/PaintingCard/PaintingCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import Pagination from '../../components/Pagination/Pagination';
import Header from '../../components/Header/Header';
import styles from './HomePage.module.scss';

function HomePage() {
    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const BASE_URL = "https://test-front.framework.team";

    const { data: paintingsRaw = [], error, status } = useQuery<any[], Error>(
        ({
            queryKey: ['paintings', page, searchTerm],
            queryFn: () => getPaintings(6, searchTerm, page),
            keepPreviousData: true,
        } as any)
    );

    const paintings = (paintingsRaw ?? []) as any[];

    const {data: authors = []} = useQuery({
        queryKey: ['authors'],
        queryFn: () => getAuthors(),
    });

    const {data: locations = []} = useQuery({
        queryKey: ['locations'],
        queryFn: () => getLocations(),
    });

    const paintingsDetails = paintings.map((p: any) => ({
    ...p,
    author: authors.find((a: any) => a.id === p.authorId)?.name || 'Unknown Author',
    location: locations.find((l: any) => l.id === p.locationId)?.location || 'Unknown Location',
    }));


    useEffect(() => { setPage(1); }, [searchTerm]);

    if (status === 'error') {
        return <div>Error: {(error as Error).message}</div>;
    }

    return (
        <div>
            <Header />
            <div className={styles.searchBar}>
                <SearchBar value={searchTerm} onChange={setSearchTerm} />
            </div>
            <div className = {styles.gallery}>
                {paintingsDetails.length > 0 ? (
                    paintingsDetails.map((painting: any) => (
                        <PaintingCard key={painting.id} {...painting} BASE_URL={BASE_URL} />
                    ))
                ) : (
                    <div>
                    <h4>No matches for <span className={styles.highlight}>{searchTerm}</span></h4>
                    <span>Please try again with a different spelling or keywords.</span>
                    </div>
                )}
            </div>
            {!searchTerm && (
            <Pagination page={page} pageQty={6} setPage={setPage} />
            )}
        </div>
    );
}



export default HomePage;