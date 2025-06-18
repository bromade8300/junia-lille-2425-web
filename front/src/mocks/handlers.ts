import { http, HttpResponse } from 'msw'
import getTodo from "./fixtures/getTodo.json";

export const handlers = [
  // http.get('http://localhost:3000/todo', () => {
  //   return HttpResponse.json(getTodo);
  // }),
]