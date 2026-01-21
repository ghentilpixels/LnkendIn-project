import React from 'react';
import { Video, Image, FileText } from 'lucide-react';
import { create } from 'zustand';

// Zustand store
const usePostStore = create((set) => ({
  postContent: '',
  sortBy: 'Top',
  setPostContent: (content) => set({ postContent: content }),
  setSortBy: (sort) => set({ sortBy: sort }),
}));