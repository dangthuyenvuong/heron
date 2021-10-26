export const classnames = (...refs: (string | undefined)[]) => {
    return refs.filter(e => typeof e === 'undefined').reduce((str: string, item) => str + ' ' +item, '').substring(1)
}