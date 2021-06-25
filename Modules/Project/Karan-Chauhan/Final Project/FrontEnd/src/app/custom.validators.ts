import { FormControl, FormGroup } from "@angular/forms";


    export function IsCharacter(Control:FormControl): {[s:string]:boolean|null}{
        var regex = /^[A-Za-z\s]*$/;
        if(!Control.value.match(regex))
        {
            return {'NoCharacter':true}
        } 
        return null;
    }


    export function IsDigit(Control:FormControl): {[s:string]:boolean|null}{
        var regex = /^[0-9]*$/;
        if(!Control.value.match(regex))
        {
            return {'NoDigit':true}
        } 
        return null;
    }

