import { useEffect, useState } from "react";
import TableRow from "./TableRow";

const TableBody = () => {
    const [flights, setFlights] = useState(null)

    const getFlights = () => {
        fetch('http://localhost:8000/flights')
            .then(response => response.json())
            .then(flights => setFlights(Object.values(flights.data)))
            .then(err => console.log(err))
    }

    useEffect(() => getFlights(), [])

    console.log(flights)

    return (
        <tbody>
        {flights?.map((flights, _index) => (
            <TableRow key={_index} flight={flights} />
            ))}
        </tbody>
    );
}

export default TableBody;
