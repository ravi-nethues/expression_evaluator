import { Button, Grid, TextField, Card, CardContent, Typography, FormControl, InputLabel, Select, MenuItem, Container } from '@material-ui/core';
import { useState } from 'react';

import styled from 'styled-components';

export default function Step2({expressionArray, handleSubmitOperation, expressionResult}) {

	const [operator, setOpertor] = useState('+');
	const [operand, setOperand] = useState(0);

  const handleChange = (event) => {
    setOpertor(event.target.value);
  };
	return (
		<Step2Container>
			<Grid container justifyContent="center" alignItems="center" spacing={2}>
					{
						expressionArray.map((item) => (
							<Grid item xs={3} sm={2}>
								<Card >
									<CardContentWrapper>
										<Typography color="textSecondary" gutterBottom >
											{item}
										</Typography>
									</CardContentWrapper>
								</Card>
							</Grid>
						))
					}
			</Grid>
			<Equals> = </Equals>
			<ResultData>{expressionResult}</ResultData>

			<BottomWrapper maxWidth="sm" className="centerScreen">

				<Grid container spacing={2}>
					<Grid item  xs={6} sm={4}>
						<FormControl variant="outlined" style={{ width: '100%;'}}>
							<InputLabel id="demo-simple-select-outlined-label">Operator</InputLabel>
							<Select
								labelId="demo-simple-select-outlined-label"
								id="demo-simple-select-outlined"
								value={operator}
								onChange={handleChange}
								label="Operator"
								defaultValue="+"
								
							>
								<MenuItem value="+">+</MenuItem>
								<MenuItem value="-">-</MenuItem>
								<MenuItem value="*">*</MenuItem>
								<MenuItem value="/">/</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid item  xs={6} sm={4}>
						<TextField id="outlined-basic" label="Operand" variant="outlined"  style={{ width: '100%' }} type="number" onChange={(e) => setOperand(+e.target.value)} />
					</Grid>
					<Grid item xs={12} sm={4}>
						<FullWidthButton variant="contained" size="large" color="primary" onClick={() => handleSubmitOperation(operand, operator)}>Add Operation</FullWidthButton>
					</Grid>
				</Grid>
			</BottomWrapper>
		</Step2Container>
	)
}

const Title = styled.h1`
  font-size: 3rem;
  color: red;
  font-weight: 400;
  color: #79cea1;
`;
const FullWidthButton = styled(Button)`
  width: 100%;
  font-size: 1rem;
  /* height: 3rem; */
  line-height: 1.1876em;
  padding: 18.5px 14px;
`;

const Step2Container= styled.div`
	margin-top: 5rem;
	
	${FullWidthButton} {
		font-size: 1rem;
		background: #79cea1;
		color: whitie;
		line-height: 1.1876em;
		padding: 18.5px 14px;
	}

	p {
		margin-bottom: 0px;
	}

	.MuiCardContent-root {
		padding: 1.5rem 0rem !important;
		text-align: center;
		background: #ecf5f7;
		border: none !important;
	}

	.MuiFormControl-root {
		width : 100%;
		text-align: left;
	}
`;

const ResultData = styled.div`
	font-size: 5rem;
	color: #79cea1;
	font-weight: 200;
	line-height: 4rem;
	margin-top: 0px;
	margin-bottom: 5rem;
`;

const Equals = styled.div`
	color: black;
	font-size: 3rem;
	font-weight: 300;
`;

const CardContentWrapper = styled(CardContent)`
	padding: 1rem 2rem;
`;

const BottomWrapper = styled(Container)`
	position: fixed;
	bottom: 2rem;
	left: 0;
	right: 0;
	margin: auto;
`;