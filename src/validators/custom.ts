import { FormControl } from '@angular/forms';

export class CustomValidators {
    static negativeNumber(control: FormControl) {
        let valid =  parseFloat(control.value);
        if(valid < 0){
            return {
                negativeNumber: {
                    valid: false
                }
            }
        }
    }
}