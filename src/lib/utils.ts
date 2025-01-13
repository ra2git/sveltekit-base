import { orderBy } from "lodash-es";

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