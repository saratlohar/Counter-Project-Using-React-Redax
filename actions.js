export const Inc= () => async dispatch=> {
   dispatch({
       type: 'INCREMENT'
    
   })
}

export const Dec= () => async dispatch=> {
    dispatch({
        type: 'DECREMENT'
    })
 }
 export const Def= () => async dispatch=> {
    dispatch({
        type: 'HELLO'
    })
 }
 