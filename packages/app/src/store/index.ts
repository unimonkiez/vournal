import { observable, action } from 'mobx';

export class Store {
  @observable
  public name = 'Programmer';

  @action setName(name: string) {
    this.name = name;
  }
}

export const store = new Store();

if (__DEV__) {
  (window as any).store = store;
  (window as any).Store = Store;
}
