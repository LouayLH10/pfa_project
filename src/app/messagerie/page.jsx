"use client";
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const contacts = [
  {
    id: 1,
    name: 'Alice Dupont',
    avatar: 'https://ui-avatars.com/api/?name=Alice+Dupont&background=random',
  },
  {
    id: 2,
    name: 'Mohamed Ali',
    avatar: 'https://ui-avatars.com/api/?name=Mohamed+Ali&background=random',
  },
  {
    id: 3,
    name: 'Sarah Ben Ammar',
    avatar: 'https://ui-avatars.com/api/?name=Sarah+Ben+Ammar&background=random',
  },
];

const messagesData = {
  1: [
    { from: 'me', text: 'Salut Alice, comment tu vas ?' },
    { from: 'them', text: 'Très bien merci, et toi ?' },
  ],
  2: [
    { from: 'me', text: 'Mohamed, tu es dispo demain ?' },
    { from: 'them', text: 'Oui, après 16h.' },
  ],
  3: [
    { from: 'them', text: 'Bonjour Omar !' },
    { from: 'me', text: 'Salut Sarah 😊' },
  ],
};

function Page() {
  const [selectedContactId, setSelectedContactId] = useState(1);
  const [newMessage, setNewMessage] = useState('');

  const messages = messagesData[selectedContactId] || [];

  const handleSend = () => {
    if (!newMessage.trim()) return;
    messagesData[selectedContactId].push({ from: 'me', text: newMessage });
    setNewMessage('');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto p-4 flex bg-gray-100 rounded-lg shadow-md mt-4">
        {/* Sidebar */}
        <div className="w-1/3 border-r border-gray-300 pr-4">
          <h2 className="text-xl font-semibold mb-4">Contacts</h2>
         <ul>
  {contacts.map((contact) => (
    <li
      key={contact.id}
      className={`flex items-center gap-2 cursor-pointer p-2 rounded ${
        selectedContactId === contact.id ? 'bg-blue-200' : 'hover:bg-gray-200'
      }`}
      onClick={() => setSelectedContactId(contact.id)}
    >
      <img
        src={contact.avatar}
        alt={contact.name}
        className="w-10 h-10 rounded-full object-cover"
      />
      <span>{contact.name}</span>
    </li>
  ))}
</ul>

        </div>

        {/* Message Area */}
        <div className="w-2/3 pl-4 flex flex-col justify-between">
          <div className="flex-grow overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4">Conversation</h2>
            <div className="space-y-2">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-2 rounded max-w-md ${
                    msg.from === 'me' ? 'bg-blue-100 self-end ml-auto me' : 'bg-gray-200 other'
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
          </div>

          {/* Message Input */}
          <div className="mt-4 flex items-center gap-2 submit-message">
            <input
              type="text"
              className="flex-grow p-2 border border-gray-300 rounded"
              placeholder="Écrire un message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <div className='btn-send'>
            <button
              onClick={handleSend}
              className="message-valid"
            >
              Envoyer
            </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
