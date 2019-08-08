import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: '../pages/home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: '../pages/list/list.module#ListPageModule'
  },
  {
    path: 'items/:type',
    loadChildren: '../pages/items/items.module#ItemsPageModule'
  },
  {
    path: 'subitems/:type',
    loadChildren: '../pages/sub-items/sub-items.module#SubItemsPageModule'
  },
  {
    path: 'textview',
    loadChildren: '../pages/item-details-text-view/item-details-text-view.module#ItemDetailsPageTextViewModule'
  },
  {
    path: 'login/:type',
    loadChildren: '../pages/item-details-login/item-details-login.module#ItemDetailsLoginPageModule'
  },
  {
    path: 'register/:type',
    loadChildren: '../pages/item-details-register/item-details-register.module#ItemDetailsRegisterPageModule'
  },
  {
    path: 'forgot-password/:type',
    loadChildren: '../pages/item-details-forgot-password/item-details-forgot-password.module#ItemDetailsForgotPasswordPageModule'
  },
  {
    path: 'new-password/:type',
    loadChildren: '../pages/item-details-new-password/item-details-new-password.module#ItemDetailsNewPasswordPageModule'
  },
  {
    path: 'check-boxes/:type',
    loadChildren: '../pages/item-details-check-box/item-details-check-box.module#ItemDetailsCheckBoxPageModule'
  },
  {
    path: 'radio-button/:type',
    loadChildren: '../pages/item-details-radio-button/item-details-radio-button.module#ItemDetailsRadioButtonPageModule'
  },
  {
    path: 'toggle/:type',
    loadChildren: '../pages/item-details-toggle-button/item-details-toggle-button.module#ItemDetailsToggleButtonPageModule'
  },
  {
    path: 'form/:type',
    loadChildren: '../pages/item-details-forms/item-details-forms.module#ItemDetailsFormsPageModule'
  },
  {
    path: 'splash-screens/:type',
    loadChildren: '../pages/item-details-splash-screen/item-details-splash-screen.module#ItemDetailsSplashScreenPageModule'
  },
  {
    path: 'search-bars/:type',
    loadChildren: '../pages/item-details-search-bar/item-details-search-bar.module#ItemDetailsSearchBarPageModule'
  },
  {
    path: 'wizard/:type',
    loadChildren: '../pages/item-details-wizard/item-details-wizard.module#ItemDetailsWizardPageModule'
  },
  {
    path: 'parallax/:type',
    loadChildren: '../pages/item-details-parallax/item-details-parallax.module#ItemDetailsParallaxPageModule'
  },
  {
    path: 'spinner/:type',
    loadChildren: '../pages/item-details-spinner/item-details-spinner.module#ItemDetailsSpinnerPageModule'
  },
  {
    path: 'maps/:type',
    loadChildren: '../pages/item-details-map/item-details-map.module#ItemDetailsMapPageModule'
  },
  {
    path: 'qrcode/:type',
    loadChildren: '../pages/item-details-qrcode/item-details-qrcode.module#ItemDetailsQrcodePageModule'
  },
  {
    path: 'timeline/:type',
    loadChildren: '../pages/item-details-timeline/item-details-timeline.module#ItemDetailsTimeLinePageModule'
  },
  {
    path: 'profile/:type',
    loadChildren: '../pages/item-details-profile/item-details-profile.module#ItemDetailsProfilePageModule'
  },
  {
    path: 'range/:type',
    loadChildren: '../pages/item-details-range/item-details-range.module#ItemDetailsRangePageModule'
  },
  {
    path: 'select/:type',
    loadChildren: '../pages/item-details-select/item-details-select.module#ItemDetailsSelectPageModule'
  },
  {
    path: 'comment/:type',
    loadChildren: '../pages/item-details-comment/item-details-comment.module#ItemDetailsCommentPageModule'
  },
  {
    path: 'payment/:type',
    loadChildren: '../pages/item-details-payment/item-details-payment.module#ItemDetailsPaymentPageModule'
  },
  {
    path: 'action-sheet/:type',
    loadChildren: '../pages/item-details-action-sheet/item-details-action-sheet.module#ItemDetailsActionSheetPageModule'
  },
  {
    path: 'alert/:type',
    loadChildren: '../pages/item-details-alert/item-details-alert.module#ItemDetailsAlertPageModule'
  },
  {
    path: 'expandable/:type',
    loadChildren: '../pages/item-details-expandable/item-details-expandable.module#ItemDetailsExpandablePageModule'
  },
  {
    path: 'drag-and-drop/:type',
    loadChildren: '../pages/item-details-drag-and-drop/item-details-drag-and-drop.module#ItemDetailsDragAndDropPageModule'
  },
  {
    path: 'google-card/:type',
    loadChildren: '../pages/item-details-google-card/item-details-google-card.module#ItemDetailsGoogleCardPageModule'
  },
  {
    path: 'swipe-to-dismiss/:type',
    loadChildren: '../pages/item-details-swipe-to-dismiss/item-details-swipe-to-dismiss.module#ItemDetailsSwipeToDismissPageModule'
  },
  {
    path: 'segment/:type',
    loadChildren: '../pages/item-details-segment/item-details-segment.module#ItemDetailsSegmentPageModule'
  },
  {
    path: 'image-gallery/:type',
    loadChildren: '../pages/item-details-image-gallery/item-details-image-gallery.module#ItemDetailsImageGalleryPageModule'
  },
  {
    path: 'image-gallery-subgallery',
    loadChildren: '../pages/item-details-image-subgallery/item-details-image-subgallery.module#ItemDetailsImageSubGalleryPageModule'
  },
  {
    path: 'full-image-gallery',
    loadChildren: '../pages/item-details-full-image-gallery/item-details-full-image-gallery.module#ItemDetailsFullImageGalleryPageModule'
  },
  {
    path: 'tab/:type',
    loadChildren: '../pages/item-details-tab/item-details-tab.module#ItemDetailsTabPageModule'
  },
  {
    path: 'settings',
    loadChildren: '../pages/item-details-settings/item-details-settings.module#ItemDetailsSettingsPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
