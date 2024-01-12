const StatisticLine = ({ text, value }) => {
    return (
    <table>
        <tbody>
            <tr>
                <td style={{paddingRight: 10}}>{text}</td>
                <td>{value}</td>
            </tr>
        </tbody>
    </table>

    )
}

export default StatisticLine