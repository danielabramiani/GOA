import React, { useState } from 'react';

const initialStudents = [
    {name: "Daniel", dad: "Chiko", facebook:"chiko bene", age: 14, groupLeader: "Yes"},
    {name: "Davit", dad: "Leo", facebook:"Leo Beraia", age: 13, groupLeader: "No"},
];

const StudentTable = ({ role }) => {
    const [students, setStudents] = useState(initialStudents);
    const [newStudent, setNewStudents] = useState({name: "", dad: "", facebook:"", age: "", groupLeader: "No"});
};

const handleAddStudent = () => {
    setStudents([...students, newStudent]);
    setNewStudents({name: "",dad: "", facebook:"", age: "", groupLeader: "No" });
};

const handleRemoveStudent = (index) => {
    const updatedStudents = students.filter((_, i) => i != index);
    setNewStudents(updatedStudents);
};

const handleChange = (e) => {
    const { name, value} = e.target
    setNewStudents((prev) => ({ ...prev, [name]: value}));
};

return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Dads name</th>
                    <th>facebook</th>
                    <th>age</th>
                    <th>group leader</th>
                    {role === "moderator" && <th>Actions</th>}
                </tr>
            </thead>
        </table>
        <tbody>
            {students.map((student, index)) => (
                <tr key={index}>
                    <td>{student.name}</td>
                    <td>{student.dad}</td>
                    <td>{student.facebook}</td>
                    <td>{student.age}</td>
                    <td>{student.groupLeader}</td>
                    {role === "moderator" && (
                        <td>
                            <button onClick={() => handleRemoveStudent(index)}>Remove</button>
                        </td>
                    )}
                </tr>
            ))}
        </tbody>
    </div>
)