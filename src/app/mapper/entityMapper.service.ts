import { Injectable } from '@angular/core';
import { MapperService } from './mapperTemplate.service';
import { IReadEntity } from './iReadEntity';
import { IEntity } from './iEntity';

@Injectable()
export class EntityMapperService extends MapperService<IReadEntity, IEntity> {

    protected myMap(entity: IReadEntity): IEntity {
        return {
            id: entity.id,
            name: entity.name,
            country: 'España',
            birthDate: new Date(entity.birthDate)
        };
    }

}
