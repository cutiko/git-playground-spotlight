import {PullRequest} from "@/models/PullRequest";

export interface ResponseWrapper {
  total_count: number
  items: PullRequest[]
}
