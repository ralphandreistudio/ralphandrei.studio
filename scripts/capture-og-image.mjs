/**
 * Captures the landing page as a social card and writes public/og-image.png
 *
 * One-time: `npx playwright install chromium`
 * Optional: set OG_CAPTURE_URL to capture a non-default domain.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const outFile = path.join(root, 'public', 'og-image.png')
const TARGET_URL = process.env.OG_CAPTURE_URL || 'https://ralphandrei-studio.vercel.app/'

const OG_WIDTH = 1200
const OG_HEIGHT = 630

async function waitForHttpOk(url, timeoutMs = 90_000) {
  const deadline = Date.now() + timeoutMs
  while (Date.now() < deadline) {
    try {
      const res = await fetch(url, { redirect: 'follow' })
      if (res.ok) return
    } catch {
      /* retry */
    }
    await new Promise((r) => setTimeout(r, 400))
  }
  throw new Error(`Timed out waiting for ${url}`)
}

async function main() {
  await waitForHttpOk(TARGET_URL)

  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage({
    viewport: { width: OG_WIDTH, height: OG_HEIGHT },
    deviceScaleFactor: 1,
  })

  await page.goto(TARGET_URL, { waitUntil: 'networkidle', timeout: 60_000 })
  await page.evaluate(() => document.fonts.ready)
  await new Promise((r) => setTimeout(r, 900))

  fs.mkdirSync(path.dirname(outFile), { recursive: true })
  await page.screenshot({ path: outFile, type: 'png' })
  await browser.close()

  const stat = fs.statSync(outFile)
  console.log(`[capture-og] wrote ${path.relative(root, outFile)} (${stat.size} bytes, ${OG_WIDTH}x${OG_HEIGHT}) from ${TARGET_URL}`)
}

main().catch((err) => {
  console.error('[capture-og]', err)
  process.exit(1)
})
