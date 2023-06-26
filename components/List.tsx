import { FlashList } from '@shopify/flash-list'
import React, { useCallback, useMemo } from 'react'
import { usePhotos } from '../hooks/usePhotos'
import { ESTIMATED_ITEM_HEIGHT, ListItem, ListItemProps } from './ListItem'
import { RefreshControl, StyleSheet } from 'react-native'
import { useRefreshing } from '../hooks/useRefreshing'
import { DEFAULT_SPACING } from '../services/theme'
import { ListItemSeparator } from './ListItemSeparator'
import { ListLoading } from './ListLoading'
import { ListError } from './ListError'


function renderItem({ item }: ListItemProps) {
  return <ListItem item={item} />
}

export  function List() {
  const { data, isLoading, isError, refetch, isFetchingNextPage, hasNextPage, fetchNextPage } = usePhotos()
  const pagesData = data?.pages?.flatMap(page => page?.photos)
  const [isRefreshing, onRefresh] = useRefreshing(refetch)

  const onEndReached = useCallback(
    () => {
      if (hasNextPage && !isFetchingNextPage) {
        fetchNextPage()
      }
    },
    [fetchNextPage, hasNextPage, isFetchingNextPage],
  )

  const refreshControl = useMemo(() => (
    <RefreshControl
      refreshing={isRefreshing}
      onRefresh={onRefresh}
    />
  ), [isRefreshing, onRefresh])

  if (isLoading) {
    return <ListLoading />
  }

  if (isError) {
    return <ListError refetch={refetch} />
  }

  return (
    <FlashList
      estimatedItemSize={ESTIMATED_ITEM_HEIGHT}
      contentContainerStyle={styles.list}
      ItemSeparatorComponent={ListItemSeparator}
      refreshControl={refreshControl}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      data={pagesData}
      renderItem={renderItem}
    />
  )
}

const styles = StyleSheet.create({
  list: {
    padding: DEFAULT_SPACING
  },
})