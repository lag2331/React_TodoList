import { ImCheckboxChecked, ImCheckboxUnchecked, ImBin} from "react-icons/im";
import cn from 'classnames';

const ItemList = ({ todo, onRemove, onToggle }) => {
    const { id, text, checked } = todo;

    return(
        <div className="ItemList">
            <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
                {checked ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={() => onRemove(id)}>
                <ImBin />
            </div>
        </div>
    );
};

export default ItemList;