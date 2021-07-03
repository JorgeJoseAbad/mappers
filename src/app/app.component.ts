import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { map } from 'rxjs/operators';

import { KeyValuePipe } from '@angular/common';
import { DogsService } from './dogs.service';

import { EntityMapperService } from './mapper/entityMapper.service';
import { IReadEntity } from './mapper/iReadEntity';
import { IEntity } from './mapper/iEntity';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [KeyValuePipe]
})
export class AppComponent implements OnInit, AfterViewInit{

    title = 'mappers';
    readEntities: Array<IReadEntity>;
    entity: IEntity;
    entityDos: IEntity;
    entities: Array<IEntity>;
    entitiesOf$: Observable<Array<IEntity>>;
    entitiesFrom: Array<IEntity> = [];

  @ViewChild('btn', { static: true })
    myBoton: ElementRef; //cambio button por myBoton, nombre mas de propiedad

    public constructor(
      private _entityMapperService: EntityMapperService,
      private dogsService : DogsService,
      private keyValuePipe : KeyValuePipe
    ) {
    }


    ngAfterViewInit(){
      console.log('Values on ngAfterViewInit():');
      console.log("Button is:", this.myBoton.nativeElement.click()); //native method

    }


    ngOnInit(): void {
        // Map entity
        this.readEntities = [
            {
                id: '1',
                name: 'example mapper',
                birthDate: '2000/01/01',
                type: 'person',
                version: 1
            }
            , {
                id: '2',
                name: 'example mapper 2',
                birthDate: '2000/01/01',
                type: 'person2',
                version: 2
            }
        ];

        this.entity = this._entityMapperService.transform(this.readEntities[0]);
        this.entityDos = this._entityMapperService.transform(this.readEntities[1]);

        // Map array of entities
        this.entities = this._entityMapperService.transform(this.readEntities);

        // Use in observables
        // of
        const readEntitiesOf$: Observable<Array<IReadEntity>> = of(this.readEntities);
        this.entitiesOf$ = readEntitiesOf$
        .pipe(
          map(
            (readEntity: Array<IReadEntity>) =>
                this._entityMapperService.transform(readEntity)
            ));

        // from
        const arrayReadEntitiesFrom$: Observable<IReadEntity> = from(this.readEntities);
        arrayReadEntitiesFrom$
        .pipe(map((readEntity: IReadEntity) =>
            this._entityMapperService.transform(readEntity)
        ))
        .subscribe((value: IEntity) =>
            this.entitiesFrom.push(value)
        );
    }

    public entityId(index: number, entity: IEntity): string {
        return entity.id;
    }



  $dogsBreed(): Observable<any>{
     return this.dogsService.getDogs()
   }

  getDogsBreed() {
    this.$dogsBreed()
      .pipe(map(data => {
        console.log(data)
        var dogs = this.keyValuePipe.transform(data.message)
        console.log(dogs)
      }))
     .subscribe();

  }

}
