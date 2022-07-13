import { useHistory } from "react-router-dom";


const HouseFilter = ({allHouses}) => {
    const history = useHistory();
    const coutries = allHouses
    ? Array.from(new Set(allHouses.map(house => house.country)))
    : [];
    coutries.unshift(null);

    const onSearchChange = (e) => {
        const country = e.target.value;
        history.push(`/searchresults/${country}`);
    }

    return (
        <div className="row mt-3">
            <div className="offset-md-2 col-md-4">
                Look for dream hos in country:
            </div>
        <div className="col-md-4 mt-3">
            <select className="form-select" onChange={onSearchChange}>
                {coutries.map(country => (
                    <option key={country} value={country}>
                        {country}
                    </option>
                ))}
            </select>
        </div>
    </div>
      );
}
 
export default HouseFilter;