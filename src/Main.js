function Main({activeNote}) {
    return (
        <div className="app-main">
            <div className="app-main-note-edit">
                <input type="text" id="title" autoFocus/>
                <textarea id="body" placeholder="Put your fucking notes here"></textarea>
            </div>

            <div className="app-main-note-preview">
                <h1 className="preview-title">{activeNote.title}</h1>
                <div className="markdown-preview">
                    <p>{activeNote.body}</p>
                </div>
            </div>
        </div>
    );
}
export default Main;