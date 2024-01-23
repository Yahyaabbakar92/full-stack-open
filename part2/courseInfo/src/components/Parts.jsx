const Part = ({ courses }) => {
    return (
        <>
            {courses.map(({ name, id, parts }) => (
                <div key={id}>
                <h2>{name}</h2>
                {parts.map(({ id, name, exercises }) => (
                    <p key={id}>{name} {exercises}</p>
                ))}
                </div>
            ))}
        </>
)
}

export default Part