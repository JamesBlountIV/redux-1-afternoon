import {createStore} from 'redux';

const initialState = {
    name: '',
    category: '',
    authorFirst: '',
    authorLast: '',
    ingredients: [],
    instructions: [],
    recipes: []
};

export const INSTRUCTIONS_LIST = "INSTRUCTIONS_LIST";
export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const AUTHOR_FIRST = "AUTHOR_FIRST";
export const AUTHOR_LAST = "AUTHOR_LAST";
export const INGREDIENTS_LIST = "INGREDIENTS_LIST";
export const RECIPES_LIST = "RECIPES_LIST";

function reducer(state = initialState, action) {
    const {type, payload} = action;
    switch(type) {

        case INSTRUCTIONS_LIST:
            const newInstructions = [...state.instructions, payload];
            return {...state, instructions: newInstructions};

        case UPDATE_NAME:
            return {...state, name: payload};

        case UPDATE_CATEGORY:
            return {...state, category: payload};

        case AUTHOR_FIRST:
            return {...state, authorFirst: payload};
            
        case AUTHOR_LAST:
            return {...state, authorLast: payload};
            
        case INGREDIENTS_LIST:
            const newIngredients = [...state.ingredients, payload];
            return {...state, ingredients: newIngredients};

        case RECIPES_LIST:
            const {
                name,
                category,
                authorFirst,
                authorLast,
                ingredients,
                instructions
            } = state;
            const recipe = {
                name,
                category,
                authorFirst,
                authorLast,
                ingredients,
                instructions
            };
            const newRecipes = [...state.recipes, recipe];
            return {...state, recipes: newRecipes};

        default: return state;
            }
}
export default createStore(reducer);