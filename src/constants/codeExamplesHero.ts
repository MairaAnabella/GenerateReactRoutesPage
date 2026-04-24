export type CodeLine = {
  comment?: string
  spans: {
    text: string
    className?: string
  }[]
}

export type CodeExample = {
  filename: string
  lines: CodeLine[]
}

export const laravelExample: CodeExample = {
  filename: "laravel-react-route-bridge.ts",
  lines: [
    {
      comment: "Laravel Routes",
      spans: [
        { text: "Route::", className: "text-neutral-50" },
        { text: "apiResource", className: "text-red-400" },
        { text: "('users', UserController::", className: "text-blue-400" },
        { text: "class", className: "text-neutral-50" },
        { text: ");", className: "text-blue-400" },
      ]
    },
    {
      comment: "Generated React",
      spans: [
        { text: "export const ", className: "text-blue-400" },
        { text: "api = {", className: "text-neutral-50" },
        { text: "\n" },
        { text: "  users ", className: "text-blue-400" },
        { text: ": {", className: "text-neutral-50" },
        { text: "\n" },
        { text: "    get", className: "text-blue-400" },
        { text: ": () => {", className: "text-neutral-50" },
        { text: "axios", className: "text-emerald-300" },
        { text: ".", className: "text-neutral-50" },
        { text: "get", className: "text-emerald-200" },
        { text: "(", className: "text-yellow-300" },
        { text: "`/user/register`", className: "text-fuchsia-400" },
        { text: ",", className: "text-neutral-50" },
        { text: "data", className: "text-fuchsia-300" },
        { text: ")", className: "text-yellow-300" },
        { text: ",", className: "text-neutral-50" },
        { text: "\n" },
        { text: "    }", className: "text-neutral-50" },
        { text: "\n" },
        { text: "  }", className: "text-neutral-50" },      
      ]
    }
  ]
}