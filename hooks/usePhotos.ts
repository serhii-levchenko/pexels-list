import { useInfiniteQuery } from '@tanstack/react-query'
import { pexelsClient } from '../services/api'
import { Photos } from 'pexels'

function fetchCuratedPhotos({ pageParam = 0 }): Promise<Photos>  {
  // fetch error is handled by react-query
  return pexelsClient.photos.curated({ page: pageParam })
}

export function usePhotos() {
  return useInfiniteQuery({
    queryKey: ['photos'],
    queryFn: fetchCuratedPhotos,
    // caching is done here
    staleTime: 10 * (60 * 1000), // 10 minutes
    cacheTime: 15 * (60 * 1000), // 15 minutes
    getNextPageParam: lastPage => lastPage?.page + 1,
    getPreviousPageParam: firstPage => firstPage?.page - 1,
  })
}