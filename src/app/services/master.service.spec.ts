import { MasterService } from './master.service';
import { FakeValueService } from './value-fake.service';
import { ValueService } from './value.service';

fdescribe('MasterService', () => {

  it('should return "my value" from the real service', () => {
    const valueService: ValueService = new ValueService();
    const masterService: MasterService = new MasterService(valueService);
    expect(masterService.getValue()).toBe('my value');
  });

  it('should return "other value" from the fake service', () => {
    const fakeValueService: FakeValueService = new FakeValueService();
    const masterService: MasterService = new MasterService(fakeValueService as unknown as ValueService);
    expect(masterService.getValue()).toBe('fake value');
  });

  it('should return "fake from obj" from the fake object', () => {
    const fake = { getValue: () => 'fake from obj' };
    const masterService: MasterService = new MasterService(fake as ValueService);
    expect(masterService.getValue()).toBe('fake from obj');
  });
});
