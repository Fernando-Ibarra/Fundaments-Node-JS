const puppeteer = require('puppeteer');

(async () => {
    console.log('Lanzamos navegador');
    // const browser = await puppeteer.launch();
    const browser = await puppeteer.launch({ headless:false });

    const page = await browser.newPage();
    await page.goto('https://es.wikipedia.org/wiki/Node.js')

    var titulo1 = await page.evaluate(() => {
        const h1 = document.querySelector('h1');
        console.info(h1.innerHTML);

        return h1.innerHTML;
    });

    console.info(titulo1)

    console.log('Cerramos Navegador');
    browser.close()
    console.log('Navegador Cerrado');
})()