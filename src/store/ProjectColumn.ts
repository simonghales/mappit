
import {ProjectCard} from './ProjectCard';
export class ProjectColumn {

    title: string;
    cards: ProjectCard[];

    constructor(title: string, cards?: ProjectCard[]) {
        this.title = title;
        this.cards = cards;
    }

}