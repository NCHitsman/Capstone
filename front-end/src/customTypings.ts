export interface worlds {
    id: number,
    name: string,
    owner_id: number,
    world_size: number,
    map_seed: number | null,
    hour_tick: number | null,
    created_tick: number,
    createdAt: Date,
    updatedAt: Date
}
