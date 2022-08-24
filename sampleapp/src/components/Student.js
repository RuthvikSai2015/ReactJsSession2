function Student({ students }) {

    return (
        <ul>
            {
                students.map((student) => {
                    return (
                        <li key={student.id} style={{color:"red"}}>
                            <p>{student.name}</p>
                            <p>{student.sports}</p>
                        </li>
                    )
                })
            }
        </ul>
    )
}
export default Student