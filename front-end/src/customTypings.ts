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

export interface settlement {
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

export interface settlements { [key: number]: settlement}

export interface createSettlementObject {
    name: string
    type: number
    x_cordinate: number
    y_cordinate: number
    created_year: number
}

export interface road {
    id: number,
    world_id: number,
    x_cordinate: number,
    y_cordinate: number,
    distance: number | null,
    createdAt: Date,
    updatedAt: Date,
    start: settlements,
    end: settlements,
}
export interface roads { [key: number]: road }
