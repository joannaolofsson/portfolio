// Helpers 

import { CardDeckCard } from "./iconmap";

export const moveCardBetweenZones = (
  card: CardDeckCard,
  toZone: string,
  zones: Record<string, CardDeckCard[]>
) => {
  return {
    ...zones,
    [toZone]: [...zones[toZone], card],
  };
};

