const urlSSLVPN = 'https://gateway.itc.u-tokyo.ac.jp/,DanaInfo='
chrome.tabs.query({ active: true, currentWindow: true }, (e) => {
    const url = e[0].url;
    const host = url.split('/')[2]
    if (host.includes('gateway.itc.u-tokyo.ac.jp')){
        window.open(url, '_self')
    }else{
        const DanaInfo = `${host}+${url.split(host+'/')[1]}`
        window.open(urlSSLVPN + DanaInfo, '_blank')
    }
});