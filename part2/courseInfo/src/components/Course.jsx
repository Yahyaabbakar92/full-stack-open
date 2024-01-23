import Header from './Header'
import Content from './Content'

const Course = ({ course }) => {
    return (
    <div>
        <Header />
        <Content parts={course} />
    </div>
    )
}

export default Course