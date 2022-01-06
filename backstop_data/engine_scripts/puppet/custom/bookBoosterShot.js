function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

module.exports = async page => {
    await page.click("#block-mainpagecontent>article>div>div>div:nth-child(1)>div>div.alert.alert--warning.margin-top-24-\\!.margin-bottom-16-\\!>a:nth-child(6)");
    sleep(3000);
    await page.click("#dose_3");
    sleep(3000);

}