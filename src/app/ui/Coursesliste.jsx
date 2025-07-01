'use client';
import { useState } from 'react';

const Courseslist = ({ size }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // Champ de recherche par nom du cours
  const [filterCategory, setFilterCategory] = useState(''); // Filtre par catégorie de cours

  const handleCheckboxChange = (e, courseId) => {
    if (e.target.checked) {
      setSelectedItems((prevSelected) => [...prevSelected, courseId]);
    } else {
      setSelectedItems((prevSelected) =>
        prevSelected.filter((id) => id !== courseId)
      );
    }
  };

  // Liste des cours (remplacez par vos vrais cours)
  const Courseslist = [
    {
      id: 1,
      name: 'Mathematics 101',
      instructor: 'John Doe',
      category: 'Mathematics',
      duration: '3 months',
      subscription: 'Open',
    },
    {
      id: 2,
      name: 'Physics 202',
      instructor: 'Jane Smith',
      category: 'Physics',
      duration: '4 months',
      subscription: 'Closed',
    },
    {
      id: 3,
      name: 'Chemistry 303',
      instructor: 'Alice Johnson',
      category: 'Chemistry',
      duration: '2 months',
      subscription: 'Open',
    },
    // Ajoutez ici d'autres cours
  ];

  // Appliquer les filtres
  const filteredCourses = Courseslist.filter((course) => {
    const matchesSearchQuery =
      course.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory
      ? course.category.toLowerCase() === filterCategory.toLowerCase()
      : true;

    return matchesSearchQuery && matchesCategory;
  });

  if (!size) {
    size = filteredCourses.length;
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      {/* Filtres */}
      <div className="p-4 flex gap-4">
        <input
          type="text"
          placeholder="Search by course name"
          className="p-2 border rounded"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="p-2 border rounded"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Physics">Physics</option>
          <option value="Chemistry">Chemistry</option>
          {/* Ajoutez d'autres catégories de cours si nécessaire */}
        </select>
      </div>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 light:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 light:bg-gray-700 light:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 light:focus:ring-blue-600 light:ring-offset-gray-800 light:focus:ring-offset-gray-800 focus:ring-2 light:bg-gray-700 light:border-gray-600"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedItems(filteredCourses.map((course) => course.id));
                    } else {
                      setSelectedItems([]);
                    }
                  }}
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">Course Name</th>
            <th scope="col" className="px-6 py-3">Instructor</th>
            <th scope="col" className="px-6 py-3">Category</th>
            <th scope="col" className="px-6 py-3">Duration</th>
            <th scope="col" className="px-6 py-3">Subscription Status</th>
            <th scope="col" className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredCourses.slice(0, size).map((course) => (
            <tr
              key={course.id}
              className="bg-white border-b light:bg-gray-800 light:border-gray-700 border-gray-200 hover:bg-gray-50 light:hover:bg-gray-600"
            >
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id={`checkbox-table-search-${course.id}`}
                    type="checkbox"
                    checked={selectedItems.includes(course.id)}
                    onChange={(e) => handleCheckboxChange(e, course.id)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 light:focus:ring-blue-600 light:ring-offset-gray-800 light:focus:ring-offset-gray-800 focus:ring-2 light:bg-gray-700 light:border-gray-600"
                  />
                  <label
                    htmlFor={`checkbox-table-search-${course.id}`}
                    className="sr-only"
                  >
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap light:text-white"
              >
                {course.name}
              </th>
              <td className="px-6 py-4">{course.instructor}</td>
              <td className="px-6 py-4">{course.category}</td>
              <td className="px-6 py-4">{course.duration}</td>
              <td className="px-6 py-4">{course.subscription}</td>

              <td className="flex items-center px-6 py-4">
                <a href="#" className="font-medium text-green-600 light:text-green-500 hover:underline">
                  View
                </a>
                <a href="#" className="font-medium text-red-600 light:text-red-500 hover:underline ms-3">
                  Enroll
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Courseslist;
