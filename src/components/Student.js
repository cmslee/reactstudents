import Score from "./Score";

function Student (props) {
    const {student} = props;
    console.log(props)
    return (
        <>
            <h3>{student.name}</h3>
            <p>{student.bio}</p>
            <h4>Test Scores</h4>
            {student.scores.map ((score) => <Score scores={score}/>)}
        </>
    )
}

export default Student;