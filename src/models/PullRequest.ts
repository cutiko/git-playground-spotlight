import {User} from "@/models/User";
import {Urls} from "@/models/Urls";

export interface PullRequest {
  id: string
  closed_at: string
  user: User
  pull_request: Urls
}
