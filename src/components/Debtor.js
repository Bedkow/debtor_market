import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Stack from 'react-bootstrap/Stack';

function Debtor({ debtor }) {
	console.log(debtor);
	return (
		<Accordion.Item eventKey={debtor.Id} key={debtor.Id}>
			<Accordion.Header>
				<Col sm={4} key={debtor.Name}>
					{debtor.Name}
				</Col>
				<Col sm={2} key={debtor.NIP}>
					{debtor.NIP}
				</Col>
				<Col sm={6} key={debtor.Value}>
					{debtor.Value}
				</Col>
			</Accordion.Header>
			<Accordion.Body>
				<Row>
					<Col sm={4} key={debtor.Address}>
						<Stack>
							<div className='DebtorTable__Debtor__Accordion__Body__Row__Col__Stack--title'>
								ADRES
							</div>

							<div>{debtor.Address}</div>
						</Stack>
					</Col>
					<Col sm={2} key={debtor.DocumentType}>
						<Stack>
							<div className='DebtorTable__Debtor__Accordion__Body__Row__Col__Stack--title'>
								RODZAJ/TYP DOKUMENTU STANOWIĄCY PODSTAWĘ DLA WIERZYTELNOŚCI
							</div>
							<div>{debtor.DocumentType}</div>
						</Stack>
					</Col>
					<Col sm={3} key={debtor.Price}>
						<Stack>
							<div className='DebtorTable__Debtor__Accordion__Body__Row__Col__Stack--title'>
								CENA ZADŁUŻENIA
							</div>
							<div>{debtor.Price}</div>
						</Stack>
					</Col>

					<Col sm={3} key={debtor.Number}>
						<Stack>
							<div className='DebtorTable__Debtor__Accordion__Body__Row__Col__Stack--title'>
								NUMER
							</div>
							<div>{debtor.Number}</div>
						</Stack>
					</Col>
				</Row>
			</Accordion.Body>
		</Accordion.Item>
	);
}

export default Debtor;
