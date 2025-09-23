// https://redux-toolkit.js.org/rtk-query/api/created-api/hooks
// Reactフックを生成するには、React固有のエントリポイントを使用する必要があります。
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

// RTK Queryの機能の中核です。
// バックエンドAPIやその他の非同期ソースからデータを取得する方法、
// 特にデータの取得と変換方法の設定を記述する「エンドポイント」のセットを定義できます。
// また、データの取得とキャッシュのプロセスをカプセル化するReduxロジック（およびオプションでReactフック）を含む
// 「APIスライス」構造を生成します。
export const apiSlice = createApi({
  // reducerPathは、ストア内でサービスがマウントされる一意のキーです。
  // アプリケーション内でcreateApiを複数回呼び出す場合は、そのたびに一意の値を指定する必要があります。
  // デフォルトは'api'です。
  reducerPath: 'api',
  baseQuery:
    // fetchによるHTTPリクエストを簡素化することを目的とした非常に小さなラッパー
    fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  // 文字列タグタイプ名の配列。
  // タグタイプの指定は任意ですが、キャッシュや無効化に使用できるように定義する必要があります。
  // タグタイプを定義すると、エンドポイントの設定時にprovidesTagsでタグタイプを指定したり、
  // invalidatesTagsで無効化したりできるようになります。
  tagTypes: ['Todo'],
  // サーバーに対して実行する一連の操作です。
  // ビルダー構文を使用してオブジェクトとして定義します。
  // エンドポイントにはquery、infiniteQuery、mutationの3つの種類があります。
  endpoints: (builder) => ({
    // https://github.com/reduxjs/redux-toolkit/issues/1676
    getTodos: builder.query<Todo[], void>({
      query: () => '/todos',
      transformResponse: (response: Todo[]) => response.sort((a, b) => b.id - a.id),
      providesTags: ['Todo'],
    }),
    // ミューテーション エンドポイント (build.mutation()で定義) は、
    // サーバーに更新を送信し、クエリ エンドポイントの無効化と再フェッチを強制するために使用されます。
    // クエリと同様に、queryオプションまたはqueryFn非同期メソッドのいずれかを指定する必要があります。
    addTodo: builder.mutation<Todo, Partial<Todo>>({
      query: (body) => ({
        url: '/todos',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Todo'],
    }),
    updateTodo: builder.mutation<Todo, Todo>({
      query: (body) => ({
        url: `/todos/${body.id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['Todo'],
    }),
    deleteTodo: builder.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({
        url: `/todos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Todo'],
    }),
  }),
});

// 定義されたエンドポイントに基づいて自動生成される関数コンポーネントで使用するためのエクスポートフック
export const { useGetTodosQuery, useAddTodoMutation, useUpdateTodoMutation, useDeleteTodoMutation } = apiSlice;
