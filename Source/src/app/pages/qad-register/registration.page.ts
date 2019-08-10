import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { RegistrationService } from '../../services/registration-service';

import { ToastService } from 'src/app/services/toast-service';

@Component({
    templateUrl: 'registration.page.html',
    styleUrls: ['registration.page.scss'],
    providers: [RegistrationService]

})
export class RegistrationPage {

    data = {};
    type: string;

    constructor(
        public navCtrl: NavController,
        private service: RegistrationService,
        private toastCtrl: ToastService,
        private route: ActivatedRoute) {
        this.type = this.route.snapshot.paramMap.get('type');
        this.service.load(service.getAllThemes()[this.type]).subscribe(d => {
            this.data = d;
        });
    }

    isType(item) {
        return item === parseInt(this.type, 10);
    }

    // events
    onRegister(params): void {
        this.toastCtrl.presentToast('onRegister:' + JSON.stringify(params));
    }
    onSkip(): void {
        this.toastCtrl.presentToast('onSkip');
    }
}
