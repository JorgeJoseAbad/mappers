export interface IMapperService<S, T> {
    transform(entity: S): T;
    transform(array: S[]): T[];
    transform(entityOrArray: S | S[]): T | T[];
}

export abstract class MapperService<S, T> implements IMapperService<S, T> {

    protected abstract myMap(entity: S): T;

    transform(entity: S): T;
    transform(array: S[]): T[];
    transform(entityOrArray: S | S[]): T | T[] {
        return Array.isArray(entityOrArray) ?
            entityOrArray.map((item: S) => this.myMap(item)) :
            this.myMap(entityOrArray);
    }

}
