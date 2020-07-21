class NetworkView {
    constructor() {
        this._text = `<textarea
        class="form-control"
        placeholder="a=>b \na=>c \nb=>c"
        id="exampleFormControlTextarea1"
        rows="3" disabled/>`;
        this._file = `<input type="file" class="custom-file-input" id="customFile" disabled/>
        <label class="custom-file-label" for="customFile">Choose file</label>`;
    }

    _update(opt) {
        if (opt == "text") {
            document.getElementById("textField").innerHTML = this._text.replace("disabled", "");
            document.getElementById("fileField").innerHTML = this._file;
        }
        else {
            document.getElementById("textField").innerHTML = this._text;
            document.getElementById("fileField").innerHTML = this._file.replace("disabled","");
        }
    }
}