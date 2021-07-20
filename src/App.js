import './App.css';
import { Container } from '@material-ui/core';
import { Fragment, useRef, useState } from 'react';
import styled from 'styled-components';

import Step1 from './components/Step1';
import Step2 from './components/Step2';
import ExpressionEvaluator from './ExpressionEvaluator';

function App() {

  const expresisonEvaluatorRef = useRef(new ExpressionEvaluator());
  const expresisonEvaluator = expresisonEvaluatorRef.current; 

  const [stepCounter, setStepCounter] = useState(0);
  const [operandValueOne, setOperandValueOne] = useState(0);
  const [getExpressionValue, setExpressionValue] = useState([]);

  console.log(expresisonEvaluator);

  const changeStep = ( value ) => {
    setStepCounter(1);
    setOperandValueOne(+value);
    expresisonEvaluator.addOperand(+value);
    setExpressionValue([...expresisonEvaluator.getExpression()]);
  }
  
  const handleSubmitOperation = (operand, operator) => {
    expresisonEvaluator.addOperand(operand);
    expresisonEvaluator.addOperator(operator);
    console.log(expresisonEvaluator.getExpression());
    setExpressionValue([...expresisonEvaluator.getExpression()]);
  }

  return (
    <AppInit className="App">
        <Container maxWidth="sm" className="centerScreen">
          {
            stepCounter === 0 && <Step1 changeStep={changeStep} />
          }
          {
            stepCounter === 1 && 
            <Fragment>
              <Step2 expressionArray={getExpressionValue} handleSubmitOperation={handleSubmitOperation} expressionResult={expresisonEvaluator.evaluateExpression()}/>
            </Fragment>
          }
        </Container>
    </AppInit>
  );
}


const AppInit = styled.div`
  height: 100vh;
  display:flex;
  /* align-items: center; */
  justify-content: center;
`;

export default App;


