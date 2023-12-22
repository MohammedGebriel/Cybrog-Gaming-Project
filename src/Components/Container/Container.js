import './container.css'

const container = (props) => {
    return (
        <div className='container main-container'>
            {props.children}
        </div>
    )
}

export default container