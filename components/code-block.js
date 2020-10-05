import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/cjs/styles/prism";

const getLanguageAndHighlights = (value) => {
    var pattern = /\{([^}]+)\}/g;
    let language = '';
    let lineHighlights = [];
    if (value && typeof value === 'string') {
        language = value.replace(pattern, '');
        const highlights = value.match(pattern, '');
        if(highlights && typeof highlights === 'object' && highlights.length === 1){
            lineHighlights = highlights[0].replace('{','').replace('}','').split(",").map(Number);
        }
    }

    return { 'language': language, 'lineHighlights': lineHighlights };
}

export default function CodeBlock(props) {
    const { language, lineHighlights } = getLanguageAndHighlights(props.language);
    const value = props.value;
    return (
        <SyntaxHighlighter language={language} style={coy} showLineNumbers={true} wrapLines={true}
            lineProps={lineNumber => {
                let style = { display: 'block' };
                if (lineHighlights && lineHighlights.includes(lineNumber)) {
                    style.backgroundColor = '#dbffdb';
                }

                return { style };
            }}
        >
            {value}
        </SyntaxHighlighter>
    );
}