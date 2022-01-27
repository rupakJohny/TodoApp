import { Fragment } from "react"
import { useDispatch, useSelector } from 'react-redux'

const todo = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.data)

    const handleInputChange = (e) => {
        dispatch({ type: 'TODO_ONCHANGE', item: e.target.value })
    }
    const addHandler = (e) => {
        e.preventDefault()
        dispatch({ type: 'TODO_ADD' })
    }
    const deleteHandler = () => {
        dispatch({ type: 'TODO_DELETE' })
    }
    return (
        <Fragment>
            <h1>TODO APP</h1>
            <form onSubmit={addHandler}>
                <input type="text" className="form-control" onChange={handleInputChange} />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            {data.map((item, index) => (
                <p key={index}>
                    {item}
                    <button onClick={deleteHandler}>
                        DELETE
                    </button>
                </p>
            ))}
        </Fragment>
    )
}

export default todo