const { v4 } = require("uuid");

let contacts = [
    // padrao UUID - Universally Unique Identifier
    {
        id: v4(),
        name: "Rafael",
        email: "rafael@email.com",
        phone: "9999-9999",
        category_id: v4(),
    },
    {
        id: v4(),
        name: "Luiz",
        email: "luiz@email.com",
        phone: "8888-8888",
        category_id: v4(),
    },
    {
        id: v4(),
        name: "Ana",
        email: "ana@email.com",
        phone: "7777-7777",
        category_id: v4(),
    },
    {
        id: v4(),
        name: "Maria",
        email: "maria@email.com",
        phone: "6666-6666",
        category_id: v4(),
    },
];

class ContactRepository {
    // findAll() {
    //     return new Promise((resolve, reject) => {
    //         resolve(contacts);
    //     });
    // }
    findAll() {
        return new Promise((resolve) => resolve(contacts));
    }

    findById(id) {
        return new Promise((resolve) =>
            resolve(contacts.find((contact) => contact.id === id))
        );
    }

    findByEmail(email) {
        return new Promise((resolve) =>
            resolve(contacts.find((contact) => contact.email === email))
        );
    }

    create({ name, email, phone, category_id }) {
        return new Promise((resolve) => {
            const newContact = { id: v4(), name, email, phone, category_id };
            contacts.push(newContact);
            resolve(newContact);
        });
    }

    update(id, { name, email, phone, category_id }) {
        return new Promise((resolve) => {
            const updatedContact = { id, name, email, phone, category_id };
            contacts = contacts.map((contact) => {
                contact.id === id ? updatedContact : contact;
            });
            resolve(updatedContact);
        });
    }

    delete(id) {
        return new Promise((resolve) => {
            contacts = contacts.filter((contact) => contact.id !== id);
            resolve();
        });
    }
}

module.exports = new ContactRepository();
