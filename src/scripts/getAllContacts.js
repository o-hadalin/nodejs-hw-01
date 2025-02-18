import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts;
  } catch (error) {
    console.log(`Error fetching contacts:`, error);
    return [];
  }
};

console.log(await getAllContacts());
