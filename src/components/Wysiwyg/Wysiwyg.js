import { Editable, Slate, withReact } from "slate-react";
import { createEditor } from "slate";
import { useMemo } from "react";
import useEditorConfig from "../../utils/useEditorConfig"

const Wysiwyg = ({document, onChange}) => {
    const editor = useMemo(() => withReact(createEditor()), []);
    const { renderElement, renderLeaf } = useEditorConfig(editor);
    return (
            <Slate editor={editor} initialValue={document} onChange={onChange}>
                <Editable renderElement={renderElement} renderLeaf={renderLeaf}/>
            </Slate>
    )
};

export default Wysiwyg;