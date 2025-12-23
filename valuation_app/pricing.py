from __future__ import annotations

from dataclasses import asdict
from typing import Dict, Tuple

from .models import PropertyFeatures

BASE_PRICE_PER_M2 = {
    "prime": 45000,
    "intermedio": 30000,
    "emergente": 20000,
}

PROPERTY_TYPE_FACTORS = {
    "casa": 1.05,
    "departamento": 1.0,
    "duplex": 1.1,
}

CONSERVATION_FACTORS = {
    "premium": 1.15,
    "estandar": 1.0,
    "requiere_renovacion": 0.85,
}

DISTANCE_FACTORS = [
    (150, 1.08),
    (400, 1.02),
    (700, 1.0),
    (float("inf"), 0.96),
]

BEDROOM_PREMIUM = 0.03
BATHROOM_PREMIUM = 0.04
PARKING_PREMIUM = 0.02


def _distance_factor(distance_m: float) -> float:
    for max_distance, factor in DISTANCE_FACTORS:
        if distance_m <= max_distance:
            return factor
    return 1.0


def calculate_price(features: PropertyFeatures) -> Tuple[int, Dict[str, float]]:
    """
    Devuelve el precio estimado y un desglose de factores aplicados.

    El cálculo usa un precio base por m2 según el nivel de la ciudad y aplica
    multiplicadores por tipo de propiedad, estado de conservación, distancia a
    amenidades y cantidad de recámaras, baños y estacionamientos.
    """

    base_price = BASE_PRICE_PER_M2[features.city_tier] * features.area_m2
    price = base_price

    multipliers: Dict[str, float] = {
        "tipo_propiedad": PROPERTY_TYPE_FACTORS[features.property_type],
        "conservacion": CONSERVATION_FACTORS[features.conservation],
        "amenidades_cercanas": _distance_factor(features.distance_to_amenities_m),
    }

    if features.has_amenities:
        multipliers["amenidades_en_site"] = 1.05

    for key, factor in multipliers.items():
        price *= factor

    # Prima por recámaras/baños/estacionamientos
    additions = (
        price * BEDROOM_PREMIUM * features.bedrooms
        + price * BATHROOM_PREMIUM * features.bathrooms
        + price * PARKING_PREMIUM * features.parking_spots
    )
    price += additions

    return int(price), {
        "datos": asdict(features),
        "precio_base": base_price,
        "multiplicadores": multipliers,
        "adiciones": additions,
    }
