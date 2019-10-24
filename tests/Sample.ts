import { Selector } from 'testcafe';

fixture`Getting Started`.page`http://localhost:3000`;

test('My first test', async t => {
  const iframe = Selector('#iframe');
  await t.expect(await Selector('li').count).eql(1);

  await t.switchToIframe(iframe);
  const imp = Selector('button');

  await t.click(imp);

  await t.switchToMainWindow();
  await t.debug();
  await t.expect(await Selector('li').count).eql(2);
});
