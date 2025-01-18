import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import campersReducer from "./campers/slice.js";
import filtersReducer from "./filters/slice.js";
import favoriteReducer from "./favorite/slice.js";



const persistConfig= {
    key: "favorite",
    storage,
    whitelist: ["van"],
};

const persistedFavReducer = persistReducer(persistConfig, favoriteReducer);

const store = configureStore({
    reducer: {
        campers: campersReducer,
        filters: filtersReducer,
        favorite: persistedFavReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export default store;
export const persistor = persistStore(store);