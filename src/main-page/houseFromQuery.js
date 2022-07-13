import { useParams } from "react-router-dom";
import House from "../house";


const HouseFromQuery = ({allHouses}) => {
    const { id } = useParams();
    const house = allHouses.find(house => house.id === parseInt(id));

    if (!house) {
        return <div>Ho not foud...</div>;
    }

    return ( <House house={house} /> );
}
 
export default HouseFromQuery;