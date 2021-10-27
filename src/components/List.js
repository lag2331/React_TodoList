import ItemList from "./ItemList";

const List = ({ todos, onRemove, onToggle }) => {
    return(
        <div className="List">
            {todos.map(todo => (
                <ItemList
                    todo={todo}
                    key={todo.id}
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            ))}
        </div>
    );
};

export default List;