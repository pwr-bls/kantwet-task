import { PrettyPrinterModule } from './pretty-printer.module';

describe('PrettyPrinterModule', () => {
  let prettyPrinterModule: PrettyPrinterModule;

  beforeEach(() => {
    prettyPrinterModule = new PrettyPrinterModule();
  });

  it('should create an instance', () => {
    expect(prettyPrinterModule).toBeTruthy();
  });
});
