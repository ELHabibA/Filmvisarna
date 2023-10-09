// Detta kan vara boknings-sidan om vi vill det
import BioSeats from './BioSeatsComponents/BioSeats'
import ChooseAge from './components/ChooseAge'

const Booking = () => {
    return (
        <>
            <ChooseAge />
            <BioSeats />
        </>
    )

    
}

export default Booking