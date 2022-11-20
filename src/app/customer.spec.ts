import { Customer } from "./customers/cust";


describe('Customer', () => {
  it('should create an instance', () => {
    expect(new Customer()).toBeTruthy();
  });
});
