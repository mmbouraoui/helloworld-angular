import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

// Add required models import
import {Person} from '../_models/person.model';
import {Adress} from '../_models/adress.model';
import {PossibleValue} from '../_models/possible-value.model';

const BASE_PATH = '/services/rest';

/**
 * Service class for Person feature
 */
@Injectable()
export class PersonService {
 
  constructor(private httpClient: HttpClient) {
  }

  
  /**
* Find by the person identifiers
* @param {number} personId  
* @param {string} keys the required keys 
* @return {Observable<Person>} 
*/
    findByCode(            personId:number,keys?:string                ):  Observable<Person>{
      // verify required parameters are not null or undefined
if (personId=== null || personId=== undefined) {
    throw new Error('Required parameter personId was null or undefined.');
}

       const params =  new HttpParams();
     params.append('personId', personId.toString());
 
  if(keys !== null && keys !== undefined ){
    params.append('keys', keys.toString());
 }
       
      return this.httpClient.get<Person>(`${BASE_PATH}/persons`, { params: params });
    }
  
  /**
* Saves the person
* @param {Person} body 
* @return {Observable<Person>} 
*/
    insert(                              body:Person          ):  Observable<Person>{
      // verify required parameters are not null or undefined
if (body=== null || body=== undefined) {
    throw new Error('Required parameter body was null or undefined.');
}

            
      return this.httpClient.post<Person>(`${BASE_PATH}/persons`, body );
    }
  
  /**
* Updates the person
* @param {Person} body 
* @return {Observable<Person>} 
*/
    update(                              body:Person          ):  Observable<Person>{
      // verify required parameters are not null or undefined
if (body=== null || body=== undefined) {
    throw new Error('Required parameter body was null or undefined.');
}

            
      return this.httpClient.put< Person >(`${BASE_PATH}/persons`, body);
    }
  
  /**
* Deletes all persons with an optional criteria
* @param {string} criteria  
* @return {Observable<any>} 
*/
    delete(            criteria:string                ):  Observable<any>{
      // verify required parameters are not null or undefined
if (criteria=== null || criteria=== undefined) {
    throw new Error('Required parameter criteria was null or undefined.');
}

       const params =  new HttpParams();
     params.append('criteria', criteria.toString());
 
       
      return this.httpClient.delete<any>(`${BASE_PATH}/persons`, { params: params });


    }
  
  /**
* Counts all the persons with an optional criteria
* @param {string} criteria  
* @return {Observable<any>} 
*/
    count(            criteria:string                ):  Observable<any>{
      // verify required parameters are not null or undefined
if (criteria=== null || criteria=== undefined) {
    throw new Error('Required parameter criteria was null or undefined.');
}

       const params =  new HttpParams();
     params.append('criteria', criteria.toString());
 
       
      return this.httpClient.get<any>(`${BASE_PATH}/persons/count`, { params: params });
    }
  
  /**
* Evaluates the given formula against the given person instance
* @param {string} formula  
* @param {Person} body 
* @return {Observable<any>} 
*/
    evaluteFormula(            formula:string      ,            body:Person          ):  Observable<any>{
      // verify required parameters are not null or undefined
if (formula=== null || formula=== undefined) {
    throw new Error('Required parameter formula was null or undefined.');
}
if (body=== null || body=== undefined) {
    throw new Error('Required parameter body was null or undefined.');
}

       const params =  new HttpParams();
     params.append('formula', formula.toString());
 
       
      return this.httpClient.post<any>(`${BASE_PATH}/persons/evaluate`, body , { params: params });
    }
  
  /**
* Return a new person instance initialized from the server
* @return {Observable<Person>} 
*/
    newInstance(                            ):  Observable<Person>{
      
            
      return this.httpClient.get<Person>(`${BASE_PATH}/persons/new`);
    }
  
  /**
* Performs a paginated search on persons
* @param {string} criteria  
* @param {string} order the order fields 
* @param {string} keys the chosen keys 
* @param {number} page the page number 
* @param {number} size the page size 
* @return {Observable<Person>} 
*/
    find(            criteria?:string,order?:string,keys?:string,page?:number,size?:number                ):  Observable<Person>{
      
       var params =  new HttpParams();
  if(criteria !== null && criteria !== undefined ){
    params = params.append('criteria', criteria.toString());
 }
  if(order !== null && order !== undefined ){
    params = params.append('order', order.toString());
 }
  if(keys !== null && keys !== undefined ){
    params = params.append('keys', keys.toString());
 }
  if(page !== null && page !== undefined ){
    params= params.append('page', page.toString());
 }
  if(size !== null && size !== undefined ){
    params= params.append('size', size.toString());
 }

      return this.httpClient.get<Person>(`http://fwpc-86668.hld.net:9084/test126284/services/rest/persons/search?criteria=&page=1&size=2`, {params: params });
    }
  
