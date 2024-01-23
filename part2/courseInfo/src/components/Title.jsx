const Title = ({ title }) => {
    const courseName = title.map(({ name, id }) => (
        <h2 key={id}>{name}</h2>
    )) 
  return (
    <>
    {courseName}
    </>
  )
}

export default Title