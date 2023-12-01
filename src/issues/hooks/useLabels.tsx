import { gitgubApi } from "../../api/githubApi"
import { sleep } from "../../helper/sleep"
import { Label } from "../interfaces/label"
import { useQuery } from "@tanstack/react-query"

export const getLabels = async (): Promise<Label[]> => {
  await sleep(2)
  const { data } = await gitgubApi.get<Label[]>("/labels?per_page=100")
  return data
}

export function useLabels() {
  const labelQuery = useQuery({
    queryKey: ["labels"],
    queryFn: getLabels,
    staleTime: 1000 * 60 * 60,
    placeholderData: [
      {
        id: 725156255,
        node_id: "MDU6TGFiZWw3MjUxNTYyNTU=",
        url: "https://api.github.com/repos/facebook/react/labels/good%20first%20issue%20(taken)",
        name: "good first issue (taken)",
        color: "b60205",
        default: false,
      },
      {
        id: 717031390,
        node_id: "MDU6TGFiZWw3MTcwMzEzOTA=",
        url: "https://api.github.com/repos/facebook/react/labels/good%20first%20issue",
        name: "good first issue",
        color: "6ce26a",
        default: true,
      },
    ],
    // initialData: [],
  })

  return labelQuery
}
