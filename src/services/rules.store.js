import { configureStore, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

let nextId = 99;

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
        addRule(state, action) {
            rulesAdapter.addOne(state, {
                id: ++nextId,
                ...action.payload,
                likes: 0,
                dislikes: 0,
                tags: [],
                status: "validated",
            });
        },
        editRule(state, action) {
            const rule = rulesAdapter.getSelectors().selectById(state, action.payload.id);

            if (rule) {
                return rulesAdapter.updateOne(state, {
                    id: rule.id,
                    changes: { ...action.payload },
                });
            }
        }
    },
});

export const store = configureStore({
    reducer: {
        rules: rulesSlice.reducer,
    },
});

const rulesSelectors = rulesAdapter.getSelectors((state) => state.rules);

export const getRules = () => rulesSelectors.selectAll(store.getState())

export const { addRules, addRule, editRule, likeRule, dislikeRule } = rulesSlice.actions
