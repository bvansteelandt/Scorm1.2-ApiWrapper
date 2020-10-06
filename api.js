class ScormAPI {

    constructor() {
        this.values = [];

        console.log("Scorm 1.2 API created");
    }

    LMSInitialize(parameter) {
        console.log("LMSInitialize(parameter):LMSInitialize(" + parameter + ")");
        return true;
    }

    LMSFinish(parameter) {
        console.log("LMSFinish(parameter):LMSFinish(" + parameter + ")");
        return true;
    }

    LMSGetValue(key) {
        console.log("LMSGetValue(element):LMSGetValue(" + key + ")");
        return typeof this.values[key] !== "undefined" ? this.values[key] : "";
    }

    LMSSetValue(key, value) {
        console.log("LMSSetValue(element,value):LMSSetValue(" + key + "," + value + ")");
        this.values[key] = value;
        return true;
    }
    
    LMSCommit() {
        console.log("LMSCommit(parameter):LMSCommit(" + parameter + ")");
        return true;
    }
    
    LMSGetLastError() {
        console.log("LMSGetLastError()");
        return "0";
    }
    
    LMSGetErrorString(errorCode) {
        console.log("LMSGetErrorString(errorCode):LMSGetErrorString(" + errorCode + ")");

        switch (errorCode) {
            case "0": { return "No error"; }
            case "101": { return "General exception"; }
            case "201": { return "Invalid argument error"; }
            case "202": { return "Element cannot have children"; }
            case "203": { return "Element not an array - Cannot have count"; }
            case "301": { return "Not initialized"; }
            case "401": { return "Not implemented error"; }
            case "402": { return "Invalid set value, element is a keyword"; }
            case "403": { return "Element is read only"; }
            case "404": { return "Element is write only"; }
            case "405": { return "Incorrect Data Type"; }
            default: { return ""; }
        }
    }
    
    LMSGetDiagnostic(errorCode) {
        console.log("LMSGetDiagnostic(errorCode):LMSGetDiagnostic(" + errorCode + ")");

        switch (errorCode) {
            case "0": { return "No error. No errors were encountered. Successful API call."; }
            case "101": { return "General exception. An unexpected error was encountered."; }
            case "201": { return "Invalid argument error. A call was made to a DataModel element that does not exist."; }
            case "202": { return "Element cannot have children. A call was made to an Element that does not support _children"; }
            case "203": { return "Element is not an array.  Cannot have count. A call was made to an Element that does not support _count."; }
            case "301": { return "Not initialized. The SCO has not yet been initialized.  It needs to call LMSInitialize() first."; }
            case "401": { return "Not implemented error.  A call was made to a DataModel element that is not supported."; }
            case "402": { return "Invalid set value, element is a keyword.  Keyword values cannot be changed"; }
            case "403": { return "Element is read only.  A call was made to set the value of a read-only element."; }
            case "404": { return "Element is write only.  A call was made to get the value of a write-only element."; }
            case "405": { return "Incorrect Data Type.  The syntax of a call to change an element was incorrect."; }
            default: { return ""; }
        }
    }
    

}