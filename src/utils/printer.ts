type Converter = (value: string) => string;

export function NomalConverter(value: string) {
  return value;
}

export function UpperConverter(value: string) {
  return value.toUpperCase();
}

export function SnackConverter(value: string) {
  return value.replace(/^\s+$/, '_');
}

export default class Printer {
  convert: Converter;

  constructor(convert: Converter) {
    this.convert = convert;
  }

  public dobule(value: string) {
    const text = this.convert(value);
    return `${text}\n${text}`;
  }

  public slice(value: string) {
    const text = this.convert(value);
    return text.slice(0, Math.floor(text.length * 0.5));
  }

  public reverse(value: string) {
    const text = this.convert(value);
    return text.split('').reverse().join('');
  }
}
