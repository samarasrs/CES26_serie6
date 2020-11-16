import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  somar,
  subtrair,
  multiplicar,
  dividir,
  zerar,
  igual,
  numero,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';
import Main from '../components/Main';



export function Counter() {
  
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <Main>
      <br />
      <br />
      <center className={styles.calculator}>
        
        <div className={styles.display}> 
          <span>{count}</span>
        </div>
        <button className={styles.buttonTriple} value="AC"  onClick={() => dispatch(zerar())} triple>AC</button>
        <button className={styles.buttonOperation} value="/"  onClick={() => dispatch(dividir())} >/</button>
        <button className={styles.button} value="7" onClick={e => {dispatch(numero(e.target.value));}}>7</button>
        <button className={styles.button} value="8" onClick={e =>dispatch(numero(e.target.value))}>8</button>
        <button className={styles.button} value="9" onClick={e =>dispatch(numero(e.target.value))}>9</button>
        <button className={styles.buttonOperation} value="*" onClick={() =>dispatch(multiplicar())}>*</button>
        <button className={styles.button} value="4" onClick={e =>dispatch(numero(e.target.value))}>4</button>
        <button className={styles.button} value="5" onClick={e =>dispatch(numero(e.target.value))}>5</button>
        <button className={styles.button} value="6" onClick={e =>dispatch(numero(e.target.value))}>6</button>
        <button className={styles.buttonOperation} value="-" onClick={() => dispatch(subtrair())}>-</button>
        <button className={styles.button} value="1" onClick={e =>dispatch(numero(e.target.value))}>1</button>
        <button className={styles.button} value="2" onClick={e =>dispatch(numero(e.target.value))}>2</button>
        <button className={styles.button} value="3" onClick={e =>dispatch(numero(e.target.value))}>3</button>
        <button className={styles.buttonOperation} value="+" onClick={() => dispatch(somar())}>+</button>
        <button className={styles.buttonDouble} value="0" onClick={e =>dispatch(numero(e.target.value))}>0</button>
        <button className={styles.button} value="." onClick={e =>dispatch(numero(e.target.value))}>.</button>
        <button className={styles.buttonOperation} value="=" onClick={() => dispatch(igual())}>=</button>
                
      </center>
    

      <br />
      <br />
    
    </Main>
  );
}
