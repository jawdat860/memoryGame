import { useContext} from 'react'
import Card from './Card'
import Context from './data/Context'

function Cards(){
const ctx = useContext(Context)

    return (
        <div className="container">
            { ctx.items.map((item, index) => (
                <Card key={index} item={item} id={index} handleClick={ctx.handleClick} />
            )) }
        </div>
    )
}

export default Cards