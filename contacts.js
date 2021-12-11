const fs = require('fs/promises');
const path = require('path');
const createId = require('nanoid');
const contactsPath = path.join(__dirname, './db/contacts.json');

async function listContacts() {
  try {
    const contacts = await fs.readFile(contactsPath);
    const parsedContacts = JSON.parse(contacts);
    console.table(parsedContacts);
  } catch (error) {
    console.log(error.message);
  }
}

async function getContactById(contactId) {
  try {
    const contacts = await fs.readFile(contactsPath);
    const parsedContacts = JSON.parse(contacts);
    const result = parsedContacts.filter(el => el.id == contactId);
    console.table(result);
  } catch (error) {
    console.log(error.message);
  }
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
