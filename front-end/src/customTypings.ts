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

export interface settlements {
    id: number,
    name: string,
    world_id: number,
    x_cordinate: number,
    y_cordinate: number,
    type: number,
    population: number,
    wealth: number,
    state: string,
    created_tick: number,
    createdAt: Date,
    updatedAt: Date
}

export interface settlementObjectT {
    settlementName: string,
    settlementType: string,
    createdYear: string
}

export interface roads {
    id: number,
    world_id: number,
    settlement_start: number,
    settlement_end: number,
    distance: number | null,
    createdAt: Date,
    updatedAt: Date
}
