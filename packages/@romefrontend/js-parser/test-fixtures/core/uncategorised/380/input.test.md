# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 380`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: true
	directives: Array []
	filename: "input.js"
	hasHoistedVars: true
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "input.js"
		end: Object {
			column: 11
			index: 11
			line: 1
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse/js"}]
			description: Object {
				advice: Array []
				category: "parse/js"
				message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: "Unterminated regular expression"}
			}
			location: Object {
				filename: "input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 9
					index: 9
					line: 1
				}
				start: Object {
					column: 9
					index: 9
					line: 1
				}
			}
		}
	]
	body: Array [
		JSVariableDeclarationStatement {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 11
					index: 11
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			declaration: JSVariableDeclaration {
				kind: "var"
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 11
						index: 11
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				declarations: Array [
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "x"
							loc: Object {
								filename: "input.js"
								identifierName: "x"
								end: Object {
									column: 5
									index: 5
									line: 1
								}
								start: Object {
									column: 4
									index: 4
									line: 1
								}
							}
						}
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 11
								index: 11
								line: 1
							}
							start: Object {
								column: 4
								index: 4
								line: 1
							}
						}
						init: JSBinaryExpression {
							operator: "/"
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 11
									index: 11
									line: 1
								}
								start: Object {
									column: 8
									index: 8
									line: 1
								}
							}
							right: JSReferenceIdentifier {
								name: "INVALID_PLACEHOLDER"
								loc: Object {
									filename: "input.js"
									end: Object {
										column: 11
										index: 11
										line: 1
									}
									start: Object {
										column: 11
										index: 11
										line: 1
									}
								}
							}
							left: JSRegExpLiteral {
								global: false
								insensitive: false
								multiline: false
								noDotNewline: false
								sticky: false
								unicode: false
								loc: Object {
									filename: "input.js"
									end: Object {
										column: 10
										index: 10
										line: 1
									}
									start: Object {
										column: 8
										index: 8
										line: 1
									}
								}
								expression: JSRegExpSubExpression {
									body: Array []
									loc: Object {
										filename: "input.js"
										end: Object {
											column: 9
											index: 9
											line: 1
										}
										start: Object {
											column: 9
											index: 9
											line: 1
										}
									}
								}
							}
						}
					}
				]
			}
		}
	]
}
```

### `diagnostics`

```

 input.js:1:9 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unterminated regular expression

  > 1 │ var x = /
      │          ^
    2 │ /

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```