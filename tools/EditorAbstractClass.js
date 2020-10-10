/* Original Code Provided by Shiva Raju 
   Modified by Emily Yu */
class Editor {
    constructor() {
        if (this.constructor === Editor) {
            throw new TypeError('Abstract class "Editor" cannot be instantiated directly.');
        }
    
        // Check that the implementations of the class have a public method named mount
        if(this.mount === undefined){
            throw new TypeError('A method called mount must be implemented for classes implementing PFEditorAbstractClass');
        }
        // Check that the implementations of the class have a public method named style.
        if(this.style === undefined){
            throw new TypeError('A method called style must be implemented for classes implementing PFEditorAbstractClass');
        }
        // Check that the implementations of the class have a public method named getContent
        if(this.getContent === undefined){
            throw new TypeError('A method called getContent must be implemented for classes implementing PFEditorAbstractClass');
        }
        // Check that the implementations of the class have a public method named persistContent
        if(this.persistContent === undefined){
            throw new TypeError('A method called persistContent must be implemented for classes implementing PFEditorAbstractClass');
        }
        // Check that the implementations of the class have a public method method minimize
        if(this.minimize === undefined){
            throw new TypeError('A method called minimize must be implemented for classes implementing PFEditorAbstractClass');
        }
        // Check that the implementations of the class have a public method named close
        if(this.close === undefined){
            throw new TypeError('A method called close must be implemented for classes implementing PFEditorAbstractClass');
        }
    }
}