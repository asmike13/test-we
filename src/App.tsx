import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from '@mui/material';
import BookList from './components/books/containers/BookListContainer';
import BookDetail from './components/books/containers/BookDetailContainer';
import Character from "./components/characters/containers/CharacterContainer";

import './App.scss';

const App = () => {
	return (
		<Container maxWidth="xl" sx={{ marginTop: '15px' }}>
			<Routes>
				<Route path='/' element={<BookList />} />
				<Route path='/book/:bookId' element={<BookDetail />} />
				<Route path='/character/:characterId' element={<Character />} />
			</Routes>
		</Container>
	)
}

export default App;
