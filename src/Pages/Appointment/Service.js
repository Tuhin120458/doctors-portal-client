import React from 'react';

const Service = ({ service, setTreatment }) => {
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
                    <label for="boking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        class="btn btn-secondary text-white uppercase">Book Appointment</label>

                </div>
            </div>
        </div>
    );
};

export default Service;