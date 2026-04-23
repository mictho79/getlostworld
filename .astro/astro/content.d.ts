declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
			components: import('astro').MDXInstance<{}>['components'];
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"en/australia-vs-new-zealand-travel.md": {
	id: "en/australia-vs-new-zealand-travel.md";
  slug: "en/australia-vs-new-zealand-travel";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/france-vs-spain-which-to-visit.md": {
	id: "en/france-vs-spain-which-to-visit.md";
  slug: "en/france-vs-spain-which-to-visit";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/germany-vs-austria-differences.md": {
	id: "en/germany-vs-austria-differences.md";
  slug: "en/germany-vs-austria-differences";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/italy-vs-greece-summer-holiday.md": {
	id: "en/italy-vs-greece-summer-holiday.md";
  slug: "en/italy-vs-greece-summer-holiday";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/japan-vs-south-korea-travel.md": {
	id: "en/japan-vs-south-korea-travel.md";
  slug: "en/japan-vs-south-korea-travel";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/portugal-vs-spain-expat.md": {
	id: "en/portugal-vs-spain-expat.md";
  slug: "en/portugal-vs-spain-expat";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/thailand-vs-vietnam-backpacking.md": {
	id: "en/thailand-vs-vietnam-backpacking.md";
  slug: "en/thailand-vs-vietnam-backpacking";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/usa-vs-canada-comparison.md": {
	id: "en/usa-vs-canada-comparison.md";
  slug: "en/usa-vs-canada-comparison";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/australia-vs-new-zealand-travel.md": {
	id: "es/australia-vs-new-zealand-travel.md";
  slug: "es/australia-vs-new-zealand-travel";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/france-vs-spain-which-to-visit.md": {
	id: "es/france-vs-spain-which-to-visit.md";
  slug: "es/france-vs-spain-which-to-visit";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/germany-vs-austria-differences.md": {
	id: "es/germany-vs-austria-differences.md";
  slug: "es/germany-vs-austria-differences";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/italy-vs-greece-summer-holiday.md": {
	id: "es/italy-vs-greece-summer-holiday.md";
  slug: "es/italy-vs-greece-summer-holiday";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/japan-vs-south-korea-travel.md": {
	id: "es/japan-vs-south-korea-travel.md";
  slug: "es/japan-vs-south-korea-travel";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/portugal-vs-spain-expat.md": {
	id: "es/portugal-vs-spain-expat.md";
  slug: "es/portugal-vs-spain-expat";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/thailand-vs-vietnam-backpacking.md": {
	id: "es/thailand-vs-vietnam-backpacking.md";
  slug: "es/thailand-vs-vietnam-backpacking";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/usa-vs-canada-comparison.md": {
	id: "es/usa-vs-canada-comparison.md";
  slug: "es/usa-vs-canada-comparison";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"fr/australia-vs-new-zealand-travel.md": {
	id: "fr/australia-vs-new-zealand-travel.md";
  slug: "fr/australia-vs-new-zealand-travel";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"fr/france-vs-spain-which-to-visit.md": {
	id: "fr/france-vs-spain-which-to-visit.md";
  slug: "fr/france-vs-spain-which-to-visit";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"fr/germany-vs-austria-differences.md": {
	id: "fr/germany-vs-austria-differences.md";
  slug: "fr/germany-vs-austria-differences";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"fr/italy-vs-greece-summer-holiday.md": {
	id: "fr/italy-vs-greece-summer-holiday.md";
  slug: "fr/italy-vs-greece-summer-holiday";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"fr/japan-vs-south-korea-travel.md": {
	id: "fr/japan-vs-south-korea-travel.md";
  slug: "fr/japan-vs-south-korea-travel";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"fr/portugal-vs-spain-expat.md": {
	id: "fr/portugal-vs-spain-expat.md";
  slug: "fr/portugal-vs-spain-expat";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"fr/thailand-vs-vietnam-backpacking.md": {
	id: "fr/thailand-vs-vietnam-backpacking.md";
  slug: "fr/thailand-vs-vietnam-backpacking";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"fr/usa-vs-canada-comparison.md": {
	id: "fr/usa-vs-canada-comparison.md";
  slug: "fr/usa-vs-canada-comparison";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
};
"countries": {
"en/afghanistan.mdx": {
	id: "en/afghanistan.mdx";
  slug: "en/afghanistan";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/albania.mdx": {
	id: "en/albania.mdx";
  slug: "en/albania";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/algeria.mdx": {
	id: "en/algeria.mdx";
  slug: "en/algeria";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/andorra.mdx": {
	id: "en/andorra.mdx";
  slug: "en/andorra";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/angola.mdx": {
	id: "en/angola.mdx";
  slug: "en/angola";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/antigua-and-barbuda.mdx": {
	id: "en/antigua-and-barbuda.mdx";
  slug: "en/antigua-and-barbuda";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/argentina.mdx": {
	id: "en/argentina.mdx";
  slug: "en/argentina";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/armenia.mdx": {
	id: "en/armenia.mdx";
  slug: "en/armenia";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/australia.mdx": {
	id: "en/australia.mdx";
  slug: "en/australia";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/austria.mdx": {
	id: "en/austria.mdx";
  slug: "en/austria";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/azerbaijan.mdx": {
	id: "en/azerbaijan.mdx";
  slug: "en/azerbaijan";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/bahamas.mdx": {
	id: "en/bahamas.mdx";
  slug: "en/bahamas";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/bahrain.mdx": {
	id: "en/bahrain.mdx";
  slug: "en/bahrain";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/bangladesh.mdx": {
	id: "en/bangladesh.mdx";
  slug: "en/bangladesh";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/barbados.mdx": {
	id: "en/barbados.mdx";
  slug: "en/barbados";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/belarus.mdx": {
	id: "en/belarus.mdx";
  slug: "en/belarus";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/belgium.mdx": {
	id: "en/belgium.mdx";
  slug: "en/belgium";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/belize.mdx": {
	id: "en/belize.mdx";
  slug: "en/belize";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/benin.mdx": {
	id: "en/benin.mdx";
  slug: "en/benin";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/bhutan.mdx": {
	id: "en/bhutan.mdx";
  slug: "en/bhutan";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/bolivia.mdx": {
	id: "en/bolivia.mdx";
  slug: "en/bolivia";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/bosnia-and-herzegovina.mdx": {
	id: "en/bosnia-and-herzegovina.mdx";
  slug: "en/bosnia-and-herzegovina";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/botswana.mdx": {
	id: "en/botswana.mdx";
  slug: "en/botswana";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/brazil.mdx": {
	id: "en/brazil.mdx";
  slug: "en/brazil";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/brunei.mdx": {
	id: "en/brunei.mdx";
  slug: "en/brunei";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/bulgaria.mdx": {
	id: "en/bulgaria.mdx";
  slug: "en/bulgaria";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/burkina-faso.mdx": {
	id: "en/burkina-faso.mdx";
  slug: "en/burkina-faso";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/burundi.mdx": {
	id: "en/burundi.mdx";
  slug: "en/burundi";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/cambodia.mdx": {
	id: "en/cambodia.mdx";
  slug: "en/cambodia";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/cameroon.mdx": {
	id: "en/cameroon.mdx";
  slug: "en/cameroon";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/canada.mdx": {
	id: "en/canada.mdx";
  slug: "en/canada";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/cape-verde.mdx": {
	id: "en/cape-verde.mdx";
  slug: "en/cape-verde";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/central-african-republic.mdx": {
	id: "en/central-african-republic.mdx";
  slug: "en/central-african-republic";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/chad.mdx": {
	id: "en/chad.mdx";
  slug: "en/chad";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/chile.mdx": {
	id: "en/chile.mdx";
  slug: "en/chile";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/china.mdx": {
	id: "en/china.mdx";
  slug: "en/china";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/colombia.mdx": {
	id: "en/colombia.mdx";
  slug: "en/colombia";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/comoros.mdx": {
	id: "en/comoros.mdx";
  slug: "en/comoros";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/costa-rica.mdx": {
	id: "en/costa-rica.mdx";
  slug: "en/costa-rica";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/cote-divoire.mdx": {
	id: "en/cote-divoire.mdx";
  slug: "en/cote-divoire";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/croatia.mdx": {
	id: "en/croatia.mdx";
  slug: "en/croatia";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/cuba.mdx": {
	id: "en/cuba.mdx";
  slug: "en/cuba";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/cyprus.mdx": {
	id: "en/cyprus.mdx";
  slug: "en/cyprus";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/czech-republic.mdx": {
	id: "en/czech-republic.mdx";
  slug: "en/czech-republic";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/democratic-republic-of-the-congo.mdx": {
	id: "en/democratic-republic-of-the-congo.mdx";
  slug: "en/democratic-republic-of-the-congo";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/denmark.mdx": {
	id: "en/denmark.mdx";
  slug: "en/denmark";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/djibouti.mdx": {
	id: "en/djibouti.mdx";
  slug: "en/djibouti";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/dominica.mdx": {
	id: "en/dominica.mdx";
  slug: "en/dominica";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/dominican-republic.mdx": {
	id: "en/dominican-republic.mdx";
  slug: "en/dominican-republic";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/ecuador.mdx": {
	id: "en/ecuador.mdx";
  slug: "en/ecuador";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/egypt.mdx": {
	id: "en/egypt.mdx";
  slug: "en/egypt";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/el-salvador.mdx": {
	id: "en/el-salvador.mdx";
  slug: "en/el-salvador";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/england.mdx": {
	id: "en/england.mdx";
  slug: "en/england";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/equatorial-guinea.mdx": {
	id: "en/equatorial-guinea.mdx";
  slug: "en/equatorial-guinea";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/eritrea.mdx": {
	id: "en/eritrea.mdx";
  slug: "en/eritrea";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/estonia.mdx": {
	id: "en/estonia.mdx";
  slug: "en/estonia";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/eswatini.mdx": {
	id: "en/eswatini.mdx";
  slug: "en/eswatini";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/ethiopia.mdx": {
	id: "en/ethiopia.mdx";
  slug: "en/ethiopia";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/fiji.mdx": {
	id: "en/fiji.mdx";
  slug: "en/fiji";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/finland.mdx": {
	id: "en/finland.mdx";
  slug: "en/finland";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/france.mdx": {
	id: "en/france.mdx";
  slug: "en/france";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/gabon.mdx": {
	id: "en/gabon.mdx";
  slug: "en/gabon";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/gambia.mdx": {
	id: "en/gambia.mdx";
  slug: "en/gambia";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/georgia.mdx": {
	id: "en/georgia.mdx";
  slug: "en/georgia";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/germany.mdx": {
	id: "en/germany.mdx";
  slug: "en/germany";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/ghana.mdx": {
	id: "en/ghana.mdx";
  slug: "en/ghana";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/greece.mdx": {
	id: "en/greece.mdx";
  slug: "en/greece";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/greenland.mdx": {
	id: "en/greenland.mdx";
  slug: "en/greenland";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/grenada.mdx": {
	id: "en/grenada.mdx";
  slug: "en/grenada";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/guatemala.mdx": {
	id: "en/guatemala.mdx";
  slug: "en/guatemala";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/guinea-bissau.mdx": {
	id: "en/guinea-bissau.mdx";
  slug: "en/guinea-bissau";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/guinea.mdx": {
	id: "en/guinea.mdx";
  slug: "en/guinea";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/guyana.mdx": {
	id: "en/guyana.mdx";
  slug: "en/guyana";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/haiti.mdx": {
	id: "en/haiti.mdx";
  slug: "en/haiti";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/honduras.mdx": {
	id: "en/honduras.mdx";
  slug: "en/honduras";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/hong-kong.mdx": {
	id: "en/hong-kong.mdx";
  slug: "en/hong-kong";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/hungary.mdx": {
	id: "en/hungary.mdx";
  slug: "en/hungary";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/iceland.mdx": {
	id: "en/iceland.mdx";
  slug: "en/iceland";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/india.mdx": {
	id: "en/india.mdx";
  slug: "en/india";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/indonesia.mdx": {
	id: "en/indonesia.mdx";
  slug: "en/indonesia";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/iran.mdx": {
	id: "en/iran.mdx";
  slug: "en/iran";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/iraq.mdx": {
	id: "en/iraq.mdx";
  slug: "en/iraq";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/ireland.mdx": {
	id: "en/ireland.mdx";
  slug: "en/ireland";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/israel.mdx": {
	id: "en/israel.mdx";
  slug: "en/israel";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/italy.mdx": {
	id: "en/italy.mdx";
  slug: "en/italy";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/jamaica.mdx": {
	id: "en/jamaica.mdx";
  slug: "en/jamaica";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/japan.mdx": {
	id: "en/japan.mdx";
  slug: "en/japan";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/jordan.mdx": {
	id: "en/jordan.mdx";
  slug: "en/jordan";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/kazakhstan.mdx": {
	id: "en/kazakhstan.mdx";
  slug: "en/kazakhstan";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/kenya.mdx": {
	id: "en/kenya.mdx";
  slug: "en/kenya";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/kiribati.mdx": {
	id: "en/kiribati.mdx";
  slug: "en/kiribati";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/kosovo.mdx": {
	id: "en/kosovo.mdx";
  slug: "en/kosovo";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/kuwait.mdx": {
	id: "en/kuwait.mdx";
  slug: "en/kuwait";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/kyrgyzstan.mdx": {
	id: "en/kyrgyzstan.mdx";
  slug: "en/kyrgyzstan";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/laos.mdx": {
	id: "en/laos.mdx";
  slug: "en/laos";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/latvia.mdx": {
	id: "en/latvia.mdx";
  slug: "en/latvia";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/lebanon.mdx": {
	id: "en/lebanon.mdx";
  slug: "en/lebanon";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/lesotho.mdx": {
	id: "en/lesotho.mdx";
  slug: "en/lesotho";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/liberia.mdx": {
	id: "en/liberia.mdx";
  slug: "en/liberia";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/libya.mdx": {
	id: "en/libya.mdx";
  slug: "en/libya";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/liechtenstein.mdx": {
	id: "en/liechtenstein.mdx";
  slug: "en/liechtenstein";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/lithuania.mdx": {
	id: "en/lithuania.mdx";
  slug: "en/lithuania";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/luxembourg.mdx": {
	id: "en/luxembourg.mdx";
  slug: "en/luxembourg";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/madagascar.mdx": {
	id: "en/madagascar.mdx";
  slug: "en/madagascar";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/malawi.mdx": {
	id: "en/malawi.mdx";
  slug: "en/malawi";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/malaysia.mdx": {
	id: "en/malaysia.mdx";
  slug: "en/malaysia";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/maldives.mdx": {
	id: "en/maldives.mdx";
  slug: "en/maldives";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/mali.mdx": {
	id: "en/mali.mdx";
  slug: "en/mali";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/malta.mdx": {
	id: "en/malta.mdx";
  slug: "en/malta";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/marshall-islands.mdx": {
	id: "en/marshall-islands.mdx";
  slug: "en/marshall-islands";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/mauritania.mdx": {
	id: "en/mauritania.mdx";
  slug: "en/mauritania";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/mauritius.mdx": {
	id: "en/mauritius.mdx";
  slug: "en/mauritius";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/mexico.mdx": {
	id: "en/mexico.mdx";
  slug: "en/mexico";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/micronesia.mdx": {
	id: "en/micronesia.mdx";
  slug: "en/micronesia";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/moldova.mdx": {
	id: "en/moldova.mdx";
  slug: "en/moldova";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/monaco.mdx": {
	id: "en/monaco.mdx";
  slug: "en/monaco";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/mongolia.mdx": {
	id: "en/mongolia.mdx";
  slug: "en/mongolia";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/montenegro.mdx": {
	id: "en/montenegro.mdx";
  slug: "en/montenegro";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/morocco.mdx": {
	id: "en/morocco.mdx";
  slug: "en/morocco";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/mozambique.mdx": {
	id: "en/mozambique.mdx";
  slug: "en/mozambique";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/myanmar.mdx": {
	id: "en/myanmar.mdx";
  slug: "en/myanmar";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/namibia.mdx": {
	id: "en/namibia.mdx";
  slug: "en/namibia";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/nauru.mdx": {
	id: "en/nauru.mdx";
  slug: "en/nauru";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/nepal.mdx": {
	id: "en/nepal.mdx";
  slug: "en/nepal";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/netherlands.mdx": {
	id: "en/netherlands.mdx";
  slug: "en/netherlands";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/new-zealand.mdx": {
	id: "en/new-zealand.mdx";
  slug: "en/new-zealand";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/nicaragua.mdx": {
	id: "en/nicaragua.mdx";
  slug: "en/nicaragua";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/niger.mdx": {
	id: "en/niger.mdx";
  slug: "en/niger";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/nigeria.mdx": {
	id: "en/nigeria.mdx";
  slug: "en/nigeria";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/north-korea.mdx": {
	id: "en/north-korea.mdx";
  slug: "en/north-korea";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/north-macedonia.mdx": {
	id: "en/north-macedonia.mdx";
  slug: "en/north-macedonia";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/northern-ireland.mdx": {
	id: "en/northern-ireland.mdx";
  slug: "en/northern-ireland";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/norway.mdx": {
	id: "en/norway.mdx";
  slug: "en/norway";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/oman.mdx": {
	id: "en/oman.mdx";
  slug: "en/oman";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/pakistan.mdx": {
	id: "en/pakistan.mdx";
  slug: "en/pakistan";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/palau.mdx": {
	id: "en/palau.mdx";
  slug: "en/palau";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/palestine.mdx": {
	id: "en/palestine.mdx";
  slug: "en/palestine";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/panama.mdx": {
	id: "en/panama.mdx";
  slug: "en/panama";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/papua-new-guinea.mdx": {
	id: "en/papua-new-guinea.mdx";
  slug: "en/papua-new-guinea";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/paraguay.mdx": {
	id: "en/paraguay.mdx";
  slug: "en/paraguay";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/peru.mdx": {
	id: "en/peru.mdx";
  slug: "en/peru";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/philippines.mdx": {
	id: "en/philippines.mdx";
  slug: "en/philippines";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/poland.mdx": {
	id: "en/poland.mdx";
  slug: "en/poland";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/portugal.mdx": {
	id: "en/portugal.mdx";
  slug: "en/portugal";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/puerto-rico.mdx": {
	id: "en/puerto-rico.mdx";
  slug: "en/puerto-rico";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/qatar.mdx": {
	id: "en/qatar.mdx";
  slug: "en/qatar";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/republic-of-the-congo.mdx": {
	id: "en/republic-of-the-congo.mdx";
  slug: "en/republic-of-the-congo";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/romania.mdx": {
	id: "en/romania.mdx";
  slug: "en/romania";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/russia.mdx": {
	id: "en/russia.mdx";
  slug: "en/russia";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/rwanda.mdx": {
	id: "en/rwanda.mdx";
  slug: "en/rwanda";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/saint-kitts-and-nevis.mdx": {
	id: "en/saint-kitts-and-nevis.mdx";
  slug: "en/saint-kitts-and-nevis";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/saint-lucia.mdx": {
	id: "en/saint-lucia.mdx";
  slug: "en/saint-lucia";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/saint-vincent-and-the-grenadines.mdx": {
	id: "en/saint-vincent-and-the-grenadines.mdx";
  slug: "en/saint-vincent-and-the-grenadines";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/samoa.mdx": {
	id: "en/samoa.mdx";
  slug: "en/samoa";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/san-marino.mdx": {
	id: "en/san-marino.mdx";
  slug: "en/san-marino";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/sao-tome-and-principe.mdx": {
	id: "en/sao-tome-and-principe.mdx";
  slug: "en/sao-tome-and-principe";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/saudi-arabia.mdx": {
	id: "en/saudi-arabia.mdx";
  slug: "en/saudi-arabia";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/scotland.mdx": {
	id: "en/scotland.mdx";
  slug: "en/scotland";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/senegal.mdx": {
	id: "en/senegal.mdx";
  slug: "en/senegal";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/serbia.mdx": {
	id: "en/serbia.mdx";
  slug: "en/serbia";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/seychelles.mdx": {
	id: "en/seychelles.mdx";
  slug: "en/seychelles";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/sierra-leone.mdx": {
	id: "en/sierra-leone.mdx";
  slug: "en/sierra-leone";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/singapore.mdx": {
	id: "en/singapore.mdx";
  slug: "en/singapore";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/slovakia.mdx": {
	id: "en/slovakia.mdx";
  slug: "en/slovakia";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/slovenia.mdx": {
	id: "en/slovenia.mdx";
  slug: "en/slovenia";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/solomon-islands.mdx": {
	id: "en/solomon-islands.mdx";
  slug: "en/solomon-islands";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/somalia.mdx": {
	id: "en/somalia.mdx";
  slug: "en/somalia";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/south-africa.mdx": {
	id: "en/south-africa.mdx";
  slug: "en/south-africa";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/south-korea.mdx": {
	id: "en/south-korea.mdx";
  slug: "en/south-korea";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/south-sudan.mdx": {
	id: "en/south-sudan.mdx";
  slug: "en/south-sudan";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/spain.mdx": {
	id: "en/spain.mdx";
  slug: "en/spain";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/sri-lanka.mdx": {
	id: "en/sri-lanka.mdx";
  slug: "en/sri-lanka";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/sudan.mdx": {
	id: "en/sudan.mdx";
  slug: "en/sudan";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/suriname.mdx": {
	id: "en/suriname.mdx";
  slug: "en/suriname";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/sweden.mdx": {
	id: "en/sweden.mdx";
  slug: "en/sweden";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/switzerland.mdx": {
	id: "en/switzerland.mdx";
  slug: "en/switzerland";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/syria.mdx": {
	id: "en/syria.mdx";
  slug: "en/syria";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/taiwan.mdx": {
	id: "en/taiwan.mdx";
  slug: "en/taiwan";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/tajikistan.mdx": {
	id: "en/tajikistan.mdx";
  slug: "en/tajikistan";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/tanzania.mdx": {
	id: "en/tanzania.mdx";
  slug: "en/tanzania";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/thailand.mdx": {
	id: "en/thailand.mdx";
  slug: "en/thailand";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/timor-leste.mdx": {
	id: "en/timor-leste.mdx";
  slug: "en/timor-leste";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/togo.mdx": {
	id: "en/togo.mdx";
  slug: "en/togo";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/tonga.mdx": {
	id: "en/tonga.mdx";
  slug: "en/tonga";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/trinidad-and-tobago.mdx": {
	id: "en/trinidad-and-tobago.mdx";
  slug: "en/trinidad-and-tobago";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/tunisia.mdx": {
	id: "en/tunisia.mdx";
  slug: "en/tunisia";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/turkey.mdx": {
	id: "en/turkey.mdx";
  slug: "en/turkey";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/turkmenistan.mdx": {
	id: "en/turkmenistan.mdx";
  slug: "en/turkmenistan";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/tuvalu.mdx": {
	id: "en/tuvalu.mdx";
  slug: "en/tuvalu";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/uganda.mdx": {
	id: "en/uganda.mdx";
  slug: "en/uganda";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/ukraine.mdx": {
	id: "en/ukraine.mdx";
  slug: "en/ukraine";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/united-arab-emirates.mdx": {
	id: "en/united-arab-emirates.mdx";
  slug: "en/united-arab-emirates";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/united-states-of-america.mdx": {
	id: "en/united-states-of-america.mdx";
  slug: "en/united-states-of-america";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/uruguay.mdx": {
	id: "en/uruguay.mdx";
  slug: "en/uruguay";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/uzbekistan.mdx": {
	id: "en/uzbekistan.mdx";
  slug: "en/uzbekistan";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/vanuatu.mdx": {
	id: "en/vanuatu.mdx";
  slug: "en/vanuatu";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/vatican-city.mdx": {
	id: "en/vatican-city.mdx";
  slug: "en/vatican-city";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/venezuela.mdx": {
	id: "en/venezuela.mdx";
  slug: "en/venezuela";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/vietnam.mdx": {
	id: "en/vietnam.mdx";
  slug: "en/vietnam";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/wales.mdx": {
	id: "en/wales.mdx";
  slug: "en/wales";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/yemen.mdx": {
	id: "en/yemen.mdx";
  slug: "en/yemen";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/zambia.mdx": {
	id: "en/zambia.mdx";
  slug: "en/zambia";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"en/zimbabwe.mdx": {
	id: "en/zimbabwe.mdx";
  slug: "en/zimbabwe";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/afghanistan.mdx": {
	id: "es/afghanistan.mdx";
  slug: "es/afghanistan";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/albania.mdx": {
	id: "es/albania.mdx";
  slug: "es/albania";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/algeria.mdx": {
	id: "es/algeria.mdx";
  slug: "es/algeria";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/angola.mdx": {
	id: "es/angola.mdx";
  slug: "es/angola";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/argentina.mdx": {
	id: "es/argentina.mdx";
  slug: "es/argentina";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/armenia.mdx": {
	id: "es/armenia.mdx";
  slug: "es/armenia";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/austria.mdx": {
	id: "es/austria.mdx";
  slug: "es/austria";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/azerbaijan.mdx": {
	id: "es/azerbaijan.mdx";
  slug: "es/azerbaijan";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/bahrain.mdx": {
	id: "es/bahrain.mdx";
  slug: "es/bahrain";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/bangladesh.mdx": {
	id: "es/bangladesh.mdx";
  slug: "es/bangladesh";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/belarus.mdx": {
	id: "es/belarus.mdx";
  slug: "es/belarus";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/belgium.mdx": {
	id: "es/belgium.mdx";
  slug: "es/belgium";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/bhutan.mdx": {
	id: "es/bhutan.mdx";
  slug: "es/bhutan";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/bolivia.mdx": {
	id: "es/bolivia.mdx";
  slug: "es/bolivia";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/bosnia-and-herzegovina.mdx": {
	id: "es/bosnia-and-herzegovina.mdx";
  slug: "es/bosnia-and-herzegovina";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/botswana.mdx": {
	id: "es/botswana.mdx";
  slug: "es/botswana";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/brazil.mdx": {
	id: "es/brazil.mdx";
  slug: "es/brazil";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/brunei.mdx": {
	id: "es/brunei.mdx";
  slug: "es/brunei";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/bulgaria.mdx": {
	id: "es/bulgaria.mdx";
  slug: "es/bulgaria";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/cameroon.mdx": {
	id: "es/cameroon.mdx";
  slug: "es/cameroon";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/chile.mdx": {
	id: "es/chile.mdx";
  slug: "es/chile";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/china.mdx": {
	id: "es/china.mdx";
  slug: "es/china";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/colombia.mdx": {
	id: "es/colombia.mdx";
  slug: "es/colombia";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/costa-rica.mdx": {
	id: "es/costa-rica.mdx";
  slug: "es/costa-rica";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/croatia.mdx": {
	id: "es/croatia.mdx";
  slug: "es/croatia";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/cuba.mdx": {
	id: "es/cuba.mdx";
  slug: "es/cuba";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/cyprus.mdx": {
	id: "es/cyprus.mdx";
  slug: "es/cyprus";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/czech-republic.mdx": {
	id: "es/czech-republic.mdx";
  slug: "es/czech-republic";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/democratic-republic-of-the-congo.mdx": {
	id: "es/democratic-republic-of-the-congo.mdx";
  slug: "es/democratic-republic-of-the-congo";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/denmark.mdx": {
	id: "es/denmark.mdx";
  slug: "es/denmark";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/dominican-republic.mdx": {
	id: "es/dominican-republic.mdx";
  slug: "es/dominican-republic";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/ecuador.mdx": {
	id: "es/ecuador.mdx";
  slug: "es/ecuador";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/egypt.mdx": {
	id: "es/egypt.mdx";
  slug: "es/egypt";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/el-salvador.mdx": {
	id: "es/el-salvador.mdx";
  slug: "es/el-salvador";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/england.mdx": {
	id: "es/england.mdx";
  slug: "es/england";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/estonia.mdx": {
	id: "es/estonia.mdx";
  slug: "es/estonia";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/ethiopia.mdx": {
	id: "es/ethiopia.mdx";
  slug: "es/ethiopia";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/finland.mdx": {
	id: "es/finland.mdx";
  slug: "es/finland";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/france.mdx": {
	id: "es/france.mdx";
  slug: "es/france";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/georgia.mdx": {
	id: "es/georgia.mdx";
  slug: "es/georgia";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/germany.mdx": {
	id: "es/germany.mdx";
  slug: "es/germany";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/ghana.mdx": {
	id: "es/ghana.mdx";
  slug: "es/ghana";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/greece.mdx": {
	id: "es/greece.mdx";
  slug: "es/greece";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/guatemala.mdx": {
	id: "es/guatemala.mdx";
  slug: "es/guatemala";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/haiti.mdx": {
	id: "es/haiti.mdx";
  slug: "es/haiti";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/hungary.mdx": {
	id: "es/hungary.mdx";
  slug: "es/hungary";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/iceland.mdx": {
	id: "es/iceland.mdx";
  slug: "es/iceland";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/india.mdx": {
	id: "es/india.mdx";
  slug: "es/india";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/indonesia.mdx": {
	id: "es/indonesia.mdx";
  slug: "es/indonesia";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/iran.mdx": {
	id: "es/iran.mdx";
  slug: "es/iran";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/iraq.mdx": {
	id: "es/iraq.mdx";
  slug: "es/iraq";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/ireland.mdx": {
	id: "es/ireland.mdx";
  slug: "es/ireland";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/israel.mdx": {
	id: "es/israel.mdx";
  slug: "es/israel";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/italy.mdx": {
	id: "es/italy.mdx";
  slug: "es/italy";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/jamaica.mdx": {
	id: "es/jamaica.mdx";
  slug: "es/jamaica";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/japan.mdx": {
	id: "es/japan.mdx";
  slug: "es/japan";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/jordan.mdx": {
	id: "es/jordan.mdx";
  slug: "es/jordan";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/kazakhstan.mdx": {
	id: "es/kazakhstan.mdx";
  slug: "es/kazakhstan";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/kenya.mdx": {
	id: "es/kenya.mdx";
  slug: "es/kenya";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/kuwait.mdx": {
	id: "es/kuwait.mdx";
  slug: "es/kuwait";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/kyrgyzstan.mdx": {
	id: "es/kyrgyzstan.mdx";
  slug: "es/kyrgyzstan";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/laos.mdx": {
	id: "es/laos.mdx";
  slug: "es/laos";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/latvia.mdx": {
	id: "es/latvia.mdx";
  slug: "es/latvia";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/lebanon.mdx": {
	id: "es/lebanon.mdx";
  slug: "es/lebanon";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/libya.mdx": {
	id: "es/libya.mdx";
  slug: "es/libya";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/lithuania.mdx": {
	id: "es/lithuania.mdx";
  slug: "es/lithuania";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/luxembourg.mdx": {
	id: "es/luxembourg.mdx";
  slug: "es/luxembourg";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/madagascar.mdx": {
	id: "es/madagascar.mdx";
  slug: "es/madagascar";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/malaysia.mdx": {
	id: "es/malaysia.mdx";
  slug: "es/malaysia";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/maldives.mdx": {
	id: "es/maldives.mdx";
  slug: "es/maldives";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/mali.mdx": {
	id: "es/mali.mdx";
  slug: "es/mali";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/malta.mdx": {
	id: "es/malta.mdx";
  slug: "es/malta";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/mauritius.mdx": {
	id: "es/mauritius.mdx";
  slug: "es/mauritius";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/mexico.mdx": {
	id: "es/mexico.mdx";
  slug: "es/mexico";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/moldova.mdx": {
	id: "es/moldova.mdx";
  slug: "es/moldova";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/mongolia.mdx": {
	id: "es/mongolia.mdx";
  slug: "es/mongolia";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/morocco.mdx": {
	id: "es/morocco.mdx";
  slug: "es/morocco";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/mozambique.mdx": {
	id: "es/mozambique.mdx";
  slug: "es/mozambique";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/myanmar.mdx": {
	id: "es/myanmar.mdx";
  slug: "es/myanmar";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/namibia.mdx": {
	id: "es/namibia.mdx";
  slug: "es/namibia";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/nepal.mdx": {
	id: "es/nepal.mdx";
  slug: "es/nepal";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/netherlands.mdx": {
	id: "es/netherlands.mdx";
  slug: "es/netherlands";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/nigeria.mdx": {
	id: "es/nigeria.mdx";
  slug: "es/nigeria";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/north-korea.mdx": {
	id: "es/north-korea.mdx";
  slug: "es/north-korea";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/north-macedonia.mdx": {
	id: "es/north-macedonia.mdx";
  slug: "es/north-macedonia";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/norway.mdx": {
	id: "es/norway.mdx";
  slug: "es/norway";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/oman.mdx": {
	id: "es/oman.mdx";
  slug: "es/oman";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/pakistan.mdx": {
	id: "es/pakistan.mdx";
  slug: "es/pakistan";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/palestine.mdx": {
	id: "es/palestine.mdx";
  slug: "es/palestine";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/panama.mdx": {
	id: "es/panama.mdx";
  slug: "es/panama";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/paraguay.mdx": {
	id: "es/paraguay.mdx";
  slug: "es/paraguay";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/peru.mdx": {
	id: "es/peru.mdx";
  slug: "es/peru";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/philippines.mdx": {
	id: "es/philippines.mdx";
  slug: "es/philippines";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/poland.mdx": {
	id: "es/poland.mdx";
  slug: "es/poland";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/portugal.mdx": {
	id: "es/portugal.mdx";
  slug: "es/portugal";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/puerto-rico.mdx": {
	id: "es/puerto-rico.mdx";
  slug: "es/puerto-rico";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/qatar.mdx": {
	id: "es/qatar.mdx";
  slug: "es/qatar";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/romania.mdx": {
	id: "es/romania.mdx";
  slug: "es/romania";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/russia.mdx": {
	id: "es/russia.mdx";
  slug: "es/russia";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/rwanda.mdx": {
	id: "es/rwanda.mdx";
  slug: "es/rwanda";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/saudi-arabia.mdx": {
	id: "es/saudi-arabia.mdx";
  slug: "es/saudi-arabia";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/senegal.mdx": {
	id: "es/senegal.mdx";
  slug: "es/senegal";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/serbia.mdx": {
	id: "es/serbia.mdx";
  slug: "es/serbia";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/singapore.mdx": {
	id: "es/singapore.mdx";
  slug: "es/singapore";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/slovakia.mdx": {
	id: "es/slovakia.mdx";
  slug: "es/slovakia";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/slovenia.mdx": {
	id: "es/slovenia.mdx";
  slug: "es/slovenia";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/somalia.mdx": {
	id: "es/somalia.mdx";
  slug: "es/somalia";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/south-africa.mdx": {
	id: "es/south-africa.mdx";
  slug: "es/south-africa";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/south-korea.mdx": {
	id: "es/south-korea.mdx";
  slug: "es/south-korea";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/spain.mdx": {
	id: "es/spain.mdx";
  slug: "es/spain";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/sri-lanka.mdx": {
	id: "es/sri-lanka.mdx";
  slug: "es/sri-lanka";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/sudan.mdx": {
	id: "es/sudan.mdx";
  slug: "es/sudan";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/sweden.mdx": {
	id: "es/sweden.mdx";
  slug: "es/sweden";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/switzerland.mdx": {
	id: "es/switzerland.mdx";
  slug: "es/switzerland";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/syria.mdx": {
	id: "es/syria.mdx";
  slug: "es/syria";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/tanzania.mdx": {
	id: "es/tanzania.mdx";
  slug: "es/tanzania";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/thailand.mdx": {
	id: "es/thailand.mdx";
  slug: "es/thailand";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/timor-leste.mdx": {
	id: "es/timor-leste.mdx";
  slug: "es/timor-leste";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/tunisia.mdx": {
	id: "es/tunisia.mdx";
  slug: "es/tunisia";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/turkey.mdx": {
	id: "es/turkey.mdx";
  slug: "es/turkey";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/uganda.mdx": {
	id: "es/uganda.mdx";
  slug: "es/uganda";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/ukraine.mdx": {
	id: "es/ukraine.mdx";
  slug: "es/ukraine";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/united-arab-emirates.mdx": {
	id: "es/united-arab-emirates.mdx";
  slug: "es/united-arab-emirates";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/united-states-of-america.mdx": {
	id: "es/united-states-of-america.mdx";
  slug: "es/united-states-of-america";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/uruguay.mdx": {
	id: "es/uruguay.mdx";
  slug: "es/uruguay";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/uzbekistan.mdx": {
	id: "es/uzbekistan.mdx";
  slug: "es/uzbekistan";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/venezuela.mdx": {
	id: "es/venezuela.mdx";
  slug: "es/venezuela";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/vietnam.mdx": {
	id: "es/vietnam.mdx";
  slug: "es/vietnam";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/yemen.mdx": {
	id: "es/yemen.mdx";
  slug: "es/yemen";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"es/zimbabwe.mdx": {
	id: "es/zimbabwe.mdx";
  slug: "es/zimbabwe";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"fr/argentina.mdx": {
	id: "fr/argentina.mdx";
  slug: "fr/argentina";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"fr/australia.mdx": {
	id: "fr/australia.mdx";
  slug: "fr/australia";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"fr/brazil.mdx": {
	id: "fr/brazil.mdx";
  slug: "fr/brazil";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"fr/canada.mdx": {
	id: "fr/canada.mdx";
  slug: "fr/canada";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"fr/egypt.mdx": {
	id: "fr/egypt.mdx";
  slug: "fr/egypt";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"fr/england.mdx": {
	id: "fr/england.mdx";
  slug: "fr/england";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"fr/france.mdx": {
	id: "fr/france.mdx";
  slug: "fr/france";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"fr/germany.mdx": {
	id: "fr/germany.mdx";
  slug: "fr/germany";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"fr/ghana.mdx": {
	id: "fr/ghana.mdx";
  slug: "fr/ghana";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"fr/greece.mdx": {
	id: "fr/greece.mdx";
  slug: "fr/greece";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"fr/india.mdx": {
	id: "fr/india.mdx";
  slug: "fr/india";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"fr/italy.mdx": {
	id: "fr/italy.mdx";
  slug: "fr/italy";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"fr/japan.mdx": {
	id: "fr/japan.mdx";
  slug: "fr/japan";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"fr/mexico.mdx": {
	id: "fr/mexico.mdx";
  slug: "fr/mexico";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"fr/morocco.mdx": {
	id: "fr/morocco.mdx";
  slug: "fr/morocco";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"fr/portugal.mdx": {
	id: "fr/portugal.mdx";
  slug: "fr/portugal";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"fr/south-africa.mdx": {
	id: "fr/south-africa.mdx";
  slug: "fr/south-africa";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"fr/spain.mdx": {
	id: "fr/spain.mdx";
  slug: "fr/spain";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"fr/thailand.mdx": {
	id: "fr/thailand.mdx";
  slug: "fr/thailand";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"fr/united-states-of-america.mdx": {
	id: "fr/united-states-of-america.mdx";
  slug: "fr/united-states-of-america";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"fr/vatican-city.mdx": {
	id: "fr/vatican-city.mdx";
  slug: "fr/vatican-city";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
"fr/vietnam.mdx": {
	id: "fr/vietnam.mdx";
  slug: "fr/vietnam";
  body: string;
  collection: "countries";
  data: InferEntrySchema<"countries">
} & { render(): Render[".mdx"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../../src/content/config.js");
}
