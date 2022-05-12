import { format } from "date-fns";
import { useEffect, useState } from "react";
import BokingModal from "./BokingModal";
import Service from "./Service";


const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    return (
        <div>
            <h4 className="text-xl text-secondary text-center">Available Appoinetment on {format(date, 'PP')}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BokingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
            ></BokingModal>}
        </div>
    );
};

export default AvailableAppointments;