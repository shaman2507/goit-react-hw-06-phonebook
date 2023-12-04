import { useDispatch } from 'react-redux';
import css from './Filter.module.css';
import { createFilter } from 'store/filterSlice/filtersSlice';

const Filter = () => {
    const dispatch = useDispatch();
    const handleChangeFilter = e => {
        const newFilterValue = e.currentTarget.value.toLowerCase();
        dispatch(createFilter(newFilterValue));
    };

    return (
        <div className={css.input}>
            <label>Find contacts by name</label>
            <input type="text" name="filter" onChange={handleChangeFilter} />
        </div>
    );
};

export default Filter;