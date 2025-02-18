import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs';

export const writeContacts = async (updatedContacts) => {
  try {
    const data = JSON.stringify(updatedContacts, null, 2);
    await fs.promises.writeFile(PATH_DB, data, 'utf-8');
    console.log('Contacts have been successfully written to the file.');
  } catch (error) {
    console.error('Error writing the contacts:', error);
    return [];
  }
};
