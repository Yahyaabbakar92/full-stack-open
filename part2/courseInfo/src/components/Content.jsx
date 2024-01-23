import Title from './Title';
// import Part from './Parts';
// import Total from './Total'

const Content = ({ parts }) => {
    console.log(parts);
    return (
    <>
    <Title title={parts} />
    {/* {parts.map((part) => (
        <Part name={part.name} exercises={part.exercises} key={part.id} />
    ))} */}
    {/* <Total parts={course.parts} /> */}
    </>
)
}

export default Content