


export const URLHelper = {
    object<T>() : Partial<T> {
        try {
            var search = window.location.search.substring(1);
            let obj = JSON.parse(
                '{"' +
                decodeURI(search)
                    .replace(/"/g, '\\"')
                    .replace(/&/g, '","')
                    .replace(/=/g, '":"') +
                '"}',
            );
            return obj;
        } catch {
            return {} as Partial<T>;
        }
    },
    parse(options: URLGetParams) {
        var str = []

        for (var p in options) { 
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(options[p]))
        }

        return str.join("&")
    },
    get(name?: string) {
        let param = URLHelper.object<any>()
        if (name) return param?.[name] || undefined
        return param
    }
}