import axios from "axios"

export const gitgubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    Authorization:
      "Bearer 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",
  },
})
