import prismjs from "prismjs";
import jsdom from "jsdom";

/**
 * Processes an html document to create the markup needed for syntax highlighted
 * code blocks.
 *
 * @param {string} html  A full html document.
 * @returns {string} The full html document with syntax highlighted code blocks.
 */
export const syntaxHighlightCodeBlocks = (dom: jsdom.JSDOM) => {
    const codeBlocks: NodeList = dom.window.document.querySelectorAll("code");

    for (let i = 0; i < codeBlocks.length; i++) {
        const block = codeBlocks[i] as Element;
        if (!block.textContent) {
            continue;
        }
        /*
            Only supports the following out of the box (that we care about):
            - html
            - svg
            - css
            - clike
            - javascript
            - js

            TODO: allow for extensions for:
            - csharp
            - ts/typescript [x]
            - tsx [x]
            - sass
        */
        const language = block.className.trim().split("-")[1];

        let p = ts(prismjs);
        p = tsx(p);

        const prismCode = p.highlight(
            block.textContent,
            p.languages[language],
            language
        );
        block.innerHTML = prismCode;
        var pre = block.parentElement;
        pre?.classList.add(`language-${language}`);
        pre?.setAttribute("tabindex", "0");
    }
    // return dom;
};

const ts = (Prism: any) => {
    Prism.languages.typescript = Prism.languages.extend("javascript", {
        "class-name": {
            pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
            lookbehind: true,
            greedy: true,
            inside: null, // see below
        },
        // From JavaScript Prism keyword list and TypeScript language spec: https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#221-reserved-words
        keyword: /\b(?:abstract|as|asserts|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|undefined|var|void|while|with|yield)\b/,
        builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/,
    });

    // doesn't work with TS because TS is too complex
    delete Prism.languages.typescript["parameter"];

    // a version of typescript specifically for highlighting types
    var typeInside = Prism.languages.extend("typescript", {});
    delete typeInside["class-name"];

    Prism.languages.typescript["class-name"].inside = typeInside;

    Prism.languages.insertBefore("typescript", "function", {
        "generic-function": {
            // e.g. foo<T extends "bar" | "baz">( ...
            pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>((?=\s*\()|(?=\s*\{))/,
            greedy: true,
            inside: {
                "class-name": /^#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*/,
                generic: {
                    pattern: /<[\s\S]+/, // everything after the first <
                    alias: "class-name",
                    inside: typeInside,
                },
            },
        },
    });

    Prism.languages.insertBefore("typescript", "function", {
        "typed-var": {
            // e.g. aaa: bbb =...
            pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*:\s*[a-zA-Z0-9<>_.]*/,
            greedy: true,
            inside: {
                generic: {
                    pattern: /:[\s\S]+/, // everything after the first :
                    alias: "class-name",
                    inside: typeInside,
                },
            },
        },
    });

    Prism.languages.ts = Prism.languages.typescript;

    return Prism;
};

const tsx = (Prism: any) => {
    var javascript = Prism.util.clone(Prism.languages.javascript);

    Prism.languages.jsx = Prism.languages.extend("markup", javascript);
    Prism.languages.jsx.tag.pattern = /<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:$-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}))?|\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}))*\s*\/?)?>/i;

    Prism.languages.jsx.tag.inside["tag"].pattern = /^<\/?[^\s>\/]*/i;
    Prism.languages.jsx.tag.inside[
        "attr-value"
    ].pattern = /=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i;
    Prism.languages.jsx.tag.inside["tag"].inside[
        "class-name"
    ] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/;

    Prism.languages.insertBefore(
        "inside",
        "attr-name",
        {
            spread: {
                pattern: /\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}/,
                inside: {
                    punctuation: /\.{3}|[{}.]/,
                    "attr-value": /\w+/,
                },
            },
        },
        Prism.languages.jsx.tag
    );

    Prism.languages.insertBefore(
        "inside",
        "attr-value",
        {
            script: {
                // Allow for two levels of nesting
                pattern: /=(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\})/i,
                inside: {
                    "script-punctuation": {
                        pattern: /^=(?={)/,
                        alias: "punctuation",
                    },
                    rest: Prism.languages.jsx,
                },
                alias: "language-javascript",
            },
        },
        Prism.languages.jsx.tag
    );

    // The following will handle plain text inside tags
    var stringifyToken = function (token: any) {
        if (!token) {
            return "";
        }
        if (typeof token === "string") {
            return token;
        }
        if (typeof token.content === "string") {
            return token.content;
        }
        return token.content.map(stringifyToken).join("");
    };

    var walkTokens = function (tokens: any[]) {
        var openedTags = [];
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            var notTagNorBrace = false;

            if (typeof token !== "string") {
                if (
                    token.type === "tag" &&
                    token.content[0] &&
                    token.content[0].type === "tag"
                ) {
                    // We found a tag, now find its kind

                    if (token.content[0].content[0].content === "</") {
                        // Closing tag
                        if (
                            openedTags.length > 0 &&
                            openedTags[openedTags.length - 1].tagName ===
                                stringifyToken(token.content[0].content[1])
                        ) {
                            // Pop matching opening tag
                            openedTags.pop();
                        }
                    } else {
                        if (
                            token.content[token.content.length - 1].content ===
                            "/>"
                        ) {
                            // Autoclosed tag, ignore
                        } else {
                            // Opening tag
                            openedTags.push({
                                tagName: stringifyToken(
                                    token.content[0].content[1]
                                ),
                                openedBraces: 0,
                            });
                        }
                    }
                } else if (
                    openedTags.length > 0 &&
                    token.type === "punctuation" &&
                    token.content === "{"
                ) {
                    // Here we might have entered a JSX context inside a tag
                    openedTags[openedTags.length - 1].openedBraces++;
                } else if (
                    openedTags.length > 0 &&
                    openedTags[openedTags.length - 1].openedBraces > 0 &&
                    token.type === "punctuation" &&
                    token.content === "}"
                ) {
                    // Here we might have left a JSX context inside a tag
                    openedTags[openedTags.length - 1].openedBraces--;
                } else {
                    notTagNorBrace = true;
                }
            }
            if (notTagNorBrace || typeof token === "string") {
                if (
                    openedTags.length > 0 &&
                    openedTags[openedTags.length - 1].openedBraces === 0
                ) {
                    // Here we are inside a tag, and not inside a JSX context.
                    // That's plain text: drop any tokens matched.
                    var plainText = stringifyToken(token);

                    // And merge text with adjacent text
                    if (
                        i < tokens.length - 1 &&
                        (typeof tokens[i + 1] === "string" ||
                            tokens[i + 1].type === "plain-text")
                    ) {
                        plainText += stringifyToken(tokens[i + 1]);
                        tokens.splice(i + 1, 1);
                    }
                    if (
                        i > 0 &&
                        (typeof tokens[i - 1] === "string" ||
                            tokens[i - 1].type === "plain-text")
                    ) {
                        plainText = stringifyToken(tokens[i - 1]) + plainText;
                        tokens.splice(i - 1, 1);
                        i--;
                    }

                    tokens[i] = new Prism.Token(
                        "plain-text",
                        plainText,
                        null,
                        plainText
                    );
                }
            }

            if (token.content && typeof token.content !== "string") {
                walkTokens(token.content);
            }
        }
    };

    Prism.hooks.add("after-tokenize", function (env: any) {
        if (env.language !== "jsx" && env.language !== "tsx") {
            return;
        }
        walkTokens(env.tokens);
    });
    //
    var typescript = Prism.util.clone(Prism.languages.typescript);
    Prism.languages.tsx = Prism.languages.extend("jsx", typescript);
    return Prism;
};
