import Debtor from './Debtor';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';

function DebtorTable(props) {
	const debtors = props.debtors.map((debtor) => {
		return <Debtor key={debtor.Id} debtor={debtor}></Debtor>;
	});

	return (
		<Container fluid>
			<Row>
				<Col sm={4}>DŁUŻNIK</Col>
				<Col sm={2}>NIP</Col>
				<Col sm={2}>KWOTA ZADŁUŻENIA</Col>
			</Row>
			<Accordion>
				<Container fluid>{debtors}</Container>
			</Accordion>
		</Container>
	);
}

export default DebtorTable;
