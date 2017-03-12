import {observable, computed, useStrict} from 'mobx';

useStrict(true);

export class Store {
    @observable clicked: number = 0;
    @computed get clickedSquared() {
        return this.clicked * this.clicked;
    }
}

export default new Store();
