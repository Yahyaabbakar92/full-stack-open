import Part from './Parts';
// import Total from './Total'

const Content = ({ courses }) => {
    return (
    <>
    <Part courses={courses} />
    {/* <Total parts={course.parts} /> */}
    </>
)
}

export default Content