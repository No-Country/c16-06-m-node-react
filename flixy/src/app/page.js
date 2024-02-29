'use client'
import React, { useState } from 'react';
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

const NewDocumentaryList = [{titulo:"Ovnis: Proyectos de alto secreto desclasificados", fecha:"2021"}, {titulo:"Citizenfour: Las revelaciones de Edward Snowden", fecha:"2025"}]


const ITEMS_PER_PAGE = 6;

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
    <div className={styles.mainDiv}>
      {/* <Navbar /> */}
      <Carousel/>
      <h1>Mundo Documental</h1>
      <p>En un solo lugar</p>

      <div>
        <SearchBar onSearch={handleSearch} onClearSearch={handleClearSearch} />
      </div>
      <div>
      <StreamingFilter
  selectedValue={platformFilter}
  onChange={(value) => {
    console.log('Selected Platform:', value);
    setPlatformFilter(value);
  }}
  onClear={() => setPlatformFilter('all')} 
/>
      </div>
      <div>
        <div className={styles.filters} style={{ display: 'flex', gap: '10px' }}>
          <h3><Funnel size={32} /></h3>
          <Filter
            label="Año"
            options={['1950-1959', '1960-1969', '1970-1779', '1980-1989', '1990-1999', '2000-2009', '2010-2019', '2020-2024']}
            selectedValue={selectedFilters.year}
            onChange={(value) => handleFilterChange('year', value)}
          />
          <Filter
            label="Calificación"
            options={['7.0 - 7.4', '7.5 - 7.9', '8.0 - 8.4', '8.5 - 8.9', '9.0 - 9.4', '9.5 - 10']}
            selectedValue={selectedFilters.score}
            onChange={(value) => handleFilterChange('score', value)}
          />
          <Filter
            label="Categorias"
            options={['Comedy', 'Drama', 'Biography', 'Crime', 'Adventure', 'Sport', 'Documentary', 'Indie', 'History', 'Warlike', 'Music', 'Short Film', 'News', 'Family', 'Suspense']}
            selectedValue={selectedFilters.category}
            onChange={(value) => handleFilterChange('category', value)}
          />
        </div>
      </div>
      <h3>Lista de Documentales</h3>
      <div className={styles.documentaryList}>
        {currentFilteredData.length > 0 ? (
          currentFilteredData.map((documentary) => (
            <DocumentaryCard key={documentary.id} documentary={documentary} />
          ))
        ) : (
          <p>No se encontraron documentales que cumplan con los filtros seleccionados.</p>
        )}
      </div>
      <Pagination
        itemsPerPage={ITEMS_PER_PAGE}
        totalItems={totalFilteredItems}
        currentPage={currentPage}
        paginate={paginate}
      />
{/* <TopDocumentary/> */}
      <NewDocumentary list={NewDocumentaryList} />
      <IndieDocumentary/>
    </div>
  );
};

export default Home;