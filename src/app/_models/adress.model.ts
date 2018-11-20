
/**
 * Adress entity class
 */
export class Adress {
    /**
     * persistenceStatus simple field
     */
     persistenceStatus?: Adress.PersistenceStatus;
    /**
     * _number simple field
     */
     _number?: number;
    /**
     * creatorUserId simple field
     */
     creatorUserId: string;
    /**
     * streetName simple field
     */
     streetName?: string;
    /**
     * updateDate simple field
     */
     updateDate: Date;
    /**
     * city simple field
     */
     city?: string;
    /**
     * postalCode simple field
     */
     postalCode?: number;
    /**
     * updatorUserId simple field
     */
     updatorUserId: string;
    /**
     * id simple field
     */
     id: number;
    /**
     * creationDate simple field
     */
     creationDate: Date;
    /**
     * version simple field
     */
     version: number;
}
/**
 * Adress entity namespace
 */  
export namespace Adress{
  export enum PersistenceStatus{
    NEW,
    PERSISTENT,
    UNKNOWN

  }

}



