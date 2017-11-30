import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs";

export class Link {
    constructor(public readonly href: string, public readonly text?: string, public readonly rel?: string,) {
        this.text = text || href;
        this.rel = rel || "none";
    }

}

@Injectable()
export class BPMNStore {

    constructor(private http: Http) {
    }

    listDiagrams(): Observable<Link[]> {
        console.log('listDiagrams');

        // This could be async and coming from a server:
        return Observable.of([
            new Link("public/diagrams/FA_Upload.bpmn"),
            new Link("public/diagrams/dbs_dmwt_workflow.bpmn")
        ]).delay(2000);
    }

    paletteEntries(): Observable<any> {
        // This could be async and coming from a server:
        return Observable.of({
            'extra': {
                group: 'storage',
                className: ['fa-coffee', 'fa'],
                title: 'EXTRA',
                action: {
                    click: () => console.log('EXTRA')
                }
            }
        }).delay(1000);
    }
}