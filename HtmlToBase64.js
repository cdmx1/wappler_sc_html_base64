const puppeteer = require('puppeteer');

exports.ConvertToBase64 = async function (options) {
    options = this.parse(options);

    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox', '--single-process', '--no-zygote'] });
    const page = await browser.newPage();

    if (options.dataSource == 'HTML') {
        var html = '<style>body { padding: 0 !important; margin: 0 !important}</style>' + options.bodyHTML;
        await page.setContent(html, {
            waitUntil: 'networkidle2'
        });
    } else if (options.dataSource == 'URL') {
        await page.goto(options.bodyURL, {
            waitUntil: 'networkidle2'
        });
    }

    // Hack to allow web fonts to load correctly
    await page.screenshot();

    // Generate PDF content as a buffer
    const pdfBuffer = await page.pdf({
        printBackground: true,
        format: 'A4'
    });

    await browser.close();

    // Convert the PDF buffer to a base64 encoded string
    const pdfBase64 = pdfBuffer.toString('base64');

    let response;
    response = pdfBase64;
    return response;
}
