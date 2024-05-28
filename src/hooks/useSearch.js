import { useMemo } from "react";

export const useSearch = (items, query) => {

  const sortedAndSearchedPosts = useMemo( () => {
    return items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
  }, [query, items]);

  return sortedAndSearchedPosts;
}