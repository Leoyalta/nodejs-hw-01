import * as fs from "node:fs/promises";
import { PATH_DB } from "../constants/contacts.js";
// import DetectFileEncodingAndLanguage from "detect-file-encoding-and-language";
import { createFakeContact } from "../utils/createFakeContact.js";
import getAllContacts from "./getAllContacts.js";

const generateContacts = async (number) => {
  // const contacts = [];
  // for (let i=0; i<number; i++) {
  //     let contact = createFakeContact();
  //     contacts.push(contact);
  // }
  //   const newContactsList = Array(number).fill(0).map(createFakeContact);
  //   await fs.writeFile(PATH_DB, JSON.stringify(newContactsList, null, 2));

  //   const { encoding } = await DetectFileEncodingAndLanguage(PATH_DB);
  //   const newContactsList = await fs.readFile(PATH_DB, encoding);

  const contactsList = await getAllContacts();
  const newContactsList = Array(number).fill(0).map(createFakeContact);
  contactsList.push(...newContactsList);
  await fs.writeFile(PATH_DB, JSON.stringify(contactsList, null, 2));
};

generateContacts(5);
