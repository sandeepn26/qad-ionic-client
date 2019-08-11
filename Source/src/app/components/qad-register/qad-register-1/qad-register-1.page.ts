import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'test-1',
  templateUrl: './qad-register-1.page.html',
  styleUrls: ['./qad-register-1.page.scss'],
})
export class QadRegister1Page implements OnChanges {

  constructor(private http: HttpClient) {
  }

  @Input() data: any;

  @Output() onRegister = new EventEmitter();
  @Output() onSkip = new EventEmitter();

  private isEmailValid = true;
  private isUsernameValid = true;
  private isPasswordValid = true;
  private isCityValid = true;
  private isCountryValid = true;

  private regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  item = {
    'password': '',
    'displayName': '',
    'confirmPassword': '',
    'email': ''
  };

  

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }

  onRegisterFunc(): void {
    if (event) {
      event.stopPropagation();
    }
    if (this.validate()) {
      this.onRegister.emit(this.item);
    }
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
		headers.append('Cache-control', 'no-cache');
		headers.append('Cache-control', 'no-store');
		headers.append('Expires', '0');
    headers.append('Pragma', 'no-cache');
    
    this.http.post('//localhost:8080/register', this.item, { headers: headers }).subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured"+JSON.stringify(err));
        }
      );
  }

  onSkipFunc(): void {
    if (event) {
      event.stopPropagation();
    }
    if (this.validate()) {
      this.onSkip.emit(this.item);
    }
  }

  validate(): boolean {
    this.isEmailValid = true;
    this.isUsernameValid = true;
    this.isPasswordValid = true;
    this.isCityValid = true;
    this.isCountryValid = true;

    if (!this.item.password || this.item.password.length === 0) {
      this.isPasswordValid = false;
    }

    this.isEmailValid = this.regex.test(this.item.email);

    return this.isEmailValid &&
      this.isPasswordValid &&
      this.isUsernameValid &&
      this.isCityValid &&
      this.isCountryValid;
  }
}
