import {reducer, StateType, TOGGLE_CONSTANT} from "./reducer";

test('reducer should change value to opposite value', ()=>{
   const state: StateType={
       collapsed: false
   }

   const newState = reducer(state, {type: TOGGLE_CONSTANT})

    expect(newState.collapsed).toBe(true)
})

test('collapsed should be false', ()=>{
    const state: StateType={
        collapsed: true
    }

    const newState = reducer(state, {type: TOGGLE_CONSTANT})

    expect(newState.collapsed).toBe(false)
})

/*
test('error', () => {
    const state: StateType = {
        collapsed: true
    };

    expect(() => {
        reducer(state, {type: 'FAKE'});
    }).toThrowError();
});*/
