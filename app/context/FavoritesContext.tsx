import React, { createContext, useContext, useMemo, useState } from 'react';
import { Club } from '../data/mockClubs';

export type FavoritesContextValue = {
  favorites: Club[];
  addToFavorites: (club: Club) => void;
  removeFromFavorites: (clubId: string) => void;
  isFavorite: (clubId: string) => boolean;
  toggleFavorite: (club: Club) => void;
};

const FavoritesContext = createContext<FavoritesContextValue | undefined>(undefined);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<Club[]>([]);

  const addToFavorites = (club: Club) => {
    setFavorites(prev => {
      if (prev.find(f => f.id === club.id)) return prev;
      return [...prev, club];
    });
  };

  const removeFromFavorites = (clubId: string) => {
    setFavorites(prev => prev.filter(f => f.id !== clubId));
  };

  const isFavorite = (clubId: string) => {
    return favorites.some(f => f.id === clubId);
  };

  const toggleFavorite = (club: Club) => {
    if (isFavorite(club.id)) {
      removeFromFavorites(club.id);
    } else {
      addToFavorites(club);
    }
  };

  const value = useMemo<FavoritesContextValue>(() => ({
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    toggleFavorite,
  }), [favorites]);

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error('useFavorites must be used within a FavoritesProvider');
  return ctx;
} 