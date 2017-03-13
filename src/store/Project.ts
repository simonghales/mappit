import {ProjectColumn} from './ProjectColumn';
import {observable, useStrict} from 'mobx';

useStrict(true);

export class Project {

    columns: ProjectColumn[];
    @observable title: string;

    constructor(title: string, columns?: ProjectColumn[]) {
        this.title = title;
        this.columns = columns;
    }

}