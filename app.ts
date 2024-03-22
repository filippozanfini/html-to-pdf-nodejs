import fs from "fs";
import puppeteer from "puppeteer";

const generatePDFFromHTML = async (htmlContent: string, outputPath: string) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(htmlContent);
  await page.addStyleTag({ path: "assets/style.css" });
  await page.pdf({ path: outputPath, format: "A4" });
  await browser.close();
};

const htmlContent = fs.readFileSync("content.html", "utf8");
generatePDFFromHTML(htmlContent, "custom.pdf")
  .then(() => console.log("PDF generated successfully!"))
  .catch((err) => console.error(err));
