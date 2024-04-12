import React, {useState} from 'react';

const AddStudents = (props) => {
    const initialFormState = {id: null, first_name: '', last_name: '', age: '', career: ''};
    const [student, setStudent] = useState(initialFormState);

    const handleInputChange = event => {
        console.log(event.target);
        const {name, value} = event.target;
        setStudent({...student, [name]: value})
    };
    return (
        <form onSubmit={e => { 
                e.preventDefault(); 
                if (!student.first_name || !student.last_name || !student.age || !student.career) return; 
                props.addStudent(student)
                setStudent(initialFormState)
        }}>
            <label className='labelTemplate'>Nombre: </label>
                <input type="text" name="first_name" value={student.first_name} onChange={handleInputChange}/>
            <label className='labelTemplate'>Apellido: </label>
                <input type="text" name="last_name" value={student.last_name} onChange={handleInputChange}/>
            <label className='labelTemplate'>Edad: </label>
                <input type="number" min="5" max="120" name="age" value={student.age} onChange={handleInputChange}/>
            <label className='labelTemplate'>Carrera: </label>
                <input type="text" name="career" value={student.career} onChange={handleInputChange}/>
            <br/>
            <button type="submit">Agregar nuevo usuario</button>
        </form>
    )
};

export default AddStudents
