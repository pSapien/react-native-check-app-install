export const createPackage = (pkgName, urlScheme, urlParams) => ({
    pkgName, 
    urlScheme, 
    urlParams
});

export const APP_LIST = {
    "facebook": createPackage("com.facebook.katana", "fb", "requests"),
    "whatsapp": createPackage("com.whatsapp", "whatsapp", "app"),
    "instagram": createPackage("com.instagram.android", "instagram",  "app"),
    "viber": createPackage("com.viber.voip", "viber"),
    "facebook_messenger": createPackage("com.facebook.orca", "fb-messenger", "user-thread/{user-id}"),
    "gmail": createPackage("com.google.android.gm", "googlegmail", "co?subject=foo&body=bar"),
    "snapchat": createPackage("com.snapchat.android", "snapchat", "?u=foo"),
}

