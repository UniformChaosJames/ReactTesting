// src/actions.test.js
import test from 'ava';
import { toggleTodo, TOGGLE_TODO } from './actions';

test('toggleTodo action', t => {
  t.deepEqual(actions.toggleTodo(5), {
    type: actions.TOGGLE_TODO,
    payload: 5
  });
});
