import Total from './Total'

const Part = ({ courses }) => {
    return (
        <>
            {courses.map(({ name, id, parts }) => (
                <div key={id}>
                <h2>{name}</h2>
                {parts.map(({ id, name, exercises }) => (
                    <div key={id}>
                    <p >{name} {exercises}</p>
                    </div>
                ))}
                <Total parts={parts} />
                </div>
            ))}
        </>
)
}

export default Part