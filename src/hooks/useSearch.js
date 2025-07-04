import { useState, useCallback } from 'react';

export const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchHistory, setSearchHistory] = useState(() => {
    try {
      const saved = localStorage.getItem('searchHistory');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const performSearch = useCallback(async (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    
    try {
      // Mock search - in a real app, this would be an API call
      const mockResults = [
        { id: 1, title: 'Product 1', description: 'Description 1', price: 29.99 },
        { id: 2, title: 'Product 2', description: 'Description 2', price: 39.99 },
        { id: 3, title: 'Product 3', description: 'Description 3', price: 49.99 }
      ].filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
      );

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));
      
      setSearchResults(mockResults);
      
      // Add to search history
      addToSearchHistory(query);
    } catch (error) {
      console.error('Search failed:', error);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  }, []);

  const addToSearchHistory = (query) => {
    const trimmedQuery = query.trim();
    if (!trimmedQuery) return;

    setSearchHistory(prev => {
      const filtered = prev.filter(item => item !== trimmedQuery);
      const newHistory = [trimmedQuery, ...filtered].slice(0, 10); // Keep last 10 searches
      localStorage.setItem('searchHistory', JSON.stringify(newHistory));
      return newHistory;
    });
  };

  const clearSearchHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem('searchHistory');
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    if (query.trim()) {
      performSearch(query);
    } else {
      setSearchResults([]);
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
  };

  return {
    searchQuery,
    searchResults,
    isSearching,
    searchHistory,
    handleSearchChange,
    performSearch,
    clearSearch,
    clearSearchHistory,
    setSearchQuery
  };
};