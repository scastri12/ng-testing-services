import { ValueService } from './value.service';

fdescribe('ValueService', () => {
  let service: ValueService;
  beforeEach(() => {
    service = new ValueService;
  });

  it('Should be create', () => {
    expect(service).toBeTruthy();
  });

  describe('Tests for getValue', () => {
    it('should return "my value"', () => {
      expect(service.getValue()).toBe('my value');
    });
  });

  describe('Tests for setValue', () => {
    it('should change the value', () => {
      expect(service.getValue()).toBe('my value');
      service.setValue('change');
      expect(service.getValue()).toBe('change');
    });
  });

  describe('Tests for getPromiseValue', () => {
    it('should return "promise value" from promise with then', (doneFn) => {
      service.getPromiseValue()
      .then((value) => {
        //assert
        expect(value).toBe("promise value");
        doneFn();
      })
    });
    it('should return "promise value" from promise with async', async () => {
      const answer = await service.getPromiseValue();
      expect(answer).toBe("promise value");
    });
  });

  describe('Tests for getObservableValue', () => {
    it('should return "observable value" from observable with subscribe', (doneFn) => {
      service.getObservableValue()
      .subscribe((value) => {
        //assert
        expect(value).toBe("observable value");
        doneFn();
      })
    });
  });
});
