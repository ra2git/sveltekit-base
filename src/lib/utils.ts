import { orderBy } from "lodash-es";
import Fuse from "fuse.js";
import data from "../data/quotas.json";

export interface Quota {
    name: string;
    limit: number;
    is_enabled: boolean;
    project_id: string;
    id: string;
}

export function sortData(data: Quota[], sort: Record<string, number>): Quota[] {
    const keys = Object.entries(sort)
        .filter(([, value]) => {
            return value > 0;
        })
        .map(([key]) => {
            return key;
        });
    const output = orderBy(
        data,
        keys,
        keys.map((ele) => {
            return sort[ele] === 1 ? "asc" : "desc";
        }),
    );
    return output;
}

export function filterData(input: Quota[], query: string): Quota[] {
    const fuse = new Fuse(input, { keys: ["name"] });
    return query === ""
        ? input
        : fuse.search(query).map((ele) => {
            return ele.item;
        });
}

export async function fetchQuotas(): Promise<Quota[]> {
    const output = new Promise<Quota[]>((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 3000);
    });
    return output;
}