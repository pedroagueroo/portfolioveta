const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({
    headless: "new"
  });
  const page = await browser.newPage();
  
  // Instagram carousel size
  await page.setViewport({ width: 1080, height: 1080, deviceScaleFactor: 2 });

  const filesDir = path.join(__dirname, 'files');
  const exportDir = path.join(filesDir, 'exports');

  if (!fs.existsSync(exportDir)) {
    fs.mkdirSync(exportDir);
  }

  for (let i = 1; i <= 5; i++) {
    const filePath = `file://${path.join(filesDir, `slide${i}.html`)}`;
    console.log(`Processing ${filePath}...`);
    
    await page.goto(filePath, { waitUntil: 'networkidle0' });
    
    // Wait a bit to ensure any web fonts or CSS animations (if any) are fully rendered
    await new Promise(r => setTimeout(r, 500));

    await page.screenshot({
      path: path.join(exportDir, `slide${i}.png`),
      type: 'png'
    });
    console.log(`Saved slide${i}.png`);
  }

  await browser.close();
  console.log("All slides generated successfully!");
})();
