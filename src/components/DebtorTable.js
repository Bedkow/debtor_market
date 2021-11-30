import Debtor from './Debtor';

function DebtorTable(props) {
	// const debtors = props.debtors.results.map((debtor) => {
	// 	return <Debtor debtor={debtor}></Debtor>;
	// });

	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>DŁUŻNIK</th>
						<th>NIP</th>
						<th>KWOTA ZADŁUŻENIA</th>
					</tr>
				</thead>
				{/* <tbody>{debtors}</tbody> */}
			</table>
		</div>
	);
}

export default DebtorTable;
