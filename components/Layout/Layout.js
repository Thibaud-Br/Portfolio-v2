import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styled, { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '../BaseStyles/GlobalStyles';
import { lightTheme, darkTheme } from '../BaseStyles/Themes';

import Frame from '../Frame/Frame';
import Topbar from '../Topbar/Topbar';
import Navbar from '../Navbar/Navbar';

const Main = styled.div`
	background: ${({ theme }) => theme.main};
	color: ${({ theme }) => theme.secondary};
	font-family: 'Karla', sans-serif;
	transition: 0.3s ease-in-out;
`;

function Layout({ children }) {
	const [theme, setTheme] = useState('dark');

	const setMode = (mode) => {
		window.localStorage.setItem('theme', mode);
		setTheme(mode);
	};

	const themeToggler = () => {
		theme === 'dark' ? setMode('light') : setMode('dark');
	};

	useEffect(() => {
		const localTheme = window.localStorage.getItem('theme');
		localTheme && setTheme(localTheme);
	}, []);

	return (
		<>
			<Head>
				<title>Thibaud Brault | Développeur front-end</title>
			</Head>
			<ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
				<GlobalStyles />
				<Main>
					<Topbar themeToggler={themeToggler} theme={theme} />
					{children}
					<Navbar />
					<Frame />
				</Main>
			</ThemeProvider>
		</>
	);
}

export default Layout;
