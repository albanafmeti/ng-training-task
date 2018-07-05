import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  localStorage: any;

  constructor() {
    this.localStorage = window.localStorage;
  }

  /**
   * Store a value into storage.
   * @param key
   * @param value
   */
  storeValue(key: String, value) {
    this.localStorage.setItem(key, value);
  }

  /**
   * Store an object into storage.
   * @param key 
   * @param value 
   */
  storeObject(key: String, value) {
    this.localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * Store an array into storage.
   * @param key 
   * @param value 
   */
  storeArray(key: String, value) {
    this.localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * Get a value from the storage.
   * @param key 
   */
  getValue(key: String) {
    return this.localStorage.getItem(key);
  }

  /**
   * Get an object from the storage.
   * @param key 
   */
  getObject(key: String) {
    const value = this.localStorage.getItem(key);
    return JSON.parse(value);
  }

  /**
   * Get an array from the storage.
   * @param key 
   */
  getArray(key: String) {
    const value = this.localStorage.getItem(key);
    return JSON.parse(value);
  }

  /**
   * Remove an item from the storage.
   * @param key 
   */
  removeItem(key: String) {
    this.localStorage.removeItem(key);
  }

  /**
   * Clear storage.
   */
  clear() {
    this.localStorage.clear();
  }
}
