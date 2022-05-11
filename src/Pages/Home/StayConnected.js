import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import appointment from '../../assets/images/appointment.png'

const StayConnected = () => {
    return (



        <section style={{
            background: `url(${appointment})`
        }}

            className='flex justify-center items-center'>
            <div>
                <h4 className='text-primary'>Contact Us</h4>
                <h2 className='text-3xl text-white'>Stay Connected With us</h2>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text"></span>
                    </label>
                    <label className="input-group input-group-vertical">
                        <span>Email</span>
                        <input type="text" placeholder="Email" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text"></span>
                    </label>
                    <label className="input-group input-group-vertical">
                        <span>Subject</span>
                        <input type="text" placeholder="Subject" className="input input-bordered" />
                    </label>
                    <div className='text-center mb-5 mt-5'>
                        <PrimaryButton>Submit</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StayConnected;