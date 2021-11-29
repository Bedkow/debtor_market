import './App.css';

function App() {
	return (
		<div className='App'>
			<header className='header'>
				<form>
					<label htmlFor='text-input' className='header__label--for-input'>
						PODAJ NUMER SPRAWY, NAZWĘ LUB NIP DŁUŻNIKA
					</label>
					<input
						type='text'
						id='text-input'
						className='header__input-text-search'
					/>
					<button>Szukaj</button>
				</form>
			</header>
		</div>
	);
}

export default App;
