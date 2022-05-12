import React from 'react';

const Service = ({ service }) => {
    const { name, slots } = service;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <div className='text-center'>
                    <h2 class="card-title text-secondary text-center mt-5 justify-center">{name}</h2>
                    <p>{
                        slots.length > 0
                            ? <span>{slots[0]}</span>
                            : <span className='text-red-500'>Today is all book. Please try next day sir..!!</span>
                    }</p>
                    <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                </div>
                <div class="card-actions justify-center">
                    <button disabled={slots.length === 0} class="btn btn-secondary text-white uppercase">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Service;