import { HTTP_METHOD } from '../constants';

const fethcServer = (method, { id, ...payload } = {}) => {
	let url = `http://localhost:3003/todos`;
	let options = {
		method,
		headers: { 'Content-Type': 'application/json' },
	};

	if (method === HTTP_METHOD.GET) {
		const { searchPhrase, isAlphabetSorting } = payload;
		const sortingParams = isAlphabetSorting
			? '_sort=title&_order=asc'
			: '_sort=id&_order=asc';
		url += `?${sortingParams}&title_like=${searchPhrase}`;
	} else {
		if (method !== HTTP_METHOD.POST) {
			url += `/${id}`;
		}
		if (method !== HTTP_METHOD.DELETE) {
			options.body = JSON.stringify(payload);
		}
	}

	return fetch(url, options).then((jsonData) => jsonData.json());
};

export const createTodo = (newTodo) => fethcServer('POST', newTodo);

export const readTodos = (searchPhrase = '', isAlphabetSorting = false) =>
	fethcServer('GET', { searchPhrase, isAlphabetSorting });

export const updateTodo = (todoData) => fethcServer('PATCH', todoData);

export const deleteTodo = (todoId) => fethcServer('DELETE', { id: todoId });
