const sortsCancelXpath = "//span[text()='Shorts']/ancestor::h2/following-sibling::div//button[@aria-label='Not interested']"

function getElementsByXPath(xpath, parent) {
    let results = [];
    let query = document.evaluate(xpath, parent || document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    for (let i = 0, length = query.snapshotLength; i < length; ++i)
        results.push(query.snapshotItem(i));

    return results;
}


chrome.runtime.onMessage.addListener(function (request) {
    if (request && request.type === 'page-rendered') {
        // for removing the shorts button on top left in yt home page
        const shorts = document.querySelectorAll('[title="Shorts"]');
        shorts?.forEach(s => s.style.display = "none")

        // removing the shorts shown in home page
        var shortsCancelButtons = getElementsByXPath(sortsCancelXpath)
        console.log(shortsCancelButtons)
        shortsCancelButtons.forEach(button => button.click())

        //TODO: removing shorts from video playing page
    }
    if (request && request.type === 'alert-user') {
        console.l
        alert("shorts detected going back!")
    }
});