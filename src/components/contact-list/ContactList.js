import React, { useState, useEffect } from 'react'
import ContactItem from './ContactItem';
import { Link } from "react-router-dom";

export default function ContactList() {

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch("/contacts")
            .then(data => data.json())
            .then(data => setContacts(data));
    }, []);

    const items = contacts.map(wine => {
        const id = wine.id;
        const route = "/contact/" + id;
        return (
            <li>
                <Link to={route}><ContactItem data={wine} /></Link>
            </li>
        );
    });

    if (contacts.length > 0) {
        return (
            <div>
                <ul>
                    {items}
                </ul>
            </div>
        )
    }

    else {
        <p>Conversation are being fetched...</p>
    }
}
