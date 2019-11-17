//Everything define in a namespace is in its own scope, which means it doesnt affects the global scope. To consume variables or functions within a namespace , use [namespaceName].[variableName] or [namespaceName].[methodName]. In order to consume the namespace variable/methods from another file, will need to export it different files can share same namespace. 

namespace Maths {
    export function calcRectangle(width: number, length: number) {
        return width * length
    }
}


