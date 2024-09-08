import { test as baseTest } from '@playwright/test';
import { QuestionAnswerPage } from '../page-objects/question-answer-page';
import { QuestionAnswerBuilder } from '../utils/question-answer-builder';
import { Fixtures } from '../custom-types/common-types';

export const test = baseTest.extend<Fixtures>({
  questionAnswerPage: async ({ page }, use) => {
    const questionAnswerPage = new QuestionAnswerPage(page);
    await use(questionAnswerPage);
  },

  // eslint-disable-next-line no-empty-pattern
  questionAnswerBuilder: async ({}, use) => {
    const questionAnswerBuilder = new QuestionAnswerBuilder();
    await use(questionAnswerBuilder);
  },
});
