import { configureStore, createSlice } from '@reduxjs/toolkit';

const rulesSlice = createSlice({
    name: 'rules',
    initialState: {rules: []},
    reducers: {
        addRules(state, action) {
            state.rules = action.payload;
        },
        likeRule(state, action) {
            state.rules.map((item) => {
                if (item.id === action.payload.id) {
                    item.likes++;
                }

                return item;
            });
        },
        dislikeRule(state, action) {
            state.rules.map((item) => {
                if (item.id === action.payload.id) {
                    item.dislikes++;
                }

                return item;
            });
        },
    },
});

export const store = configureStore({
    reducer: {
        rules: rulesSlice.reducer,
    },
})

export const getRules = (state) => state.rules.rules;

export const { addRules, likeRule, dislikeRule } = rulesSlice.actions
