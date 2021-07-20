import { Button, Grid, TextField } from '@material-ui/core';
import { useState } from 'react'; 
import styled from 'styled-components';

export default function Step1({ changeStep }) {
	const [operandOne, setOperandOne] = useState(0);

	return (
		<Step1Container>
			<Grid container justifyContent="center" alignItems="center">
				<Grid item xs={12} sm={6}>
					<Title>Expresion Evaluator</Title>
				</Grid>
			</Grid>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6}>
					<TextField id="outlined-basic" label="Please enter a Number" variant="outlined"  style={{ width: '100%' }} type="number" onChange={(e) => {setOperandOne(e.target.value)}} />
				</Grid>
				<Grid item xs={12} sm={6}>
					<FullWidthButton variant="contained" size="large" color="primary" onClick={() => changeStep(operandOne)}>Add number</FullWidthButton>
				</Grid>
			</Grid>
		</Step1Container>
	)
}

const Title = styled.h1`
  font-size: 3rem;
  color: red;
  font-weight: 200;
  color: #79cea1;
	margin-bottom: 4rem;
`;
const FullWidthButton = styled(Button)`
  width: 100%;
  font-size: 1rem;
  /* height: 3rem; */
  line-height: 1.1876em;
  padding: 18.5px 14px;
`;

const Step1Container= styled.div`
	margin-top: 5rem;

	${FullWidthButton} {
		font-size: 1rem;
		background: #79cea1;
		color: whitie;
		line-height: 1.1876em;
		padding: 18.5px 14px;
	}
`;