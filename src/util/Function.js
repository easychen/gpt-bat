import AppState from '../store/AppState';
import AppToaster from './Toaster';
import { sprintf } from 'sprintf-js';
import { Object } from 'core-js';
//const t = i18n.getI18nTranslate();

//translate.setI18n(i18n);

export function is_in_wechat()
{
    return navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == "micromessenger";
}

export function toast( string ) {
    AppToaster.show({ "message": string});
}

