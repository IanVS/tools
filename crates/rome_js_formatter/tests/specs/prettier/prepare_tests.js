const { promises: fs } = require("fs");
const path = require("path");
const prettier = require("prettier");

if (process.argv.length < 3) {
	console.error("Usage: node prepare_tests.js <prettier root>");
	process.exit(2);
}

const PRETTIER_ROOT = path.resolve(process.argv[2], "tests/format");

// Recursively traverse the test directory to search for snapshots files
async function traverseDir(dir, config) {
	for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
		if (entry.isDirectory()) {
			await traverseDir(path.resolve(dir, entry.name), config);
			continue;
		}

		if (entry.isFile()) {
			const file = entry.name;

			// Ignore spec files
			if (file.startsWith("jsfmt.spec")) {
				continue;
			}

			// Compute a relative path from the Prettier root directory
			// to this file, then an absolute path using the rome_js_formatter
			// specs directory as a root instead
			const filePath = path.resolve(dir, file);
			const relPath = path.relative(PRETTIER_ROOT, filePath);
			const outPath = path.resolve(__dirname, relPath);
			const snapshotPath = path.resolve(dir, "__snapshots__", "jsfmt.spec.js.snap")
			const snapFile = path.basename(file) + ".prettier-snap";

			const snapshot = require(snapshotPath);

			const key = `${file} format 1`;
			let snapshotContent = snapshot[key];

			if (snapshotContent !== undefined) {
				// Copy the snapshot input file, ensuring the
				// parent directory exists
				const outDir = path.resolve(outPath, "..");
				await fs.mkdir(outDir, { recursive: true });
				await fs.copyFile(filePath, outPath);
				// Extract the expected output from the snapshot text
				const OUTPUT =
					"=====================================output=====================================";
				const FOOTER =
					"================================================================================";

				const start = snapshotContent.match(new RegExp(OUTPUT + "\\n"));
				const end = snapshotContent.match(new RegExp("\\n" + FOOTER));

				const startOffset = start.index + start[0].length;
				const endOffset = end.index;
				snapshotContent = snapshotContent.substring(startOffset, endOffset);

				try {
					// We need to reformat prettier snapshot
					// because Rome and Prettier have different default options
					snapshotContent = prettier.format(snapshotContent, config);
				} catch (error) {
					console.error(`Prettier format error in ${filePath}: ${error}`);
				}
				// Write the expected output to an additional prettier-snap
				// file in the specs directory
				await fs.writeFile(path.resolve(outDir, snapFile), snapshotContent);
			} else {
				// Load content from file current fule
				const content = await fs.readFile(filePath, { encoding: "utf8" });

				try {
					// Try to format input with prettier
					const prettierOutput = prettier.format(content, config);

					const outDir = path.resolve(outPath, "..");
					await fs.mkdir(outDir, { recursive: true });
					await fs.copyFile(filePath, outPath);

					// Write the expected output to an additional prettier-snap
					// file in the specs directory
					await fs.writeFile(path.resolve(outDir, snapFile), prettierOutput);
				} catch (error) {
					console.error(`Prettier format error in ${filePath}: ${error}`);
				}
			}
		}
	}
}

const PRETTIER_ROOT_JS = path.resolve(PRETTIER_ROOT, "js");
const PRETTIER_ROOT_JSX = path.resolve(PRETTIER_ROOT, "jsx");
const PRETTIER_ROOT_TS = path.resolve(PRETTIER_ROOT, "typescript");

const defaultConfig = {
	trailingComma: "all",
	tabWidth: 2,
	printWidth: 80,
	singleQuote: false,
	jsxSingleQuote: false,
	useTabs: false,
	embeddedLanguageFormatting: "off",
};

async function main() {
	console.log("Extracting tests from %s ...", PRETTIER_ROOT_JS);
	await traverseDir(PRETTIER_ROOT_JS, {
		...defaultConfig,
		parser: "babel",
	});

	console.log("Extracting tests from %s ...", { PRETTIER_ROOT_JSX });
	await traverseDir(PRETTIER_ROOT_JSX, {
		...defaultConfig,
		parser: "babel",
	});

	console.log("Extracting tests from %s ...", PRETTIER_ROOT_TS);
	await traverseDir(PRETTIER_ROOT_TS, {
		...defaultConfig,
		parser: "typescript",
	});
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
