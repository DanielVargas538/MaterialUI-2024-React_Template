import React, {useState, useEffect} from 'react'

const EditStudentForm = props => {

    const [student, setStudent] = useState(props.currentStudent);
    
    useEffect(() => {
        setStudent(props.currentStudent);
    }, [props]);
    
    const handleInputChange = event => {
        const {name, value} = event.target;
        setStudent({...student, [name]: value});
    }

    return (
        <form onSubmit={event => {event.preventDefault(); props.updateStudent(student.id, student); }}>
            <label className='labelTemplate'>Nombre</label>
                <input type="text" name="first_name" value={student.first_name} onChange={handleInputChange}/>
            <label className='labelTemplate'>Apellido</label>
                <input type="text" name="last_name" value={student.last_name} onChange={handleInputChange}/>
            <label className='labelTemplate'>Edad</label>
                <input type="number" min="5" max="120" name="age" value={student.age} onChange={handleInputChange}/>
            <label className='labelTemplate'>Carrera</label>
                <input type="text" name="career" value={student.career} onChange={handleInputChange}/>
            <br/>
            <button type="submit">Actualizar Estudiante</button>
            <br/>
            <button onClick={() => props.setEditing(false)} >Cancelar</button>
        </form>
    )
}

export default EditStudentForm
