import './MostPopular.css';
import {Card,SectionHeader,SectionWrapper} from '../../Components/index'
import MostPopularData from '../../Data/MostPopularData';
const MostPopular = () => {
    let cards = MostPopularData.map(card => 
        <Card key={card.id} image={card.image} title={card.title} categorey={card.categorey} rate={card.rate} download={card.download}/>
    )
    return (
        <>
            <SectionWrapper>
                <SectionHeader name= "MostPopular" description="Right Now"/>
                    <div className='most-popular-items'>
                        {cards}
                    </div>
            </SectionWrapper>
        </>
    )
}
export default MostPopular