  /**
* Performs a search operation without pagination
* @param {string} criteria  
* @param {string} order the order fields 
* @param {string} keys the chosen keys 
* @return {Observable<Person>} 
*/
    findAll(            criteria:string,order?:string,keys?:string                ):  Observable<Person>{
      // verify required parameters are not null or undefined
if (criteria=== null || criteria=== undefined) {
    throw new Error('Required parameter criteria was null or undefined.');
}

       const params =  new HttpParams();
       console.log("test");
       console.log(criteria.toString());  
       console.log("test");  
     params.append('criteria', criteria.toString());
 
  if(order !== null && order !== undefined ){
    params.append('order', order.toString());
 }
  if(keys !== null && keys !== undefined ){
    params.append('keys', keys.toString());
 }
 
      return this.httpClient.get<Person>(`${BASE_PATH}/persons/search/all`, { params: params });
    }
  
  /**
* Find the person by code
* @param {string} code  
* @param {string} keys the required keys 
* @return {Observable<Person>} 
*/
    findByCodeAsString(code:string      ,      keys?:string                ):  Observable<Person>{
      // verify required parameters are not null or undefined
if (code=== null || code=== undefined) {
    throw new Error('Required parameter code was null or undefined.');
}

       const params =  new HttpParams();
 
  if(keys !== null && keys !== undefined ){
    params.append('keys', keys.toString());
 }
       
      return this.httpClient.get<Person>(`${BASE_PATH}/persons/${code}`, { params: params });
    }
  
  /**
* Deletes the person instance with the given code
* @param {string} code  
* @return { Observable<any>} 
*/
    deleteOne(code:string                            ):Observable<any>{
      // verify required parameters are not null or undefined
if (code=== null || code=== undefined) {
    throw new Error('Required parameter code was null or undefined.');
}

            
      return this.httpClient.delete<any>(`${BASE_PATH}/persons/${code}`);


    }
  
  /**
* Get the adress
* @param {string} code  
* @return {Observable<Adress>} 
*/
    getAdress(code:string                            ):  Observable<Adress>{
      // verify required parameters are not null or undefined
if (code=== null || code=== undefined) {
    throw new Error('Required parameter code was null or undefined.');
}

            
      return this.httpClient.get<Adress>(`${BASE_PATH}/persons/${code}/adress`);
    }
  
  /**
* Returns the possible values of the given field
* @param {string} field  
* @param {string} keys  
* @param {string} seperator  
* @param {string} criteria  
* @param {Person} body 
* @return {Observable<any>} 
*/
    getPossibleValues(field:string      ,      keys?:string,seperator?:string,criteria?:string      ,            body?:Person          ):  Observable<any>{
      // verify required parameters are not null or undefined
if (field=== null || field=== undefined) {
    throw new Error('Required parameter field was null or undefined.');
}

       const params =  new HttpParams();
 
  if(keys !== null && keys !== undefined ){
    params.append('keys', keys.toString());
 }
  if(seperator !== null && seperator !== undefined ){
    params.append('seperator', seperator.toString());
 }
  if(criteria !== null && criteria !== undefined ){
    params.append('criteria', criteria.toString());
 }
       
      return this.httpClient.post<any>(`${BASE_PATH}/persons/${field}/possibleValues`, body , { params: params });
    }
  
  /**
* Returns the possible values of the given field translated using the current user profile
* @param {string} field  
* @param {string} keys  
* @param {string} seperator  
* @param {string} criteria  
* @param {Person} body 
* @return {Observable<PossibleValue>} 
*/
    getTranslatedPossibleValues(field:string      ,      keys?:string,seperator?:string,criteria?:string      ,            body?:Person          ):  Observable<PossibleValue>{
      // verify required parameters are not null or undefined
if (field=== null || field=== undefined) {
    throw new Error('Required parameter field was null or undefined.');
}

       const params =  new HttpParams();
 
  if(keys !== null && keys !== undefined ){
    params.append('keys', keys.toString());
 }
  if(seperator !== null && seperator !== undefined ){
    params.append('seperator', seperator.toString());
 }
  if(criteria !== null && criteria !== undefined ){
    params.append('criteria', criteria.toString());
 }
       
      return this.httpClient.post<PossibleValue>(`${BASE_PATH}/persons/${field}/possibleValues/translated`, body , { params: params });
    }
  


}
