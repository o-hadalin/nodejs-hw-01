import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = () => {
  return fs
    .readFile(PATH_DB, 'utf-8')
    .then((data) => JSON.parse(data))
    .catch((error) => {
      console.error('Error reading the contacts:', error);
      return [];
    });
};
