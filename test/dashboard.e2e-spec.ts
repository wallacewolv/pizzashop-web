import { expect, test } from '@playwright/test'

test('display day orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(await page.getByText('20', { exact: true })).toBeVisible()
  expect(await page.getByText('-5% em relação a ontem')).toBeVisible()
})

test('display month orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(await page.getByText('200', { exact: true })).toBeVisible()
  expect(await page.getByText('+7% em relação ao mês passado')).toBeVisible()
})

test('display month cancel orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(await page.getByText('5', { exact: true })).toBeVisible()
  expect(await page.getByText('-1% em relação ao mês passado')).toBeVisible()
})

test('display month revenue metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(await page.getByText('R$ 200,00')).toBeVisible()
  expect(await page.getByText('+10% em relação ao mês passado')).toBeVisible()
})
