import Debtor from './Debtor';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

function DebtorTable(props) {
	const debtors = props.debtors.map((debtor) => {
		return <Debtor key={debtor.Id} debtor={debtor}></Debtor>;
	});

	return (
		<>
			<Card body>
				<div className='DebtorTable__table--header'>
					<Row>
						<Col sm={4}>DŁUŻNIK</Col>
						<Col sm={2}>NIP</Col>
						<Col sm={6}>KWOTA ZADŁUŻENIA</Col>
					</Row>
				</div>
			</Card>
			<Accordion>{debtors}</Accordion>
		</>
	);
}

export default DebtorTable;
