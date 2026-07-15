import "./FilterBar.css" 

function FilterBar() {
    return(
        <div className = "filterbar">
            <button>Todas</button>
            <button>Pendientes</button>
            <button>En progreso</button>
            <button>Completadas</button>
        </div>
        
    );
}

export default FilterBar;