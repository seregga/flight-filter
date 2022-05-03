import React from 'react';
import s from './Main.module.css';


const Main = ({ flightList }) => {
    return (
        <div className={s.main__wrap}>
            {flightList.result.flights.map((f, idx) => <div key={idx}>{
                <div className={s.card}>
                    <div className={s.card__header}>
                        <div className={s.card__logo}>LOGO</div>
                        <div className={s.card__cost}>
                            <div className={s.card__cost_right}>{f.flight.price.total.amount} P</div>
                            <div>Стоимость для одного взрослого пассажира</div>
                        </div>
                    </div>
                    <div className={s.card__info}>
                        <div className={s.information}>
                            <div className={s.information__city}>
                                <span>{f.flight.legs[0].segments[0].departureCity.caption}, </span>
                                <span>{f.flight.legs[0].segments[0].departureAirport.caption} </span>
                                <span>({f.flight.legs[0].segments[0].departureAirport.uid}) </span>
                                <span>---</span>
                                <span>{f.flight.legs[0].segments[1].arrivalCity.caption}, </span>
                                <span>{f.flight.legs[0].segments[1].arrivalAirport.caption} </span>
                                <span>({f.flight.legs[0].segments[1].arrivalAirport.uid}) </span>
                            </div>

                            <hr className={s.information__line} />

                            <div className={s.information__time}>
                                <div className={s.information__time_left}>
                                    <span>{f.flight.legs[0].segments[0].departureDate} </span>
                                </div>
                                <div className={s.information__time_center}>
                                    <span>{f.flight.legs[0].duration} </span>
                                </div>
                                <div className={s.information__time_right}>
                                    <span>{f.flight.legs[0].segments[1].arrivalDate} </span>
                                </div>
                            </div >

                            <hr className={s.information__line_short} />

                            <div >
                                <h6 className={s.information__transfer}>1 пересадка</h6>
                            </div>
                            <div className={s.information__airlines}>
                                Рейс выполняет: {f.flight.carrier.caption}
                            </div>
                        </div>
                    </div>

                    <hr className={s.information__line_bold} />


                    <div className={s.card__info}>
                        <div className={s.information}>
                            <div className={s.information__city}>
                                <span>{f.flight.legs[0].segments[0].departureCity.caption}, </span>
                                <span>{f.flight.legs[0].segments[0].departureAirport.caption} </span>
                                <span>({f.flight.legs[0].segments[0].departureAirport.uid}) </span>
                                <span>---</span>
                                <span>{f.flight.legs[0].segments[1].arrivalCity.caption}, </span>
                                <span>{f.flight.legs[0].segments[1].arrivalAirport.caption} </span>
                                <span>({f.flight.legs[0].segments[1].arrivalAirport.uid}) </span>
                            </div>

                            <hr className={s.information__line} />

                            <div className={s.information__time}>
                                <div className={s.information__time_left}>
                                    <span>{f.flight.legs[0].segments[0].departureDate} </span>
                                </div>
                                <div className={s.information__time_center}>
                                    <span>{f.flight.legs[0].duration} </span>
                                </div>
                                <div className={s.information__time_right}>
                                    <span>{f.flight.legs[0].segments[1].arrivalDate} </span>
                                </div>
                            </div >

                            <hr className={s.information__line_short} />

                            <div >
                                <h6 className={s.information__transfer}>1 пересадка</h6>
                            </div>
                            <div className={s.information__airlines}>
                                Рейс выполняет: {f.flight.carrier.caption}
                            </div>
                        </div>
                    </div>
                    <div className={s.card__footer}>ВЫБРАТЬ</div>
                </div>
            }</div>)}


        </div>
    )
}
export default Main
