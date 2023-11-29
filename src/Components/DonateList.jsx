import React from 'react';
import DonateListCard from './DonateListCard';
import { DonateListCardct } from '../Contents/DonateContent'

export default function DonateList(props) {
  return (
    <div>
        <section className='donate__list'>
            <h3>
                {props.DonateListTitle}
            </h3>
            <div>
                <div className='donate__list__cards'>
                    {DonateListCardct.map((DonateListCardcts, index) => 
                        (
                            <DonateListCard  key={index}
                                price={DonateListCardcts.price}
                                details={DonateListCardcts.detail}
                            />
                        )
                    )}
                </div>
            </div>
        </section>
    </div>
  )
}
