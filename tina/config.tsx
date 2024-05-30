import { LocalAuthProvider, defineConfig } from "tinacms";
import {
	TinaUserCollection,
	UsernamePasswordAuthJSProvider,
} from "tinacms-authjs/dist/tinacms";

import { PageCollection } from "./collections/page";

const isLocal = process.env.TINA_PUBLIC_IS_LOCAL === "true";

export default defineConfig({
	authProvider: isLocal
		? new LocalAuthProvider()
		: new UsernamePasswordAuthJSProvider(),
	contentApiUrlOverride: "/api/tina/gql",
	build: {
		publicFolder: "public",
		outputFolder: "admin",
	},
	media: {
		tina: {
			mediaRoot: "assets",
			publicFolder: "public",
			static: true,
		},
	},
	schema: {
		collections: [TinaUserCollection, PageCollection],
	},
});
