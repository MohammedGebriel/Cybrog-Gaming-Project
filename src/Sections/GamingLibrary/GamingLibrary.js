import './GamingLibrary.css'
import {GamingLibraryCard,SectionHeader,SectionWrapper} from '../../Components/index'
import GamingLibraryData from '../../Data/GamingLibraryData';

const GamingLibrary = () => {
    let cards = GamingLibraryData.map(card => 
        <GamingLibraryCard key={card.id} image={card.image} title={card.title} categorey={card.categorey} data_added={card.data_added} hours_played={card.hours_played}  download={card.downloaded}/>
    )
    return (
        <>
            <SectionWrapper>
                <SectionHeader name= "Your Gaming" description="Library"/>
                    <div className='gaming-library-cards'>
                        {cards}
                    </div>
            </SectionWrapper>
        </>

    )
}

export default GamingLibrary