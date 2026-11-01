import { Link } from 'react-router';
import './WorkCard.scss'

export function WorkCard(
    {
        title = "Work Card",
        client = "Client name",
        slug,
    }:
    {
        title?: string;
        client?: string;
        slug: string;
    }
) {
    return (
        <Link
            className="work-card"
            to={`/work/websites/${slug}`}
            aria-label={`View ${title} website project`}
        >
            <div className='work-card-content'>
                <div className='work-card-title-wrap'>
                    <h3 className='work-card-title'>{title}</h3>
                    <h4 className='work-card-client'>{client}</h4>
                </div>
            </div>
        </Link>
    )
}
