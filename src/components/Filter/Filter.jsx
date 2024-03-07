import { Label } from "./Filter.styled";
import { changeValue } from "../../redux/filterSlice";
import { useDispatch, useSelector } from "react-redux";

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter);
  return (
    <Label htmlFor="">Find contacts by name
      <input type="text" name="filter" value={filterValue} onChange={(e) => dispatch(changeValue(e.currentTarget.value))} />
    </Label>
  )
}
export default Filter;