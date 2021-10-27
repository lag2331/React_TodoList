const Template = ({ children }) => {
    return(
        <div className="Template">
            <div className="title">Todo List</div>
            <div className="content">{children}</div>
        </div>
    );
};

export default Template;