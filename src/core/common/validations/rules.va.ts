import { isEmpty } from 'lodash';

export interface ValidatorRulesItem {
  property: string;
  method: string;
  error?: Error;
}
export class ValidatorRules {
  protected list: Array<ValidatorRulesItem> = [];
  public constructor(
    private value: any,
    private property: string,
  ) {}

  static value(value: any, property: string): ValidatorRules {
    return new ValidatorRules(value, property);
  }
  required(): Omit<this, 'required'> {
    if (this.value === null || this.value === undefined || this.value === '') {
      this.list.push({
        property: this.property,
        method: 'required',
        error: new Error(`${this.property} is required`),
      });
    }
    return this;
  }
  string(): Omit<this, 'string'> {
    if (!isEmpty(this.value) && typeof this.value !== 'string') {
      this.list.push({
        property: this.property,
        method: 'string',
        error: new Error(`${this.property} is string`),
      });
    }
    return this;
  }

  version(): Omit<this, 'string'> {
    if (!/^(?<major>\d+)\.(?<minor>\d+)\.(?<patch>\d+)(?:-(?<prerelease>\w+)(?:\.(?<prerelease_identifier>\w+))*?)?$/.test(this.value)) {
      this.list.push({
        property: this.property,
        method: 'version',
        error: new Error(`the format value of  ${this.property} doesn't correspond to type version`),
      });
    }
    return this;
  }

  package(): Omit<this, 'string'> {
    if (!/^[a-zA-Z_][a-zA-Z0-9_]*(\.[a-zA-Z_][a-zA-Z0-9_]*)*$/.test(this.value)) {
      this.list.push({
        property: this.property,
        method: 'package',
        error: new Error(`the format value of  ${this.property} doesn't correspond to type package`),
      });
    }
    return this;
  }

  fullName(): Omit<this, 'string'> {
    if (!/^([A-ZÀ-ÁÂÃÄÈÉÊËÌÍÏÎÒÓÔÕÖÙÚÛÜÝ][a-zà-áâãäèéêëìíïîòóôõöùúûüý]+)\s([A-ZÀ-ÁÂÃÄÈÉÊËÌÍÏÎÒÓÔÕÖÙÚÛÜÝ][a-zà-áâãäèéêëìíïîòóôõöùúûüý]+)?$/.test(this.value)) {
      this.list.push({
        property: this.property,
        method: 'fullName',
        error: new Error(`the format value of  ${this.property} doesn't correspond to type full name`),
      });
    }
    return this;
  }

  name(): Omit<this, 'string'> {
    if (!/^[A-ZÀ-ÁÂÃÄÈÉÊËÌÍÏÎÒÓÔÕÖÙÚÛÜÝ][a-zà-áâãäèéêëìíïîòóôõöùúûüý]+$/.test(this.value)) {
      this.list.push({
        property: this.property,
        method: 'name',
        error: new Error(`the format value of  ${this.property} doesn't correspond to type name`),
      });
    }
    return this;
  }

  username(): Omit<this, 'string'> {
    if (!/^[a-zA-Z0-9][a-zA-Z0-9_.-]*$/.test(this.value)) {
      this.list.push({
        property: this.property,
        method: 'username',
        error: new Error(`the format value of  ${this.property} doesn't correspond to type username`),
      });
    }
    return this;
  }

  email(): Omit<this, 'string'> {
    if (!/^([^\s@]+@[^\s@]+\.[^\s@]+)*$/.test(this.value)) {
      this.list.push({
        property: this.property,
        method: 'email',
        error: new Error(`the format value of  ${this.property} doesn't correspond to type email`),
      });
    }
    return this;
  }

  phone(): Omit<this, 'string'> {
    if (!/^(\+?\d{1,3}[ -]?)?\(?\d{3}\)?[ -\.]?\d{3}[ -\.]?\d{4}$/.test(this.value)) {
      this.list.push({
        property: this.property,
        method: 'phone',
        error: new Error(`the format value of  ${this.property} doesn't correspond to type phone`),
      });
    }
    return this;
  }

  customOptions(pattern: Array<String>): Omit<this, 'string'> {
    if (!pattern.includes(this.value)) {
      this.list.push({
        property: this.property,
        method: 'customOptions',
        error: new Error(`the format value of  ${this.property} doesn't correspond to type customOptions`),
      });
    }
    return this;
  }

  checkPassword(inputCheck: string): Omit<this, 'string'> {
    if (this.value === inputCheck) {
      this.list.push({
        property: this.property,
        method: 'checkPassword',
        error: new Error(`The values is different, please check!`),
      });
    }
    return this;
  }

  url(): Omit<this, 'string'> {
    if (!/^(?:(http|https|ftp):\/\/)?(?:[\w\-]+(?:\.[\w\-]+)*)(?:[\w.,@?^=%&:\+\*]*#?)/.test(this.value)) {
      this.list.push({
        property: this.property,
        method: 'url',
        error: new Error(`the format value of  ${this.property} doesn't correspond to type url`),
      });
    }
    return this;
  }

  number(): Omit<this, 'number'> {
    if (!isEmpty(this.value) && typeof this.value !== 'number') {
      this.list.push({
        property: this.property,
        method: 'number',
        error: new Error(`${this.property} is number`),
      });
    }
    return this;
  }

  boolean(): Omit<this, 'boolean'> {
    if (!isEmpty(this.value) && typeof this.value !== 'boolean') {
      this.list.push({
        property: this.property,
        method: 'boolean',
        error: new Error(`${this.property} is boolean`),
      });
    }
    return this;
  }

  object(): Omit<this, 'object'> {
    if (!isEmpty(this.value) && typeof this.value !== 'object') {
      this.list.push({
        property: this.property,
        method: 'object',
        error: new Error(`${this.property} is object`),
      });
    }
    return this;
  }

  array(): Omit<this, 'array'> {
    if (!isEmpty(this.value) && this.value instanceof Array === false) {
      this.list.push({
        property: this.property,
        method: 'array',
        error: new Error(`${this.property} is array`),
      });
    }
    return this;
  }

  minLength(limit: number): Omit<this, 'array'> {
    if (!isEmpty(this.value) && this.value.length < limit) {
      this.list.push({
        property: this.property,
        method: 'array',
        error: new Error(`${this.property} must be less than ${limit}`),
      });
    }
    return this;
  }
  maxLength(limit: number): Omit<this, 'array'> {
    if (!isEmpty(this.value) && this.value.length > limit) {
      this.list.push({
        property: this.property,
        method: 'maxLength',
        error: new Error(`${this.property} must be greater than ${limit}`),
      });
    }
    return this;
  }

  validate(): ValidatorRulesItem[] | void {
    if (this.list.length > 0) {
      return this.list;
    }
  }
}
