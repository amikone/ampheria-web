/**
 * Préfixe un chemin interne par la `base` du site.
 * Indispensable pour le déploiement sur GitHub Pages (`/ampheria-web`).
 *
 * withBase('/blog') => '/ampheria-web/blog'
 * withBase('/')      => '/ampheria-web/'
 */
export function withBase(path: string = '/'): string {
	const base = import.meta.env.BASE_URL;
	const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;
	const normalizedPath = path.startsWith('/') ? path : `/${path}`;
	const url = `${normalizedBase}${normalizedPath}`;
	return url === '' ? '/' : url;
}

/** Calcule un temps de lecture approximatif à partir du corps d'un article. */
export function readingTime(text: string = '', wordsPerMinute = 200): string {
	const words = text.trim().split(/\s+/).filter(Boolean).length;
	const minutes = Math.max(1, Math.round(words / wordsPerMinute));
	return `${minutes} min de lecture`;
}
