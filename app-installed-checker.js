import { Linking, Platform } from 'react-native';
import { APP_LIST } from './app-list';
import CheckPackageInstallation from './android';

export const isAppInstalledAndroid = key =>
    new Promise((res, rej) =>
        CheckPackageInstallation
            .isPackageInstalled(key, (isInstalled) => res(isInstalled))
    )

export const isAppInstalledIOS = (key) =>
    new Promise((res, rej) =>
        Linking
            .canOpenURL(key.urlScheme + '://' + (key.urlParams || ''))
            .then(isInstalled => res(isInstalled))
            .catch(err => rej(err))
    )

export const isAppInstalled = (keyOrPackage) =>
    Platform.select({
        ios: () => isAppInstalledIOS(APP_LIST[keyOrPackage] || keyOrPackage),
        android: () => isAppInstalledAndroid(APP_LIST[keyOrPackage] || keyOrPackage),
    })

