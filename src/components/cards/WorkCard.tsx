import { Link } from 'react-router';
import './WorkCard.scss'

export function WorkCard(
    {
        title = "Work Card",
        client = "Client name",
        dateText = "00 / 00",
        slug,
        img,
        bgCol
    }:
    {
        title?: string;
        client?: string;
        dateText?: string;
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
            data-anim="lazyLoad"
        >
            <div className='work-card-num-wrap'>
                <p className='work-card-num'>{client}</p>
            </div>
            <div className='work-card-content'>
                <div className='work-card-title-wrap'>
                    <div className='work-card-date-wrap'>
                        <p className='work-card-date'>{dateText}</p>
                    </div>
                    <h3 className='work-card-title'>{title}</h3>
                </div>
            </div>
            <div className='work-card-bg' data-anim-flip="target-container">
                <p className='flip-identifier'>{title}</p>
                <img data-anim-flip="flip-item" className='work-card-bg-img' src={img} style={{backgroundColor: bgCol}}></img>
            </div>
        </Link>
    )
}
