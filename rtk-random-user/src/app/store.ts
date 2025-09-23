import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { usersApi } from "../services/users"
import { setupListeners } from "@reduxjs/toolkit/query"

const rootReducer = combineReducers({
  [usersApi.reducerPath]: usersApi.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  // アクションのディスパッチからリデューサーに到達するまでの間に、サードパーティ製の拡張ポイントを提供します。
  // Reduxミドルウェアは、ログ記録、クラッシュレポート、非同期APIとの通信、ルーティングなどに利用されています。
  middleware: getDefaultMiddleware =>
    // getDefaultMiddleware：カスタムミドルウェアを追加したいが、デフォルトのミドルウェアも追加しておきたい場合
    getDefaultMiddleware().concat(usersApi.middleware),
})

// ページがフォーカスされたときやネットワークに再接続したときに、自動的にデータを再取得できるようになります。
// 重要なのは、別のアプリでページ外にいて、戻ってきたときに、ユーザーが最新の情報を確認できるようにすることです
setupListeners(store.dispatch)
