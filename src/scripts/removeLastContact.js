import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContacts = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length === 0) {
      console.log(`No contacts to remove.`);
      return;
    }
    contacts.pop();
    await writeContacts(contacts);
    console.log(`Last contact has been removed!`);
  } catch (error) {
    console.error('Error removing last contacts:', error);
  }
};

removeLastContacts();
