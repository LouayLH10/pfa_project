'use client';
import { useState } from 'react';

const Userslist = ({ size }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // Champ de recherche par nom
  const [filterCategory, setFilterCategory] = useState(''); // Filtre par rôle (Student/Teacher)

  const handleCheckboxChange = (e, userId) => {
    if (e.target.checked) {
      setSelectedItems((prevSelected) => [...prevSelected, userId]);
    } else {
      setSelectedItems((prevSelected) =>
        prevSelected.filter((id) => id !== userId)
      );
    }
  };

  // Liste des utilisateurs (remplacez par vos vrais utilisateurs)
  const Userslist = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'Student',
      phone: '+123456789',
      subscription: 'Active',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'Teacher',
      phone: '+987654321',
      subscription: 'Inactive',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      role: 'Student',
      phone: '+1122334455',
      subscription: 'Active',
    },
    // Ajoutez ici d'autres utilisateurs
  ];

  // Appliquer les filtres
  const filteredUsers = Userslist.filter((user) => {
    const matchesSearchQuery =
      user.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory
      ? user.role.toLowerCase() === filterCategory.toLowerCase()
      : true;

    return matchesSearchQuery && matchesCategory;
  });

  if (!size) {
    size = filteredUsers.length;
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      {/* Filtres */}
      <div className="p-4 flex gap-4">
        <input
          type="text"
          placeholder="Search by name"
          className="p-2 border rounded"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="p-2 border rounded"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="">All Roles</option>
          <option value="Student">Student</option>
          <option value="Teacher">Teacher</option>
          {/* Ajoutez d'autres rôles si nécessaire */}
        </select>
      </div>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 light:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 light:bg-gray-700 light:text-gray-400">
          <tr>

            <th scope="col" className="px-6 py-3">User Name</th>
            <th scope="col" className="px-6 py-3">Email</th>
            <th scope="col" className="px-6 py-3">Student/Teacher</th>
            <th scope="col" className="px-6 py-3">Phone Number</th>
            <th scope="col" className="px-6 py-3">Subscription</th>
            <th scope="col" className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.slice(0, size).map((user) => (
            <tr
              key={user.id}
              className="bg-white border-b light:bg-gray-800 light:border-gray-700 border-gray-200 hover:bg-gray-50 light:hover:bg-gray-600"
            >
             
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap light:text-white"
              >
                {user.name}
              </th>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">{user.role}</td>
              <td className="px-6 py-4">{user.phone}</td>
              <td className="px-6 py-4">{user.subscription}</td>

              <td className="flex items-center px-6 py-4">
                <a href="#" className="font-medium text-green-600 light:text-green-500 hover:underline">
                  Visit
                </a>
                <a href="#" className="font-medium text-red-600 light:text-red-500 hover:underline ms-3">
                  Block
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Userslist;
