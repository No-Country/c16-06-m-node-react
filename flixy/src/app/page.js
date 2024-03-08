'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import SearchBar from '@/components/SearchBar/SearchBar';
import DocumentaryCard from '@/components/CardDocumentary/CardDocumentary';
import Pagination from '@/components/Pagination/Pagination';
import Filter from '@/components/Filter/Filter';
import StreamingFilter from '@/components/StreamingFilter/StreamingFilter';
import TopDocumentary from '@/components/TopDocumentary/TopDocumentary';
import Navbar from '@/components/NavBar/NavBar';
import NewDocumentary from '@/components/NewDocumentary/NewDocumentary';
import Carousel from '@/components/Carousel/Carousel';
import {Funnel} from "@phosphor-icons/react/dist/ssr"
import styles from './page.module.css';
import data from '@/data/data';
import IndieDocumentary from '../components/IndieDocumentary/IndieDocumentary';
import MainPage from '@/components/MainPage/MainPage';
import Footer from '@/components/Footer/Footer';

const NewDocumentaryList = [{titulo:"Ovnis: Proyectos de alto secreto desclasificados", fecha:"2021"}, {titulo:"Citizenfour: Las revelaciones de Edward Snowden", fecha:"2025"}]


const ITEMS_PER_PAGE = 5;

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchResults, setSearchResults] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    year: null,
    category: null,
    score: null,
  });
  const [platformFilter, setPlatformFilter] = useState('all');

  const handleSearch = (query) => {
    const results = data.filter(
      (documentary) =>
        documentary.nameOriginal.toLowerCase().includes(query) ||
        documentary.nameSpanish.toLowerCase().includes(query)
    );

    setSearchResults(results);
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleClearSearch = () => {
    setSearchResults(null);
    setSearchQuery('');
  };

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters({ ...selectedFilters, [filterType]: value === 'all' ? null : value });
  };



  const applyFilters = (documentary, index) => {
    const { year, category, score } = selectedFilters;
    const { streaming } = documentary;
  
    if (year) {
      const [startYear, endYear] = year.split('-');
      const documentaryYear = parseInt(documentary.year, 10);
  
      if (documentaryYear < parseInt(startYear, 10) || documentaryYear > parseInt(endYear, 10)) {
        return false;
      }
    }
  
    if (score) {
      const [startScore, endScore] = score.split(' - ');
  
      if (
        parseFloat(documentary.score) < parseFloat(startScore) ||
        parseFloat(documentary.score) > parseFloat(endScore)
      ) {
        return false;
      }
    }
  
    if (category && !documentary.category.includes(category)) {
      return false;
    }

    if (platformFilter !== 'all' && !streaming.includes(platformFilter)) {
      return false;
    }

    return true;
  };

  const totalFilteredItems = searchResults ? searchResults.length : data.filter(applyFilters).length;

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentFilteredData = searchResults
    ? searchResults.slice(indexOfFirstItem, indexOfLastItem)
    : data.filter(applyFilters).slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleClearPlatformFilter = () => {
    setPlatformFilter('all');
  };

  return (
    <>
      <Navbar/>
      <MainPage/>
      <Footer/>
    </>
  )
}

export default Home