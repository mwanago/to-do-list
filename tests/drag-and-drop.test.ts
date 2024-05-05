import { expect, test } from '@playwright/test';

test.describe('When the user visits the page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });
  test.describe('and creates a new task', () => {
    let taskName: string;
    test.beforeEach(async ({ page }) => {
      taskName = 'Buy milk';
      const input = page.getByPlaceholder('Add new item');
      await input.fill(taskName);

      await page.getByRole('button').click();
    });
    test('it should add the new task to the to-do list', ({ page }) => {
      const toDoList = page.getByTestId('to-do-list');
      const newTask = toDoList.getByText(taskName);

      expect(newTask).toBeVisible();
    });
  });
});
