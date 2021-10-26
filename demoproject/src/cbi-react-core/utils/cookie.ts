/*
  Takes cookie object(like state.cookies) and returns it into a cookie string that could be used for Cookie headers
  Example param: {x-main: '123'};
  Example return: 'x-main=123;';
*/

export class Cookie{
  static cookieObjectToString = (obj: { [k: string]: string | number | boolean }) => Object.keys(obj).map(v => obj[v] && `${v}=${obj[v]}; `).join('').trim();
}