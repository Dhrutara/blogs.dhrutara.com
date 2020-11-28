
export default function LinkRenderer(props) {
    const url = props.href;
    const children = props.children || props.href
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" style={{"color":"blue", "cursor":"pointer"}}>{children}</a>
    );
}