import { useState, useEffect } from 'react';
import './App.css';
import DebtorTable from './components/DebtorTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
				<Container fluid>
					<Row>
						<Col>
							<form onSubmit={handleSubmit}>
								<label className='header__form__label--for-input'>
									PODAJ NUMER SPRAWY, NAZWĘ LUB NIP DŁUŻNIKA
								</label>
								<input
									type='text'
									className='header__form__input-text-search'
									value={query}
									onChange={(e) => setQuery(e.target.value)}
									required
									minLength='3'
									maxLength='256'
								/>
								<button className='header__form__button--search'>Szukaj</button>
							</form>
						</Col>
						<Col>
							<div className='header__div--block--total-cases'>
								<div className='header__div--text--total-cases'>
									CAŁKOWITA ILOŚĆ SPRAW
								</div>
								<div className='header__div--number--total-cases'>
									{totalNumberOfDebtors}
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</header>
			<DebtorTable debtors={debtors} />
		</div>
	);
}

export default App;
