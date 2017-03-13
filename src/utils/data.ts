
import {Store} from '../store/store';
import {Project} from '../store/Project';
import {ProjectColumn} from '../store/ProjectColumn';
import {ProjectCard} from '../store/ProjectCard';

export interface Interface_ProjectCardData {
    title: string,
    description: string
}

export interface Interface_ProjectColumnData {
    title: string,
    cards: Interface_ProjectCardData[]
}

export interface Interface_ProjectData {
    title: string,
    columns: Interface_ProjectColumnData[]
}

export function loadAndStoreInitialData(store: Store): void {
    const data: any = require('../data/project.json');
    store.setSelectedProject(data);
}

function parseDataAndCreateCards(cardsData: Interface_ProjectCardData[]): ProjectCard[] {
    let cards: ProjectCard[] = [];

    cardsData.forEach((data: Interface_ProjectCardData) => {
       const title = data.title;
       const description = data.description;
       cards.push(
           new ProjectCard(title, description)
       );
    });

    return cards;
}

function parseDataAndCreateColumns(columnsData: Interface_ProjectColumnData[]): ProjectColumn[] {
    let columns: ProjectColumn[] = [];

    columnsData.forEach((data: Interface_ProjectColumnData) => {
       const title = data.title;
       const cards = this.parseDataAndCreateCards();
       columns.push(
           new ProjectColumn(title, cards)
       );
    });

    return columns;
}

function parseDataAndCreateProject(data: Interface_ProjectData = null): Project {

    const title = data.title;
    const columns = parseDataAndCreateColumns(data.columns);

    return new Project(title, columns);

}