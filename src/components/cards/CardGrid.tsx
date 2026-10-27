import { Card } from "./Card";
import { sampleCardData, type cardDataType } from "./cardDataType";





export function CardGrid(
    { cardData = sampleCardData }:
    { cardData?: cardDataType[] }
) {




    return (


        <div
        data-swiper
        data-swiper-desktop="false"
        data-swiper-tablet="false"
        data-swiper-mobile="true"
        data-swiper-slides-per-view="auto"
        data-swiper-space-between="16"
        data-swiper-centered-slides="true">

            <div className="card-grid"
            data-swiper-wrapper>


                {cardData.map((card) => (
                    <div data-swiper-slide key={card.key} className="swiper-slide">
                        <Card
                            title={card.title}
                            description={card.description}
                            img={card.img}
                            link={card.link}
                            id={card.key}
                            button={true}
                            data-swiper-slide
                        />
                    </div>

                ))}

            </div>

        </div>
    
    )
}