import type { Action, ThunkAction } from "@reduxjs/toolkit"
import { combineSlices, configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { recipeApi } from "../services/recipeApi"

// `combineSlices` は `reducerPath` を使用してリデューサーを自動的に結合するため、
// `combineReducers` を呼び出す必要がなくなりました。
const rootReducer = combineSlices(recipeApi)
// root reducer から `RootState` 型を推論する
export type RootState = ReturnType<typeof rootReducer>

// ストアのセットアップは `makeStore` でラップされており、
// 同じストア構成を必要とするテストをセットアップするときに再利用できます。
export const makeStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,
    // api ミドルウェアを追加すると、キャッシュ、無効化、ポーリング、
    // および `rtk-query` のその他の便利な機能が有効になります。
    middleware: getDefaultMiddleware => {
      return getDefaultMiddleware().concat(recipeApi.middleware)
    },
    preloadedState,
  })
  // 提供されたデフォルトを使用してリスナーを構成する（オプション）が、
  // `refetchOnFocus`/`refetchOnReconnect` 動作には必須である
  setupListeners(store.dispatch)
  return store
}

export const store = makeStore()

// `store` のタイプを推測する
export type AppStore = typeof store
// ストア自体から `AppDispatch` 型を推測する
export type AppDispatch = AppStore["dispatch"]
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
