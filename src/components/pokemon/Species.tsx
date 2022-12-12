export interface Species {
    base_happiness: number;
    capture_rate: number;
    color: EggGroupsEntityOrLanguageOrVersionOrAreaOrPokedexOrPokemonOrColorOrGenerationOrGrowthRateOrHabitatOrShape;
    egg_groups?: (EggGroupsEntityOrLanguageOrVersionOrAreaOrPokedexOrPokemonOrColorOrGenerationOrGrowthRateOrHabitatOrShape)[] | null;
    evolution_chain: EvolutionChain;
    evolves_from_species?: null;
    flavor_text_entries?: (FlavorTextEntriesEntity)[] | null;
    form_descriptions?: (null)[] | null;
    forms_switchable: boolean;
    gender_rate: number;
    genera?: (GeneraEntity)[] | null;
    generation: EggGroupsEntityOrLanguageOrVersionOrAreaOrPokedexOrPokemonOrColorOrGenerationOrGrowthRateOrHabitatOrShape;
    growth_rate: EggGroupsEntityOrLanguageOrVersionOrAreaOrPokedexOrPokemonOrColorOrGenerationOrGrowthRateOrHabitatOrShape;
    habitat: EggGroupsEntityOrLanguageOrVersionOrAreaOrPokedexOrPokemonOrColorOrGenerationOrGrowthRateOrHabitatOrShape;
    has_gender_differences: boolean;
    hatch_counter: number;
    id: number;
    is_baby: boolean;
    is_legendary: boolean;
    is_mythical: boolean;
    name: string;
    names?: (NamesEntity)[] | null;
    order: number;
    pal_park_encounters?: (PalParkEncountersEntity)[] | null;
    pokedex_numbers?: (PokedexNumbersEntity)[] | null;
    shape: EggGroupsEntityOrLanguageOrVersionOrAreaOrPokedexOrPokemonOrColorOrGenerationOrGrowthRateOrHabitatOrShape;
    varieties?: (VarietiesEntity)[] | null;
  }
  export interface EggGroupsEntityOrLanguageOrVersionOrAreaOrPokedexOrPokemonOrColorOrGenerationOrGrowthRateOrHabitatOrShape {
    name: string;
    url: string;
  }
  export interface EvolutionChain {
    url: string;
  }
  export interface FlavorTextEntriesEntity {
    flavor_text: string;
    language: EggGroupsEntityOrLanguageOrVersionOrAreaOrPokedexOrPokemonOrColorOrGenerationOrGrowthRateOrHabitatOrShape;
    version: EggGroupsEntityOrLanguageOrVersionOrAreaOrPokedexOrPokemonOrColorOrGenerationOrGrowthRateOrHabitatOrShape;
  }
  export interface GeneraEntity {
    genus: string;
    language: EggGroupsEntityOrLanguageOrVersionOrAreaOrPokedexOrPokemonOrColorOrGenerationOrGrowthRateOrHabitatOrShape;
  }
  export interface NamesEntity {
    language: EggGroupsEntityOrLanguageOrVersionOrAreaOrPokedexOrPokemonOrColorOrGenerationOrGrowthRateOrHabitatOrShape;
    name: string;
  }
  export interface PalParkEncountersEntity {
    area: EggGroupsEntityOrLanguageOrVersionOrAreaOrPokedexOrPokemonOrColorOrGenerationOrGrowthRateOrHabitatOrShape;
    base_score: number;
    rate: number;
  }
  export interface PokedexNumbersEntity {
    entry_number: number;
    pokedex: EggGroupsEntityOrLanguageOrVersionOrAreaOrPokedexOrPokemonOrColorOrGenerationOrGrowthRateOrHabitatOrShape;
  }
  export interface VarietiesEntity {
    is_default: boolean;
    pokemon: EggGroupsEntityOrLanguageOrVersionOrAreaOrPokedexOrPokemonOrColorOrGenerationOrGrowthRateOrHabitatOrShape;
  }
  