
// if the page-lang-change changes then change the page URL to the value of it.
document.getElementById('page-lang-change').addEventListener('change', function () {
    var selectedValue = this.value;

    // Get the current page path (everything after the domain)
    var currentPath = window.location.pathname;

    // Base URLs
    const enBase = "https://apca.sdcmuj.com";
    const translateBase = "https://apca-sdcmuj-com.translate.goog";

    var targetUrl = '';

    if (selectedValue === 'english') {
        // Switch to English - construct the original URL with current path
        targetUrl = enBase + currentPath;
    } else if (selectedValue === 'hindi') {
        // Switch to Hindi translation
        targetUrl = translateBase + currentPath + "?_x_tr_sl=auto&_x_tr_tl=hi&_x_tr_hl=en-US&_x_tr_pto=wapp";
    } else if (selectedValue === 'gujrati') {
        // Switch to Gujarati translation
        targetUrl = translateBase + currentPath + "?_x_tr_sl=auto&_x_tr_tl=gu&_x_tr_hl=en-US&_x_tr_pto=wapp";
    }

    if (targetUrl) {
        window.location.href = targetUrl;
    }
});
