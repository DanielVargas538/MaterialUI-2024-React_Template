import React from 'react'

const StudentTable = (props) => (
    <table className='tableTemplate'>
        <thead>
        <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
            <th>Carrera</th>
            <th ></th>
            <th ></th>
        </tr>
        </thead>
        <tbody>
        {props.students.length > 0 ? (
            props.students.map(student => (
                <tr key={student.id}>
                    <td>{student.first_name}</td>
                    <td>{student.last_name}</td>
                    <td>{student.age}</td>
                    <td>{student.career}</td>
                    <td>
                        <button onClick={() => {props.editRow(student) }}>Editar</button>
                        <button onClick={() => props.deleteStudent(student.id)}>Eliminar</button>
                    </td>
                </tr>
            ))
        ) : (
            <tr>
                <td>No hay Estudiantes</td>
            </tr>
        )}
        </tbody>
    </table>
);

export default StudentTable