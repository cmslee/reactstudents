function Score (props) {
    const {scores} = props;
    console.log(props)

    return (
        <div>
            <p>{scores.date} | Score: {scores.score}</p>
        </div>
    )
}

export default Score;