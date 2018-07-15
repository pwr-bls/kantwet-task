import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'sl-pretty-printer',
  templateUrl: './pretty-printer.component.html',
  styleUrls: ['./pretty-printer.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class PrettyPrinterComponent implements OnInit, OnDestroy {
  public prettyCode: any = null;
  public labelText: string;
  public placeholderText: string;
  public fieldControl = new FormControl();
  public validationError: boolean;
  private fieldControlSub: Subscription = new Subscription();

  constructor() {
  }

  ngOnInit(): void {
    this.validationError = false;
    this.labelText = 'JSON code to be pretty:';
    this.placeholderText = this.placeholderText || this.labelText;
    this.fieldControlSub.add(
      this.fieldControl.valueChanges
        .debounceTime(200)
        .subscribe((value) => {
          this.validationError = false;
          this.parseJsonString(value);
        })
    );
  }

  ngOnDestroy(): void {
    this.fieldControlSub.unsubscribe();
  }

  parseJsonString(value): void {
    if (!value) { return; }
    try {
      this.prettyCode = this.syntaxHighlight(JSON.stringify(JSON.parse(value), undefined, 4));
    } catch (e) {
      this.validationError = true;
    }
  }

  syntaxHighlight(json) {
    const regExp = /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g;
    return json.replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(regExp, (match) => {
        let cls = 'number';
        if (/^"/.test(match)) {
          if (/:$/.test(match)) {
            cls = 'key';
          } else {
            cls = 'string';
          }
        } else if (/true|false/.test(match)) {
          cls = 'boolean';
        } else if (/null/.test(match)) {
          cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
      });
  }
}
