
/*
memo = [
    {
        'Id' : ~~~~
        'Email' : ~~~~
        'content' : ~~~~
    }
]
*/
const List = ({isMemo}) => {
    return(
        <div>
            {isMemo.map((el, idx) => {
                return(
                    <div key={idx}>
                        <div>{el.Id}</div>
                        <div>{el.Email}</div>
                        <div>{el.content}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default List;