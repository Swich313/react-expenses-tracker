
const Button = props => {
    const {type, onClick} = props;
    return (
        <button type={type} onClick={onClick}>{props.children}</button>
    )
}

export default Button;