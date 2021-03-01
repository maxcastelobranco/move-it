import useSWR from "swr";
import { User } from "../context/providers/ChallengesProvider";
import { fetcher } from "../services/api";

const LIMIT = 20;

export const useUsers = () => {
  const { data: users, error } = useSWR<User[]>(
    `/users?_sort=currentExperience&_order=desc&_limit=${LIMIT}`,
    fetcher
  );

  return {
    users,
    error,
    isLoading: !users && !error,
  };
};
