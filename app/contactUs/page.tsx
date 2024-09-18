// src/ContactPage.tsx
"use client"
import React, { useState } from 'react';
import { FaUserCircle, FaCommentAlt } from 'react-icons/fa';

const CONTACTS_DATA = [
  {
    id: 1,
    name: 'John Doe',
    jobTitle: 'Software Engineer',
    avatar: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Jane Smith',
    jobTitle: 'UI/UX Designer',
    avatar: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Sam Wilson',
    jobTitle: 'Product Manager',
    avatar: 'https://via.placeholder.com/150',
  },
];

const contactUs: React.FC = () => {
  const [activeChat, setActiveChat] = useState<number | null>(null);

  // Open the chat box for the selected contact
  const openChat = (id: number) => {
    setActiveChat(id);
  };

  // Close the chat box
  const closeChat = () => {
    setActiveChat(null);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact List</h2>

      {/* Contact List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CONTACTS_DATA.map((contact) => (
          <div key={contact.id} className="bg-white shadow-lg rounded-lg p-4 relative">
            {/* Contact Avatar */}
            <img
              className="h-20 w-20 rounded-full mx-auto"
              src={contact.avatar}
              alt={contact.name}
            />

            {/* Contact Info */}
            <div className="text-center mt-4">
              <h3 className="text-lg font-semibold text-gray-800">{contact.name}</h3>
              <p className="text-sm text-gray-600">{contact.jobTitle}</p>
            </div>

            {/* Chat Button */}
            <button
              onClick={() => openChat(contact.id)}
              className="mt-4 w-full flex items-center justify-center px-4 py-2 bg-green-600 text-white font-semibold rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <FaCommentAlt className="mr-2" />
              Chat
            </button>

            {/* Chat Window */}
            {activeChat === contact.id && (
              <div className="absolute top-0 left-0 w-full h-full bg-white p-4 shadow-lg rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Chat with {contact.name}
                  </h3>
                  <button
                    onClick={closeChat}
                    className="text-red-500 hover:text-red-700 focus:outline-none"
                  >
                    X
                  </button>
                </div>
                <div className="chat-box h-40 bg-gray-100 p-2 overflow-y-auto rounded-md mb-2">
                  {/* Example chat content */}
                  <p className="text-sm text-gray-800">Hi {contact.name}, how can I help you?</p>
                </div>

                {/* Input Box */}
                <div className="flex items-center">
                  <input
                    type="text"
                    className="flex-1 px-4 py-2 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Type your message..."
                  />
                  <button className="ml-2 px-4 py-2 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700 focus:outline-none">
                    Send
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default contactUs;
