function Layout(props){
    const {children} = this
    const layoutStyle = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        border: "1px solid rgba(232, 232, 232, 0.7)"
    }
    const myChildren = children.map((child) =>{
        const child = {
            border: "1px solid rgba(232, 232, 232, 1)"
        }
        return (
            <div>
                {child}
            </div>
        )
    })
    return <div style={layoutStyle}>{myChildren}</div>;
}

export default Layout;