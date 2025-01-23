"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/zod-validation-error";
exports.ids = ["vendor-chunks/zod-validation-error"];
exports.modules = {

/***/ "(rsc)/./node_modules/zod-validation-error/dist/index.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/zod-validation-error/dist/index.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ValidationError: () => (/* binding */ ValidationError),\n/* harmony export */   createMessageBuilder: () => (/* binding */ createMessageBuilder),\n/* harmony export */   errorMap: () => (/* binding */ errorMap),\n/* harmony export */   fromError: () => (/* binding */ fromError),\n/* harmony export */   fromZodError: () => (/* binding */ fromZodError),\n/* harmony export */   fromZodIssue: () => (/* binding */ fromZodIssue),\n/* harmony export */   isValidationError: () => (/* binding */ isValidationError),\n/* harmony export */   isValidationErrorLike: () => (/* binding */ isValidationErrorLike),\n/* harmony export */   isZodErrorLike: () => (/* binding */ isZodErrorLike),\n/* harmony export */   toValidationError: () => (/* binding */ toValidationError)\n/* harmony export */ });\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/zod/lib/index.mjs\");\n// lib/isZodErrorLike.ts\nfunction isZodErrorLike(err) {\n  return err instanceof Error && err.name === \"ZodError\" && \"issues\" in err && Array.isArray(err.issues);\n}\n\n// lib/ValidationError.ts\nvar ValidationError = class extends Error {\n  name;\n  details;\n  constructor(message, options) {\n    super(message, options);\n    this.name = \"ZodValidationError\";\n    this.details = getIssuesFromErrorOptions(options);\n  }\n  toString() {\n    return this.message;\n  }\n};\nfunction getIssuesFromErrorOptions(options) {\n  if (options) {\n    const cause = options.cause;\n    if (isZodErrorLike(cause)) {\n      return cause.issues;\n    }\n  }\n  return [];\n}\n\n// lib/isValidationError.ts\nfunction isValidationError(err) {\n  return err instanceof ValidationError;\n}\n\n// lib/isValidationErrorLike.ts\nfunction isValidationErrorLike(err) {\n  return err instanceof Error && err.name === \"ZodValidationError\";\n}\n\n// lib/fromZodIssue.ts\n\n\n// lib/MessageBuilder.ts\n\n\n// lib/utils/NonEmptyArray.ts\nfunction isNonEmptyArray(value) {\n  return value.length !== 0;\n}\n\n// lib/utils/joinPath.ts\nvar identifierRegex = /[$_\\p{ID_Start}][$\\u200c\\u200d\\p{ID_Continue}]*/u;\nfunction joinPath(path) {\n  if (path.length === 1) {\n    return path[0].toString();\n  }\n  return path.reduce((acc, item) => {\n    if (typeof item === \"number\") {\n      return acc + \"[\" + item.toString() + \"]\";\n    }\n    if (item.includes('\"')) {\n      return acc + '[\"' + escapeQuotes(item) + '\"]';\n    }\n    if (!identifierRegex.test(item)) {\n      return acc + '[\"' + item + '\"]';\n    }\n    const separator = acc.length === 0 ? \"\" : \".\";\n    return acc + separator + item;\n  }, \"\");\n}\nfunction escapeQuotes(str) {\n  return str.replace(/\"/g, '\\\\\"');\n}\n\n// lib/config.ts\nvar ISSUE_SEPARATOR = \"; \";\nvar MAX_ISSUES_IN_MESSAGE = 99;\nvar PREFIX = \"Validation error\";\nvar PREFIX_SEPARATOR = \": \";\nvar UNION_SEPARATOR = \", or \";\n\n// lib/MessageBuilder.ts\nfunction createMessageBuilder(props = {}) {\n  const {\n    issueSeparator = ISSUE_SEPARATOR,\n    unionSeparator = UNION_SEPARATOR,\n    prefixSeparator = PREFIX_SEPARATOR,\n    prefix = PREFIX,\n    includePath = true,\n    maxIssuesInMessage = MAX_ISSUES_IN_MESSAGE\n  } = props;\n  return (issues) => {\n    const message = issues.slice(0, maxIssuesInMessage).map(\n      (issue) => getMessageFromZodIssue({\n        issue,\n        issueSeparator,\n        unionSeparator,\n        includePath\n      })\n    ).join(issueSeparator);\n    return prefixMessage(message, prefix, prefixSeparator);\n  };\n}\nfunction getMessageFromZodIssue(props) {\n  const { issue, issueSeparator, unionSeparator, includePath } = props;\n  if (issue.code === zod__WEBPACK_IMPORTED_MODULE_0__.ZodIssueCode.invalid_union) {\n    return issue.unionErrors.reduce((acc, zodError) => {\n      const newIssues = zodError.issues.map(\n        (issue2) => getMessageFromZodIssue({\n          issue: issue2,\n          issueSeparator,\n          unionSeparator,\n          includePath\n        })\n      ).join(issueSeparator);\n      if (!acc.includes(newIssues)) {\n        acc.push(newIssues);\n      }\n      return acc;\n    }, []).join(unionSeparator);\n  }\n  if (issue.code === zod__WEBPACK_IMPORTED_MODULE_0__.ZodIssueCode.invalid_arguments) {\n    return [\n      issue.message,\n      ...issue.argumentsError.issues.map(\n        (issue2) => getMessageFromZodIssue({\n          issue: issue2,\n          issueSeparator,\n          unionSeparator,\n          includePath\n        })\n      )\n    ].join(issueSeparator);\n  }\n  if (issue.code === zod__WEBPACK_IMPORTED_MODULE_0__.ZodIssueCode.invalid_return_type) {\n    return [\n      issue.message,\n      ...issue.returnTypeError.issues.map(\n        (issue2) => getMessageFromZodIssue({\n          issue: issue2,\n          issueSeparator,\n          unionSeparator,\n          includePath\n        })\n      )\n    ].join(issueSeparator);\n  }\n  if (includePath && isNonEmptyArray(issue.path)) {\n    if (issue.path.length === 1) {\n      const identifier = issue.path[0];\n      if (typeof identifier === \"number\") {\n        return `${issue.message} at index ${identifier}`;\n      }\n    }\n    return `${issue.message} at \"${joinPath(issue.path)}\"`;\n  }\n  return issue.message;\n}\nfunction prefixMessage(message, prefix, prefixSeparator) {\n  if (prefix !== null) {\n    if (message.length > 0) {\n      return [prefix, message].join(prefixSeparator);\n    }\n    return prefix;\n  }\n  if (message.length > 0) {\n    return message;\n  }\n  return PREFIX;\n}\n\n// lib/fromZodIssue.ts\nfunction fromZodIssue(issue, options = {}) {\n  const messageBuilder = createMessageBuilderFromOptions(options);\n  const message = messageBuilder([issue]);\n  return new ValidationError(message, { cause: new zod__WEBPACK_IMPORTED_MODULE_0__.ZodError([issue]) });\n}\nfunction createMessageBuilderFromOptions(options) {\n  if (\"messageBuilder\" in options) {\n    return options.messageBuilder;\n  }\n  return createMessageBuilder(options);\n}\n\n// lib/errorMap.ts\nvar errorMap = (issue, ctx) => {\n  const error = fromZodIssue({\n    ...issue,\n    // fallback to the default error message\n    // when issue does not have a message\n    message: issue.message ?? ctx.defaultError\n  });\n  return {\n    message: error.message\n  };\n};\n\n// lib/fromZodError.ts\nfunction fromZodError(zodError, options = {}) {\n  if (!isZodErrorLike(zodError)) {\n    throw new TypeError(\n      `Invalid zodError param; expected instance of ZodError. Did you mean to use the \"${fromError.name}\" method instead?`\n    );\n  }\n  return fromZodErrorWithoutRuntimeCheck(zodError, options);\n}\nfunction fromZodErrorWithoutRuntimeCheck(zodError, options = {}) {\n  const zodIssues = zodError.errors;\n  let message;\n  if (isNonEmptyArray(zodIssues)) {\n    const messageBuilder = createMessageBuilderFromOptions2(options);\n    message = messageBuilder(zodIssues);\n  } else {\n    message = zodError.message;\n  }\n  return new ValidationError(message, { cause: zodError });\n}\nfunction createMessageBuilderFromOptions2(options) {\n  if (\"messageBuilder\" in options) {\n    return options.messageBuilder;\n  }\n  return createMessageBuilder(options);\n}\n\n// lib/toValidationError.ts\nvar toValidationError = (options = {}) => (err) => {\n  if (isZodErrorLike(err)) {\n    return fromZodErrorWithoutRuntimeCheck(err, options);\n  }\n  if (err instanceof Error) {\n    return new ValidationError(err.message, { cause: err });\n  }\n  return new ValidationError(\"Unknown error\");\n};\n\n// lib/fromError.ts\nfunction fromError(err, options = {}) {\n  return toValidationError(options)(err);\n}\n\n//# sourceMappingURL=index.mjs.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvem9kLXZhbGlkYXRpb24tZXJyb3IvZGlzdC9pbmRleC5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUM0Qjs7QUFFNUI7QUFDMkI7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCLFNBQVMsa0JBQWtCLFlBQVk7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUscURBQXFEO0FBQy9ELHFCQUFxQiw2Q0FBZ0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHFCQUFxQiw2Q0FBZ0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkNBQWdCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsZUFBZSxXQUFXLFdBQVc7QUFDdkQ7QUFDQTtBQUNBLGNBQWMsZUFBZSxNQUFNLHFCQUFxQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBLHdDQUF3QyxXQUFXLHlDQUFhLFdBQVc7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBLCtCQUErQiwwREFBMEQsZUFBZTtBQUN4RztBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRDtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSx3Q0FBd0MsaUJBQWlCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLFlBQVk7QUFDMUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFZRTtBQUNGIiwic291cmNlcyI6WyIvVXNlcnMva2NhcmluaS9Eb2N1bWVudHMvR2l0SHViL2tjYXJpbmkuZ2l0aHViLmlvL25vZGVfbW9kdWxlcy96b2QtdmFsaWRhdGlvbi1lcnJvci9kaXN0L2luZGV4Lm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsaWIvaXNab2RFcnJvckxpa2UudHNcbmZ1bmN0aW9uIGlzWm9kRXJyb3JMaWtlKGVycikge1xuICByZXR1cm4gZXJyIGluc3RhbmNlb2YgRXJyb3IgJiYgZXJyLm5hbWUgPT09IFwiWm9kRXJyb3JcIiAmJiBcImlzc3Vlc1wiIGluIGVyciAmJiBBcnJheS5pc0FycmF5KGVyci5pc3N1ZXMpO1xufVxuXG4vLyBsaWIvVmFsaWRhdGlvbkVycm9yLnRzXG52YXIgVmFsaWRhdGlvbkVycm9yID0gY2xhc3MgZXh0ZW5kcyBFcnJvciB7XG4gIG5hbWU7XG4gIGRldGFpbHM7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihtZXNzYWdlLCBvcHRpb25zKTtcbiAgICB0aGlzLm5hbWUgPSBcIlpvZFZhbGlkYXRpb25FcnJvclwiO1xuICAgIHRoaXMuZGV0YWlscyA9IGdldElzc3Vlc0Zyb21FcnJvck9wdGlvbnMob3B0aW9ucyk7XG4gIH1cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWVzc2FnZTtcbiAgfVxufTtcbmZ1bmN0aW9uIGdldElzc3Vlc0Zyb21FcnJvck9wdGlvbnMob3B0aW9ucykge1xuICBpZiAob3B0aW9ucykge1xuICAgIGNvbnN0IGNhdXNlID0gb3B0aW9ucy5jYXVzZTtcbiAgICBpZiAoaXNab2RFcnJvckxpa2UoY2F1c2UpKSB7XG4gICAgICByZXR1cm4gY2F1c2UuaXNzdWVzO1xuICAgIH1cbiAgfVxuICByZXR1cm4gW107XG59XG5cbi8vIGxpYi9pc1ZhbGlkYXRpb25FcnJvci50c1xuZnVuY3Rpb24gaXNWYWxpZGF0aW9uRXJyb3IoZXJyKSB7XG4gIHJldHVybiBlcnIgaW5zdGFuY2VvZiBWYWxpZGF0aW9uRXJyb3I7XG59XG5cbi8vIGxpYi9pc1ZhbGlkYXRpb25FcnJvckxpa2UudHNcbmZ1bmN0aW9uIGlzVmFsaWRhdGlvbkVycm9yTGlrZShlcnIpIHtcbiAgcmV0dXJuIGVyciBpbnN0YW5jZW9mIEVycm9yICYmIGVyci5uYW1lID09PSBcIlpvZFZhbGlkYXRpb25FcnJvclwiO1xufVxuXG4vLyBsaWIvZnJvbVpvZElzc3VlLnRzXG5pbXBvcnQgKiBhcyB6b2QyIGZyb20gXCJ6b2RcIjtcblxuLy8gbGliL01lc3NhZ2VCdWlsZGVyLnRzXG5pbXBvcnQgKiBhcyB6b2QgZnJvbSBcInpvZFwiO1xuXG4vLyBsaWIvdXRpbHMvTm9uRW1wdHlBcnJheS50c1xuZnVuY3Rpb24gaXNOb25FbXB0eUFycmF5KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5sZW5ndGggIT09IDA7XG59XG5cbi8vIGxpYi91dGlscy9qb2luUGF0aC50c1xudmFyIGlkZW50aWZpZXJSZWdleCA9IC9bJF9cXHB7SURfU3RhcnR9XVskXFx1MjAwY1xcdTIwMGRcXHB7SURfQ29udGludWV9XSovdTtcbmZ1bmN0aW9uIGpvaW5QYXRoKHBhdGgpIHtcbiAgaWYgKHBhdGgubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIHBhdGhbMF0udG9TdHJpbmcoKTtcbiAgfVxuICByZXR1cm4gcGF0aC5yZWR1Y2UoKGFjYywgaXRlbSkgPT4ge1xuICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgcmV0dXJuIGFjYyArIFwiW1wiICsgaXRlbS50b1N0cmluZygpICsgXCJdXCI7XG4gICAgfVxuICAgIGlmIChpdGVtLmluY2x1ZGVzKCdcIicpKSB7XG4gICAgICByZXR1cm4gYWNjICsgJ1tcIicgKyBlc2NhcGVRdW90ZXMoaXRlbSkgKyAnXCJdJztcbiAgICB9XG4gICAgaWYgKCFpZGVudGlmaWVyUmVnZXgudGVzdChpdGVtKSkge1xuICAgICAgcmV0dXJuIGFjYyArICdbXCInICsgaXRlbSArICdcIl0nO1xuICAgIH1cbiAgICBjb25zdCBzZXBhcmF0b3IgPSBhY2MubGVuZ3RoID09PSAwID8gXCJcIiA6IFwiLlwiO1xuICAgIHJldHVybiBhY2MgKyBzZXBhcmF0b3IgKyBpdGVtO1xuICB9LCBcIlwiKTtcbn1cbmZ1bmN0aW9uIGVzY2FwZVF1b3RlcyhzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJyk7XG59XG5cbi8vIGxpYi9jb25maWcudHNcbnZhciBJU1NVRV9TRVBBUkFUT1IgPSBcIjsgXCI7XG52YXIgTUFYX0lTU1VFU19JTl9NRVNTQUdFID0gOTk7XG52YXIgUFJFRklYID0gXCJWYWxpZGF0aW9uIGVycm9yXCI7XG52YXIgUFJFRklYX1NFUEFSQVRPUiA9IFwiOiBcIjtcbnZhciBVTklPTl9TRVBBUkFUT1IgPSBcIiwgb3IgXCI7XG5cbi8vIGxpYi9NZXNzYWdlQnVpbGRlci50c1xuZnVuY3Rpb24gY3JlYXRlTWVzc2FnZUJ1aWxkZXIocHJvcHMgPSB7fSkge1xuICBjb25zdCB7XG4gICAgaXNzdWVTZXBhcmF0b3IgPSBJU1NVRV9TRVBBUkFUT1IsXG4gICAgdW5pb25TZXBhcmF0b3IgPSBVTklPTl9TRVBBUkFUT1IsXG4gICAgcHJlZml4U2VwYXJhdG9yID0gUFJFRklYX1NFUEFSQVRPUixcbiAgICBwcmVmaXggPSBQUkVGSVgsXG4gICAgaW5jbHVkZVBhdGggPSB0cnVlLFxuICAgIG1heElzc3Vlc0luTWVzc2FnZSA9IE1BWF9JU1NVRVNfSU5fTUVTU0FHRVxuICB9ID0gcHJvcHM7XG4gIHJldHVybiAoaXNzdWVzKSA9PiB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGlzc3Vlcy5zbGljZSgwLCBtYXhJc3N1ZXNJbk1lc3NhZ2UpLm1hcChcbiAgICAgIChpc3N1ZSkgPT4gZ2V0TWVzc2FnZUZyb21ab2RJc3N1ZSh7XG4gICAgICAgIGlzc3VlLFxuICAgICAgICBpc3N1ZVNlcGFyYXRvcixcbiAgICAgICAgdW5pb25TZXBhcmF0b3IsXG4gICAgICAgIGluY2x1ZGVQYXRoXG4gICAgICB9KVxuICAgICkuam9pbihpc3N1ZVNlcGFyYXRvcik7XG4gICAgcmV0dXJuIHByZWZpeE1lc3NhZ2UobWVzc2FnZSwgcHJlZml4LCBwcmVmaXhTZXBhcmF0b3IpO1xuICB9O1xufVxuZnVuY3Rpb24gZ2V0TWVzc2FnZUZyb21ab2RJc3N1ZShwcm9wcykge1xuICBjb25zdCB7IGlzc3VlLCBpc3N1ZVNlcGFyYXRvciwgdW5pb25TZXBhcmF0b3IsIGluY2x1ZGVQYXRoIH0gPSBwcm9wcztcbiAgaWYgKGlzc3VlLmNvZGUgPT09IHpvZC5ab2RJc3N1ZUNvZGUuaW52YWxpZF91bmlvbikge1xuICAgIHJldHVybiBpc3N1ZS51bmlvbkVycm9ycy5yZWR1Y2UoKGFjYywgem9kRXJyb3IpID0+IHtcbiAgICAgIGNvbnN0IG5ld0lzc3VlcyA9IHpvZEVycm9yLmlzc3Vlcy5tYXAoXG4gICAgICAgIChpc3N1ZTIpID0+IGdldE1lc3NhZ2VGcm9tWm9kSXNzdWUoe1xuICAgICAgICAgIGlzc3VlOiBpc3N1ZTIsXG4gICAgICAgICAgaXNzdWVTZXBhcmF0b3IsXG4gICAgICAgICAgdW5pb25TZXBhcmF0b3IsXG4gICAgICAgICAgaW5jbHVkZVBhdGhcbiAgICAgICAgfSlcbiAgICAgICkuam9pbihpc3N1ZVNlcGFyYXRvcik7XG4gICAgICBpZiAoIWFjYy5pbmNsdWRlcyhuZXdJc3N1ZXMpKSB7XG4gICAgICAgIGFjYy5wdXNoKG5ld0lzc3Vlcyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIFtdKS5qb2luKHVuaW9uU2VwYXJhdG9yKTtcbiAgfVxuICBpZiAoaXNzdWUuY29kZSA9PT0gem9kLlpvZElzc3VlQ29kZS5pbnZhbGlkX2FyZ3VtZW50cykge1xuICAgIHJldHVybiBbXG4gICAgICBpc3N1ZS5tZXNzYWdlLFxuICAgICAgLi4uaXNzdWUuYXJndW1lbnRzRXJyb3IuaXNzdWVzLm1hcChcbiAgICAgICAgKGlzc3VlMikgPT4gZ2V0TWVzc2FnZUZyb21ab2RJc3N1ZSh7XG4gICAgICAgICAgaXNzdWU6IGlzc3VlMixcbiAgICAgICAgICBpc3N1ZVNlcGFyYXRvcixcbiAgICAgICAgICB1bmlvblNlcGFyYXRvcixcbiAgICAgICAgICBpbmNsdWRlUGF0aFxuICAgICAgICB9KVxuICAgICAgKVxuICAgIF0uam9pbihpc3N1ZVNlcGFyYXRvcik7XG4gIH1cbiAgaWYgKGlzc3VlLmNvZGUgPT09IHpvZC5ab2RJc3N1ZUNvZGUuaW52YWxpZF9yZXR1cm5fdHlwZSkge1xuICAgIHJldHVybiBbXG4gICAgICBpc3N1ZS5tZXNzYWdlLFxuICAgICAgLi4uaXNzdWUucmV0dXJuVHlwZUVycm9yLmlzc3Vlcy5tYXAoXG4gICAgICAgIChpc3N1ZTIpID0+IGdldE1lc3NhZ2VGcm9tWm9kSXNzdWUoe1xuICAgICAgICAgIGlzc3VlOiBpc3N1ZTIsXG4gICAgICAgICAgaXNzdWVTZXBhcmF0b3IsXG4gICAgICAgICAgdW5pb25TZXBhcmF0b3IsXG4gICAgICAgICAgaW5jbHVkZVBhdGhcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICBdLmpvaW4oaXNzdWVTZXBhcmF0b3IpO1xuICB9XG4gIGlmIChpbmNsdWRlUGF0aCAmJiBpc05vbkVtcHR5QXJyYXkoaXNzdWUucGF0aCkpIHtcbiAgICBpZiAoaXNzdWUucGF0aC5sZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGlkZW50aWZpZXIgPSBpc3N1ZS5wYXRoWzBdO1xuICAgICAgaWYgKHR5cGVvZiBpZGVudGlmaWVyID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHJldHVybiBgJHtpc3N1ZS5tZXNzYWdlfSBhdCBpbmRleCAke2lkZW50aWZpZXJ9YDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGAke2lzc3VlLm1lc3NhZ2V9IGF0IFwiJHtqb2luUGF0aChpc3N1ZS5wYXRoKX1cImA7XG4gIH1cbiAgcmV0dXJuIGlzc3VlLm1lc3NhZ2U7XG59XG5mdW5jdGlvbiBwcmVmaXhNZXNzYWdlKG1lc3NhZ2UsIHByZWZpeCwgcHJlZml4U2VwYXJhdG9yKSB7XG4gIGlmIChwcmVmaXggIT09IG51bGwpIHtcbiAgICBpZiAobWVzc2FnZS5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gW3ByZWZpeCwgbWVzc2FnZV0uam9pbihwcmVmaXhTZXBhcmF0b3IpO1xuICAgIH1cbiAgICByZXR1cm4gcHJlZml4O1xuICB9XG4gIGlmIChtZXNzYWdlLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfVxuICByZXR1cm4gUFJFRklYO1xufVxuXG4vLyBsaWIvZnJvbVpvZElzc3VlLnRzXG5mdW5jdGlvbiBmcm9tWm9kSXNzdWUoaXNzdWUsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCBtZXNzYWdlQnVpbGRlciA9IGNyZWF0ZU1lc3NhZ2VCdWlsZGVyRnJvbU9wdGlvbnMob3B0aW9ucyk7XG4gIGNvbnN0IG1lc3NhZ2UgPSBtZXNzYWdlQnVpbGRlcihbaXNzdWVdKTtcbiAgcmV0dXJuIG5ldyBWYWxpZGF0aW9uRXJyb3IobWVzc2FnZSwgeyBjYXVzZTogbmV3IHpvZDIuWm9kRXJyb3IoW2lzc3VlXSkgfSk7XG59XG5mdW5jdGlvbiBjcmVhdGVNZXNzYWdlQnVpbGRlckZyb21PcHRpb25zKG9wdGlvbnMpIHtcbiAgaWYgKFwibWVzc2FnZUJ1aWxkZXJcIiBpbiBvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMubWVzc2FnZUJ1aWxkZXI7XG4gIH1cbiAgcmV0dXJuIGNyZWF0ZU1lc3NhZ2VCdWlsZGVyKG9wdGlvbnMpO1xufVxuXG4vLyBsaWIvZXJyb3JNYXAudHNcbnZhciBlcnJvck1hcCA9IChpc3N1ZSwgY3R4KSA9PiB7XG4gIGNvbnN0IGVycm9yID0gZnJvbVpvZElzc3VlKHtcbiAgICAuLi5pc3N1ZSxcbiAgICAvLyBmYWxsYmFjayB0byB0aGUgZGVmYXVsdCBlcnJvciBtZXNzYWdlXG4gICAgLy8gd2hlbiBpc3N1ZSBkb2VzIG5vdCBoYXZlIGEgbWVzc2FnZVxuICAgIG1lc3NhZ2U6IGlzc3VlLm1lc3NhZ2UgPz8gY3R4LmRlZmF1bHRFcnJvclxuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlXG4gIH07XG59O1xuXG4vLyBsaWIvZnJvbVpvZEVycm9yLnRzXG5mdW5jdGlvbiBmcm9tWm9kRXJyb3Ioem9kRXJyb3IsIG9wdGlvbnMgPSB7fSkge1xuICBpZiAoIWlzWm9kRXJyb3JMaWtlKHpvZEVycm9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICBgSW52YWxpZCB6b2RFcnJvciBwYXJhbTsgZXhwZWN0ZWQgaW5zdGFuY2Ugb2YgWm9kRXJyb3IuIERpZCB5b3UgbWVhbiB0byB1c2UgdGhlIFwiJHtmcm9tRXJyb3IubmFtZX1cIiBtZXRob2QgaW5zdGVhZD9gXG4gICAgKTtcbiAgfVxuICByZXR1cm4gZnJvbVpvZEVycm9yV2l0aG91dFJ1bnRpbWVDaGVjayh6b2RFcnJvciwgb3B0aW9ucyk7XG59XG5mdW5jdGlvbiBmcm9tWm9kRXJyb3JXaXRob3V0UnVudGltZUNoZWNrKHpvZEVycm9yLCBvcHRpb25zID0ge30pIHtcbiAgY29uc3Qgem9kSXNzdWVzID0gem9kRXJyb3IuZXJyb3JzO1xuICBsZXQgbWVzc2FnZTtcbiAgaWYgKGlzTm9uRW1wdHlBcnJheSh6b2RJc3N1ZXMpKSB7XG4gICAgY29uc3QgbWVzc2FnZUJ1aWxkZXIgPSBjcmVhdGVNZXNzYWdlQnVpbGRlckZyb21PcHRpb25zMihvcHRpb25zKTtcbiAgICBtZXNzYWdlID0gbWVzc2FnZUJ1aWxkZXIoem9kSXNzdWVzKTtcbiAgfSBlbHNlIHtcbiAgICBtZXNzYWdlID0gem9kRXJyb3IubWVzc2FnZTtcbiAgfVxuICByZXR1cm4gbmV3IFZhbGlkYXRpb25FcnJvcihtZXNzYWdlLCB7IGNhdXNlOiB6b2RFcnJvciB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZU1lc3NhZ2VCdWlsZGVyRnJvbU9wdGlvbnMyKG9wdGlvbnMpIHtcbiAgaWYgKFwibWVzc2FnZUJ1aWxkZXJcIiBpbiBvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMubWVzc2FnZUJ1aWxkZXI7XG4gIH1cbiAgcmV0dXJuIGNyZWF0ZU1lc3NhZ2VCdWlsZGVyKG9wdGlvbnMpO1xufVxuXG4vLyBsaWIvdG9WYWxpZGF0aW9uRXJyb3IudHNcbnZhciB0b1ZhbGlkYXRpb25FcnJvciA9IChvcHRpb25zID0ge30pID0+IChlcnIpID0+IHtcbiAgaWYgKGlzWm9kRXJyb3JMaWtlKGVycikpIHtcbiAgICByZXR1cm4gZnJvbVpvZEVycm9yV2l0aG91dFJ1bnRpbWVDaGVjayhlcnIsIG9wdGlvbnMpO1xuICB9XG4gIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgIHJldHVybiBuZXcgVmFsaWRhdGlvbkVycm9yKGVyci5tZXNzYWdlLCB7IGNhdXNlOiBlcnIgfSk7XG4gIH1cbiAgcmV0dXJuIG5ldyBWYWxpZGF0aW9uRXJyb3IoXCJVbmtub3duIGVycm9yXCIpO1xufTtcblxuLy8gbGliL2Zyb21FcnJvci50c1xuZnVuY3Rpb24gZnJvbUVycm9yKGVyciwgb3B0aW9ucyA9IHt9KSB7XG4gIHJldHVybiB0b1ZhbGlkYXRpb25FcnJvcihvcHRpb25zKShlcnIpO1xufVxuZXhwb3J0IHtcbiAgVmFsaWRhdGlvbkVycm9yLFxuICBjcmVhdGVNZXNzYWdlQnVpbGRlcixcbiAgZXJyb3JNYXAsXG4gIGZyb21FcnJvcixcbiAgZnJvbVpvZEVycm9yLFxuICBmcm9tWm9kSXNzdWUsXG4gIGlzVmFsaWRhdGlvbkVycm9yLFxuICBpc1ZhbGlkYXRpb25FcnJvckxpa2UsXG4gIGlzWm9kRXJyb3JMaWtlLFxuICB0b1ZhbGlkYXRpb25FcnJvclxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm1qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/zod-validation-error/dist/index.mjs\n");

/***/ })

};
;