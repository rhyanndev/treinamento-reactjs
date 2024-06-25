import './Filter.scss';
import { useTodos } from '../TodosContext.jsx';

function Filter() {

    const store = useTodos();

    return (
        <>
            <div className="filters">
                <div>
                    <p>Filtrar por estado</p>
                    <div className="badges">
                        <div 
                        className={`badge ${store.filterBy === `todo` ? `selected}` : ''}`}
                        onClick={()=>store.setFilterBy('todo')}>
                            A fazer
                        </div>
                        <div className={`badge ${store.filterBy === `done` ? `selected}` : ''}`}
                        onClick={()=>store.setFilterBy('done')}>
                            Feitas
                        </div>
                        {
                            store.filterBy &&
                            <span onClick={()=>store.setFilterBy('')} className="clear">
                                x limpar
                            </span>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Filter