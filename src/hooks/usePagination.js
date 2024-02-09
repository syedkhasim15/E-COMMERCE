import { useReducer } from "react";

export default function usePagination() {

    const initialstate = {
        offset :0,
        page: 1,
        limit: 9,
        category:0
    }

    const reducer = (state, action) => {

        switch(action.type) {

            case 'CATEGORY':{
                let newCategory = action.category
                return {...initialstate, category: newCategory}
            }

            case 'RESET':{
                return initialstate
            }
            case 'JUMP': {
                let newOffset = (action.toPage - 1) * state.limit;
                return {...state, offset: newOffset, page: action.toPage}
            }
            case 'INCREMENT': {
                if(state.page === 3) {
                    console.log("you are last page")
                    return { ...state };
                }
    
                let newOffset = state.offset + state.limit;
                let newPage = state.page + 1;
                return { ...state, page:newPage, offset: newOffset };
            }
            case 'DECREMENT': {
                if(state.page === 1)
                    return { ...state };
    
                let newOffset = state.offset - state.limit;
                let newPage = state.page - 1;
                return { ...state, page: newPage, offset: newOffset };
            }
            default:
                return state;
        }

    };

    const [currentPage,dispatch] = useReducer(reducer,initialstate)

    return [currentPage,dispatch]
}
