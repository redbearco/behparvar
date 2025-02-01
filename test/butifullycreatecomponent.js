// Clean Code
// You must create your custom button component and use it where you want
const CustomButton = ({iconName, content = '', children}) => {
    return (
        <div className="custom-button">
            {iconName &&
            <span className={`icon icon-${iconName}`}/>}
            {content &&
            <span className="content">{content}</span>}

            {/* render children of this component if content be empty/null */}
            {!content && children}
        </div>
    )
}
