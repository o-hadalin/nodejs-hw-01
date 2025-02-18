import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const currentContacts = await readContacts();

    const newContacts = [];
    for (let i = 0; i < number; i++) {
      newContacts.push(createFakeContact());
      const updateContacts = [...currentContacts, ...newContacts];
      await writeContacts(updateContacts);
      console.log(`${number} new contacts have been added.`);
    }
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
};

generateContacts(5);
