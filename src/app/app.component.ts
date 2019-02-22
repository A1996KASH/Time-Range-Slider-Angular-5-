import { Component } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'time-slider';
  minValue: number = 0;
  maxValue: number = 24;
  options: Options = {
    floor: 0,
    ceil: 24,
    step: 0.02,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return 'Start Time : ' + this.formatLabel(value);
        case LabelType.High:
          return 'End Time : ' + this.formatLabel(value);
        default:
          return 'Time : ' + this.formatLabel(value);
      }
    }
  };

  formatLabel(value: number | null) {
    let hhPart;
    if (!value) {
      return 0;
    }

    const decimalPart = +value.toString().replace(/^[^\.]+/, '0');
    const mm = Math.round(decimalPart * 60);
    const mmPart =
      mm.toString().length === 1 ? mm.toString() + '0' : mm.toString();

    if (value >= 0) {
      const valueStr = value.toFixed(2);
      const strArr = valueStr.split('.');
      if (strArr[0].length === 1) {
        strArr[0] = '0' + strArr[0];
      }
      hhPart = strArr[0];
    }

    return hhPart + ':' + mmPart;
  }

  onChangeDate() {
    console.log("low");
    console.log(this.combinewithDate(this.minValue));
  }

  changehigh() {
    console.log("high");
    console.log(this.combinewithDate(this.maxValue));
  }
  combinewithDate(value) {
    const date = new Date().toDateString();
    const time = this.formatLabel(value).toString();
    return new Date(date + ' ' + time);
  }
}
