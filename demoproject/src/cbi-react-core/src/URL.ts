
export const URL = {
    object() {
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
            return {};
        }
    },
    parse(options: { [key: string]: string | number | boolean }) {
        var str = []

        for (var p in options) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(options[p]))
        }

        return str.join("&")
    },
    get(name?: string){
        let param = URL.object()
        if (name) return param?.[name] || undefined
        return param
    }
}