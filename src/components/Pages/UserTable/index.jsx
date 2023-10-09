import { useState, useEffect } from "react";
import "../UserTable/_usertable.scss";
import { useDispatch, useSelector } from "react-redux";
import { userSlice } from "../../../redux/userSlice";

const { getUsers } = userSlice.actions;

function UserTable() {
  const [data, setData] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [newEntry, setNewEntry] = useState({ name: "", email: "" });
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDbJson = async () => {
      try {
        const response = await fetch('http://localhost:3000/users');
        if (!response.ok) {
          throw new Error('Yuklenmedi');
        }

    // fetchDbJson();
    dispatch(getUsers());
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEntry({ ...newEntry, [name]: value });
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setNewEntry({ ...data[index] });
  };

  const cancelEditing = () => {
    setEditingIndex(-1);
    setNewEntry({ name: "", email: "", phone: "" });
  };

  const editEntry = (index, updatedEntry) => {
    const updatedData = [...data];
    updatedData[index] = updatedEntry;
    setData(updatedData);
    cancelEditing();
  };

  const deleteEntry = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  };

  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="UserTable">
      <div className="container-table">
        <input
          type="text"
          className="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th> {/* Yeni eklenen alan */}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                {["name", "email", "phone"].map((field) => (
                  <td key={field}>
                    {editingIndex === index ? (
                      <input
                        type="text"
                        name={field}
                        value={newEntry[field]}
                        onChange={handleInputChange}
                      />
                    ) : (
                      item[field]
                    )}
                  </td>
                ))}
                <td className="flex-between-p">
                  {editingIndex === index ? (
                    <>
                      <button onClick={() => editEntry(index, newEntry)}>
                        Save
                      </button>
                      <button onClick={cancelEditing}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => deleteEntry(index)}>Delete</button>
                      <button onClick={() => startEditing(index)}>Edit</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserTable;
