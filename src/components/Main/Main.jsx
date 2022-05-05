import React from 'react';
import s from './Main.module.css';




const Main = ({ flightList }) => {
    return (
        <div className={s.main__wrap}>
            {flightList.result.flights.map((f, idx) => {
                const flightThere = f.flight.legs[0]
                const flightBack = f.flight.legs[1]

                const idxSegmentFlightThere = flightThere.segments.length === 1
                    ? 0
                    : flightThere.segments.length - 1

                const idxSegmentFlightBack = flightBack.segments.length === 1
                    ? 0
                    : flightBack.segments.length - 1

                return <div key={idx}>{

                    <div className={s.card}>
                        {/* // логотип и стоимость */}
                        <div className={s.card__header}>
                            <div className={s.card__logo}>LOGO</div>
                            <div className={s.card__cost}>
                                <div className={s.card__cost_right}>{f.flight.price.total.amount} P</div>
                                <div>Стоимость для одного взрослого пассажира</div>
                            </div>
                        </div>

                        {/* //------------------- рейс туда ----------------------------------------//---------------------//----------- */}

                        <div className={s.card__info}>
                            <div className={s.information}>
                                <div className={s.information__city}>
                                    {/* // город и аэропорт отправления */}
                                    <span>{flightThere.segments[0].departureCity.caption}, </span>
                                    <span>{flightThere.segments[0].departureAirport.caption} </span>
                                    <span>({flightThere.segments[0].departureAirport.uid}) </span>
                                    <span>---</span>
                                    {/* // город и аэропорт прибытия */}
                                    <span>{flightThere.segments[idxSegmentFlightThere].arrivalCity
                                        ? flightThere.segments[idxSegmentFlightThere].arrivalCity.caption
                                        : 'город прибытия отсутствует'}, </span>
                                    <span>{flightThere.segments[idxSegmentFlightThere].arrivalAirport.caption} </span>
                                    <span>({flightThere.segments[idxSegmentFlightThere].arrivalAirport.uid}) </span>
                                </div>

                                <hr className={s.information__line} />

                                {/* // время отправления и прибытия */}

                                <div className={s.information__time}>
                                    <div className={s.information__time_left}>
                                        <span>{flightThere.segments[0].departureDate} </span>
                                    </div>
                                    <div className={s.information__time_center}>
                                        <span>{flightThere.duration} мин</span>
                                    </div>
                                    <div className={s.information__time_right}>
                                        <span>{flightThere.segments[idxSegmentFlightThere].arrivalDate} </span>
                                    </div>
                                </div >

                                <hr className={s.information__line_short} />

                                {/* // информация о пересадке */}

                                <div >
                                    <h6 className={s.information__transfer}>{
                                        flightThere.segments.length && flightThere.segments.length === 1
                                            ? 'без пересадок'
                                            : flightThere.segments.length - 1 + ' пересадка'}
                                    </h6>
                                </div>

                                {/* // информация о перевозчике */}

                                <div className={s.information__airlines}>
                                    Рейс выполняет: {f.flight.carrier.caption}
                                </div>
                            </div>
                        </div>

                        <hr className={s.information__line_bold} />

                        {/* //------------------- рейс обратно -----------------------------------------//---------------------//----------- */}

                        <div className={s.card__info}>
                            <div className={s.information}>
                                <div className={s.information__city}>
                                    {/* // город и аэропорт отправления */}
                                    <span>{flightBack.segments[0].departureCity
                                        ? flightBack.segments[0].departureCity.caption
                                        : 'город отправления отсутствует'}, </span>
                                    <span>{flightBack.segments[0].departureAirport.caption} </span>
                                    <span>({flightBack.segments[0].departureAirport.uid}) </span>
                                    <span>---</span>
                                    {/* // город и аэропорт прибытия */}
                                    <span>{flightBack.segments[idxSegmentFlightBack].arrivalCity
                                        ? flightBack.segments[idxSegmentFlightBack].arrivalCity.caption
                                        : 'город прибытия отсутствует'}, </span>
                                    <span>{flightBack.segments[idxSegmentFlightBack].arrivalAirport.caption} </span>
                                    <span>({flightBack.segments[idxSegmentFlightBack].arrivalAirport.uid}) </span>
                                </div>

                                <hr className={s.information__line} />

                                {/* // время отправления и прибытия */}

                                <div className={s.information__time}>
                                    <div className={s.information__time_left}>
                                        <span>{flightBack.segments[0].departureDate} </span>
                                    </div>
                                    <div className={s.information__time_center}>
                                        <span>{flightBack.duration} мин</span>
                                    </div>
                                    <div className={s.information__time_right}>
                                        <span>{flightBack.segments[idxSegmentFlightBack].arrivalDate} </span>
                                    </div>
                                </div >

                                <hr className={s.information__line_short} />

                                {/* // информация о пересадке */}

                                <div >
                                    <h6 className={s.information__transfer}>{
                                        flightBack.segments.length && flightBack.segments.length === 1
                                            ? 'без пересадок'
                                            : flightBack.segments.length - 1 + ' пересадка'}
                                    </h6>
                                </div>

                                {/* // информация о перевозчике */}

                                <div className={s.information__airlines}>
                                    Рейс выполняет: {f.flight.carrier.caption}
                                </div>
                            </div>
                        </div>


                        <div className={s.card__footer}>ВЫБРАТЬ</div>
                    </div>
                }</div>
            })}
        </div>
    )
}
export default Main
