import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots, price } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <div className='text-center'>
                    <h2 className="card-title text-secondary text-center mt-5 justify-center">{name}</h2>
                    <p>{
                        slots.length > 0
                            ? <span>{slots[0]}</span>
                            : <span className='text-red-500'>Today is all book. Please try next day sir..!!</span>
                    }</p>
                    <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                    <p></p>
                    <small>Price: ${price}</small>
                </div>
                <div className="card-actions justify-center">
                    <label htmlFor="boking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        className="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary">Book Appointment</label>

                </div>
            </div>
        </div>
    );
};

export default Service;