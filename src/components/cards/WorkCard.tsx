import { Link } from 'react-router';
import './WorkCard.scss'

export function WorkCard(
    {
        title = "Work Card",
        client = "Client name",
        slug,
        img,
        bgCol
    }:
    {
        title?: string;
        client?: string;
        slug: string;
        img: string;
        bgCol: string;
    }
) {
    return (
        <Link
            className="work-card"
            to={`/work/websites/${slug}`}
            aria-label={`View ${title} website project`}
            data-transition="flip-img-clone"
        >
            <div className='work-card-content'>
                <div className='work-card-title-wrap'>
                    <h3 className='work-card-title'>{title}</h3>
                    <h4 className='work-card-client'>{client}</h4>
                </div>
            </div>
            <div className='work-card-bg' data-anim-flip="target-container" style={{backgroundColor: bgCol}}>
                <p className='flip-identifier'>{title}</p>
                <img data-anim-flip="flip-item" className='work-card-bg-img' src={img}></img>
            </div>
        </Link>
    )
}
