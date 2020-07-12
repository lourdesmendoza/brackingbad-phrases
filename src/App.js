import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import Phrase from './components/Phrase';

const Button = styled.button`
	background:-webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
	background-size: 300px;
	font-family: Arial, Helvetica, sans-serif;
	color: #FFFFFF;
	margin-top: 3rem;
	padding: 1rem 3rem;
	font-size: 2rem;
	border: 2px solid #000000;
	transition: background-size .3s ease;

	:hover {
		cursor: pointer;
		background-size: 400px;
	};

`;

const Content = styled.div`
	display: flex;
	align-items: center;
	padding-top: 5rem;
	flex-direction: column;

`

function App() {

	// Phrases state
	const [phrase, setPhrase] = useState({});

	const consultAPI = async () => {
		const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
		const phrase = await api.json();

		setPhrase(phrase[0]);
	};

	// get a phrase
	useEffect(() => {
		consultAPI();
	}, []);

	return (
		<Content>
			<Phrase
				phrase={phrase}
				/>
			<Button
				onClick={consultAPI}>
				Get phrase
			</Button>
		</Content>
	);
}

export default App;
