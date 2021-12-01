import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';

function Debtor({ debtor }) {
	console.log(debtor);
	return (
		<Accordion.Item eventKey={debtor.Id} key={debtor.Id}>
			<Container fluid>
				<Accordion.Header>
					<Col sm={4} key={debtor.Name}>
						{debtor.Name}
					</Col>
					<Col sm={2} key={debtor.NIP}>
						{debtor.NIP}
					</Col>
					<Col sm={2} key={debtor.Value}>
						{debtor.Value}
					</Col>
				</Accordion.Header>
				<Accordion.Body>
					<Col sm={4} key={debtor.Address}>
						{debtor.Address}
					</Col>
					<Col sm={2} key={debtor.DocumentType}>
						{debtor.DocumentType}
					</Col>
					<Col sm={1} key={debtor.Price}>
						{debtor.Price}
					</Col>
					<Col sm={1} key={debtor.Number}>
						{debtor.Number}
					</Col>
				</Accordion.Body>
			</Container>
		</Accordion.Item>
	);
}

export default Debtor;
