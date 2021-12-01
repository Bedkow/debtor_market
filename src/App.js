import { useState, useEffect } from 'react';
import './App.css';
import DebtorTable from './components/DebtorTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Spinner from 'react-bootstrap/Spinner';

function App() {
	const [query, setQuery] = useState('');
	const [totalNumberOfDebtors, setTotalNumberOfDebtors] = useState('');
	const [debtors, setDebtors] = useState([]);
	const [isPending, setIsPending] = useState(false);
	const [failureMessage, setFailureMessage] = useState();
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

	// get filtered list
	const handleSubmit = (e) => {
		e.preventDefault();

		setIsPending(true);

		fetch(
			`http://rekrutacja-webhosting.it.krd.pl/api/Recruitment/GetFilteredDebts`,
			{
				method: 'POST',
				body: JSON.stringify({
					Name: query,
					NIP: query,
					Number: query,
				}),
				headers: {
					'Content-type': 'application/json',
				},
			}
		)
			.then((res) => res.json())
			.then((response) => {
				if (response.length === 0) {
					setFailureMessage('NIE ZNALEZIONO');
					setIsPending(false);
					setDebtors(response);
				} else {
					setFailureMessage();
					setDebtors(response);
					setIsPending(false);
				}
			})
			.catch((error) => console.log(error));
	};

	return (
		<div className='App'>
			<header className='header'>
				<Container fluid>
					<Row>
						<Col sm={8} xs={12}>
							<form onSubmit={handleSubmit}>
								<Stack>
									<label className='header__form__label--for-input'>
										PODAJ NUMER SPRAWY, NAZWĘ LUB NIP DŁUŻNIKA
									</label>
									<div>
										<input
											type='text'
											className='header__form__input-text-search'
											value={query}
											onChange={(e) => setQuery(e.target.value)}
											required
											minLength='3'
											maxLength='256'
										/>
										{!isPending && (
											<button className='header__form__button--search'>
												Szukaj
											</button>
										)}
										{isPending && (
											<button disabled className='header__form__button--search'>
												<Spinner animation='border' size='sm' />
												Szukam
											</button>
										)}
									</div>
								</Stack>
							</form>
						</Col>
						<Col sm={4} xs={12}>
							<div className='header__div--block--total-cases'>
								<Stack>
									<div className='header__div--text--total-cases'>
										CAŁKOWITA ILOŚĆ SPRAW
									</div>
									<div className='header__div--number--total-cases'>
										{totalNumberOfDebtors}
									</div>
									<div className='header__div--text--total-cases-failure'>
										{failureMessage}
									</div>
								</Stack>
							</div>
						</Col>
					</Row>
				</Container>
			</header>
			<Container fluid>
				<DebtorTable debtors={debtors} />
			</Container>
		</div>
	);
}

export default App;
