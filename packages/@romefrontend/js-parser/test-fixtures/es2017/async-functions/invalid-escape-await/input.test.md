# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `es2017 > async-functions > invalid-escape-await`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "input.js"
		end: Object {
			column: 0
			index: 36
			line: 2
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
				message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: "Can not use 'await' as identifier inside an async function"}
			}
			location: Object {
				filename: "input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 30
					index: 30
					line: 1
				}
				start: Object {
					column: 20
					index: 20
					line: 1
				}
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 35
					index: 35
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: JSFunctionExpression {
				id: undefined
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 34
						index: 34
						line: 1
					}
					start: Object {
						column: 1
						index: 1
						line: 1
					}
				}
				head: JSFunctionHead {
					async: true
					generator: false
					hasHoistedVars: false
					params: Array []
					rest: undefined
					returnType: undefined
					thisType: undefined
					typeParameters: undefined
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 17
							index: 17
							line: 1
						}
						start: Object {
							column: 15
							index: 15
							line: 1
						}
					}
				}
				body: JSBlockStatement {
					directives: Array []
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 34
							index: 34
							line: 1
						}
						start: Object {
							column: 18
							index: 18
							line: 1
						}
					}
					body: Array [
						JSExpressionStatement {
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 30
									index: 30
									line: 1
								}
								start: Object {
									column: 20
									index: 20
									line: 1
								}
							}
							expression: JSReferenceIdentifier {
								name: "await"
								loc: Object {
									filename: "input.js"
									identifierName: "await"
									end: Object {
										column: 30
										index: 30
										line: 1
									}
									start: Object {
										column: 20
										index: 20
										line: 1
									}
								}
							}
						}
						JSExpressionStatement {
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 32
									index: 32
									line: 1
								}
								start: Object {
									column: 31
									index: 31
									line: 1
								}
							}
							expression: JSReferenceIdentifier {
								name: "x"
								loc: Object {
									filename: "input.js"
									identifierName: "x"
									end: Object {
										column: 32
										index: 32
										line: 1
									}
									start: Object {
										column: 31
										index: 31
										line: 1
									}
								}
							}
						}
					]
				}
			}
		}
	]
}
```

### `diagnostics`

```

 input.js:1:20 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Can not use 'await' as identifier inside an async function

    (async function() { aw\u0061it x })
                        ^^^^^^^^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```