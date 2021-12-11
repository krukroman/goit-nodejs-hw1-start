const contactsActions = require('./contacts.js');

const argv = require('yargs').argv;

async function invokeAction({ action, id, name, email, phone }) {
  let result;
  switch (action) {
    case 'list':
      result = await contactsActions.listContacts();
      console.table(result);
      break;

    case 'get':
      result = await contactsActions.getContactById(id);
      console.log(result);
      break;

    case 'add':
      result = await contactsActions.addContact(name, email, phone);
      console.log(result);
      break;

    case 'remove':
      result = await contactsActions.removeContact(id);
      console.log(result);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
