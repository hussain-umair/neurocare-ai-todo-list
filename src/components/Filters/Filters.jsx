import classes from './Filters.module.scss'
import { taskFilters } from "../../utils/constants"


const Filters = ({ filter: selectedFilter, filterHandler }) => {
  return (
    <div className={classes.filtersContainer}>
      {
        taskFilters.map(filter => 
          <button
          key={filter} 
          className={selectedFilter === filter ? classes.selected : ''}
          onClick={() => filterHandler(filter)}>
            {filter}
          </button>
        )
      }
    </div>
  )
}

export default Filters