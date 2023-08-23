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

        // Generate PDF content as a buffer
        const pdfBuffer = await page.pdf({
            printBackground: true,
            format: 'A4'
        });

        await browser.close();

        // Convert the PDF buffer to a base64 encoded string
        const pdfBase64 = pdfBuffer.toString('base64');

        var response = {};
        response.PDFBase64 = pdfBase64;
        return response;
    } else {
        // Handle other cases here (e.g., URL)
        await browser.close();
        return null; // You can handle other data sources as needed
    }
}
