import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyBPsgqTpd-XTWCVtFL4svuIVLNdWm-1vZA',
	authDomain: 'todos-14e49.firebaseapp.com',
	projectId: 'todos-14e49',
	storageBucket: 'todos-14e49.firebasestorage.app',
	messagingSenderId: '901684596071',
	appId: '1:901684596071:web:59bfe3d0a7e0d540d3f3c2',
	databaseURL: 'https://todos-14e49-default-rtdb.europe-west1.firebasedatabase.app/',
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
