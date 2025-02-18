import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const newContact = createFakeContact();
    const currentContacts = await readContacts();
    currentContacts.push(newContact);
    await writeContacts(currentContacts);
    console.log(`1 new contact hac been added!`);
  } catch (error) {
    console.error('Error adding the contact:', error);
  }
};

addOneContact();
