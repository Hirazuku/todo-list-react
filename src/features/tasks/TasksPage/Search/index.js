import { useLocation, useNavigate } from "react-router-dom";
import Input from "../../Input"
import searchQueryParamName from "../../TaskPage/searchQueryParamName";

export default () => {

    const location = useLocation();
    const history = useNavigate();
    const query = (new URLSearchParams(location.search)).get(searchQueryParamName);
    
    const onInputChange = ({target}) => {
        const searchParams = new URLSearchParams(location.search);

        if(target.value.trim() === "") {
            searchParams.delete(searchQueryParamName);
        } else {
            searchParams.set(searchQueryParamName, target.value);
        }

        history(`${location.pathname}?${searchParams.toString()}`);
    };

    return (
        <Input 
        placeholder="Filtruj zadania"
        value={query || ""}
        onChange={onInputChange}
        />
    )

}