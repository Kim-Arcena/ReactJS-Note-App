function Main(){
    return (
        <div className="app-main">
            <div className="app-main-note-edit">
                <input type="text" id="title" autofocus/>
                <textarea id="body" placeholder="Put your fucking notes here"></textarea>
            </div>

            <div className="app-main-note-preview">
                <h1 className="preview-title">Title</h1>
                <div className="markdown-preview">
                    <p>Preview</p>
                </div>
            </div>
        </div>
    );
}
export default Main;