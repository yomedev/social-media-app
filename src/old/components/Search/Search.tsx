import { SearchIcon } from "../Icons";
import './Search.scss'

export default function Search() {
  return (
    <div className="search">
      <label className="search__label" htmlFor="search">Search</label>
      <SearchIcon className="icon" />
      <input placeholder="Search" className="search__input" type="text" id="search" name="search" />
    </div>
  );
}
