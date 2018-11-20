import { Adress } from './adress.model';

/**
 * Person entity class
 */
export class Person {
    /**
     * persistenceStatus simple field
     */
     persistenceStatus?: Person.PersistenceStatus;
    /**
     * lastName simple field
     */
     lastName?: string;
    /**
     * updateDate simple field
     */
     updateDate: Date;
    /**
     * creatorUserId simple field
     */
     creatorUserId: string;
    /**
     * creationDate simple field
     */
     creationDate: Date;
    /**
     * title simple field
     */
     title?: Person.Title;
    /**
     * version simple field
     */
     version: number;
    /**
     * birthDate simple field
     */
     birthDate?: Date;
    /**
     * firstName simple field
     */
     firstName?: string;
    /**
     * updatorUserId simple field
     */
     updatorUserId: string;
    /**
     * personId simple field
     */
     personId: number;
    /**
     * age simple field
     */
     age?: number;
    /**
     * adress relation field
     */
    adress: Adress;
}
/**
 * Person entity namespace
 */  
export namespace Person{
  export enum PersistenceStatus{
    NEW,
    PERSISTENT,
    UNKNOWN

  }
  export enum Title{
    MR,
    MS,
    DR

  }

}



