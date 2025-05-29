import type { Filter } from "../types/types";

interface FilterButtonsProps {
    currentFilterState: Filter;
    onFilterChange: (filter: Filter) => void;
}

const FilterButtons = ({ currentFilterState, onFilterChange }: FilterButtonsProps) => {
    const filters: Filter[] = ['all tasks', 'active', 'completed'];

    return (
        <div className="filter-buttons">
            {filters.map((filter) => (
                <button
                    key={filter}
                    onClick={() => onFilterChange(filter)}
                    style={{
                        fontWeight: currentFilterState === filter ? 'bold' : 'normal'
                    }}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
}

export default FilterButtons;