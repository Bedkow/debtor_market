import { useState, useEffect } from 'react';
import './App.css';
import DebtorTable from './components/DebtorTable';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	const [query, setQuery] = useState('');
	const [totalNumberOfDebtors, setTotalNumberOfDebtors] = useState('');
	const [debtors, setDebtors] = useState([]);

	// display total numbers of debtors
	useEffect(() => {
		fetch(
			`	http://rekrutacja-webhosting.it.krd.pl/api/Recruitment/GetDebtsCount`
		)
			.then((res) => res.json())
			.then((response) => {
				setTotalNumberOfDebtors(response);
			})
			.catch((error) => console.log(error));
	}, []);

	// set top debtors
	useEffect(() => {
		fetch(`http://rekrutacja-webhosting.it.krd.pl/api/Recruitment/GetTopDebts`)
			.then((res) => res.json())
			.then((response) => {
				setDebtors(response);
			})
			.catch((error) => console.log(error));
	}, []);

	// @@@ DEV
	useEffect(() => {
		fetch(
			`http://rekrutacja-webhosting.it.krd.pl/api/Recruitment/GetFilteredDebts`,
			{
				method: 'POST',
				body: JSON.stringify({
					Name: 'DI/KOSZT/P/94911', // just change all for {query} or smth
					NIP: 'DI/KOSZT/P/94911',
					Number: 'DI/KOSZT/P/94911',
				}),
				headers: {
					'Content-type': 'application/json',
				},
			}
		)
			.then((res) => res.json())
			.then((response) => {
				console.log(response);
			})
			.catch((error) => console.log(error));
	}, []);
	/// @@@@

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className='App'>
			<header className='header'>
				<form onSubmit={handleSubmit}>
					<label className='header__label--for-input'>
						PODAJ NUMER SPRAWY, NAZWĘ LUB NIP DŁUŻNIKA
					</label>
					<input
						type='text'
						className='header__input-text-search'
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						required
						minLength='3'
						maxLength='256'
					/>
					<button>Szukaj</button>
				</form>
				<div>{totalNumberOfDebtors}</div>
			</header>
			<DebtorTable debtors={debtors} />
		</div>
	);
}

export default App;
