import { configureStore, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const rulesAdapter = createEntityAdapter({
    selectId: (rule) => rule.id,
});

const rulesSlice = createSlice({
    name: 'rules',
    initialState: rulesAdapter.getInitialState([]),
    reducers: {
        addRules(state, action) {
            rulesAdapter.setAll(state, action.payload);
        },
        likeRule(state, action) {
            const rule = rulesAdapter.getSelectors().selectById(state, action.payload.id);
            
            if (rule) {
                return rulesAdapter.updateOne(state, {
                    id: rule.id,
                    changes: { likes: rule.likes + 1 },
                });
            }
        },
        dislikeRule(state, action) {
            const rule = rulesAdapter.getSelectors().selectById(state, action.payload.id);
            
            if (rule) {
                return rulesAdapter.updateOne(state, {
                    id: rule.id,
                    changes: { dislikes: rule.dislikes + 1 },
                });
            }
        },
    },
});

export const store = configureStore({
    reducer: {
        rules: rulesSlice.reducer,
    },
});

const rulesSelectors = rulesAdapter.getSelectors((state) => state.rules);

export const getRules = () => rulesSelectors.selectAll(store.getState())

export const { addRules, likeRule, dislikeRule } = rulesSlice.actions
