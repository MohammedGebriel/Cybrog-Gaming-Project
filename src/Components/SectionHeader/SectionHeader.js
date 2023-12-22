import './SectionHeader.css'

const SectionHeader = (props) => {
    return (
        <>
            <div className='section-header'>
                <h4>{props.name}</h4>
                <span>{props.description}</span>
            </div>
        </>
    )
}

export default SectionHeader