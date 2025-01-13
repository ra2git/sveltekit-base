export interface Quota {
    name: string;
    limit: number;
    is_enabled: boolean;
    project_id: string;
    id: string;
}