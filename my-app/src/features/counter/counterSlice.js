import { createSlice } from '@reduxjs/toolkit';

export const initialState= {
  expressao: '',
  ponto: false,
  ultimo: '',
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    
    somar: (state, action) => {
      if(state.expressao.length<10){
        if(state.ultimo==='O'){
          state.expressao = state.expressao.substr(0, state.expressao.length-1);
        }
        state.expressao = state.expressao + '+';
        state.ponto = false;
        state.ultimo = 'O';
      }
    },
    subtrair: (state, action) => {
      if(state.expressao.length<10){
        if(state.ultimo==='O'){
          state.expressao = state.expressao.substr(0, state.expressao.length-1);
        }
        state.expressao = state.expressao + '-';
        state.ponto = false;
        state.ultimo = 'O';
      }
    },
    multiplicar: (state, action) => {
      console.log(state.expressao.length);
      if(state.expressao.length<10){
        if(state.ultimo==='O'){
          state.expressao = state.expressao.substr(0, state.expressao.length-1);
        }
        state.expressao = state.expressao + '*';
        state.ponto = false;
        state.ultimo = 'O';
      }
    },
    dividir: (state, action) => {
      if(state.expressao.length<10){
        if(state.ultimo==='O'){
          state.expressao = state.expressao.substr(0, state.expressao.length-1);
        }
        state.expressao = state.expressao + '/';
        state.ponto = false;
        state.ultimo = 'O';
      }
    },
    zerar: (state) => {
      state.expressao = '';
      state.ponto = false;
      state.ultimo = 'A';
      console.log(state.expressao);
    },
    igual: (state) => {
      state.expressao = String(eval(state.expressao));
      console.log(state.expressao);
      state.ponto = false;
      state.ultimo = '=';
    },
    numero: (state, action) => {
      console.log(action);
      if(state.expressao.length<10){
        if (String(action.payload) !=='.' || (String(action.payload)==='.' && !state.ponto)){
          if(state.ultimo==='='){
            state.expressao = '';
          }
          state.expressao = state.expressao + String(action.payload);
          if (String(action.payload)==='.' ){
              state.ponto = true;
          }
          state.ultimo = 'N';
        }
      }
      

      console.log(state.expressao);
    },
  },
});

export const {  somar, dividir, multiplicar, subtrair, zerar, numero, igual } = counterSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = state => state.counter.expressao;

export default counterSlice.reducer;
