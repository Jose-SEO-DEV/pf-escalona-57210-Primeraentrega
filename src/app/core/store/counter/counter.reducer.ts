import { createReducer, on } from "@ngrx/store";
import { decrease, increment } from "./counter.actions";
import { state } from "@angular/animations";

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0 
}

export const  counterReducer = createReducer<CounterState>(initialState,
    /// cuando llamas increment deberia pasar:... 
on(increment, (state) => {
    return {
        ...state,
        value: state.value + 1, 
    };
}),
/// cuando llamas decrease deberia pasar:... 
on(decrease, (state) => {
    return {
        ...state,
        value: state.value - 1,
    };
})    
);