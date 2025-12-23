from dataclasses import dataclass, field
from typing import List


@dataclass
class PropertyFeatures:
    """
    Representa las características básicas de una propiedad residencial.

    Los valores numéricos usan unidades amigables (m2 para superficie, cantidad
    de cuartos, etc.) y los atributos categóricos se restringen a opciones
    predefinidas para mantener la coherencia del cálculo.
    """

    property_type: str
    city_tier: str
    area_m2: float
    bedrooms: int
    bathrooms: int
    parking_spots: int
    conservation: str = "estandar"
    has_amenities: bool = False
    distance_to_amenities_m: float = 500.0
    notes: List[str] = field(default_factory=list)

    def __post_init__(self) -> None:
        self.property_type = self.property_type.lower()
        self.city_tier = self.city_tier.lower()
        self.conservation = self.conservation.lower()
        self._validate()

    def _validate(self) -> None:
        allowed_property_types = {"casa", "departamento", "duplex"}
        allowed_tiers = {"prime", "intermedio", "emergente"}
        allowed_conservation = {"premium", "estandar", "requiere_renovacion"}

        if self.property_type not in allowed_property_types:
            raise ValueError(f"Tipo de propiedad no válido: {self.property_type}")
        if self.city_tier not in allowed_tiers:
            raise ValueError(f"Nivel de ciudad no válido: {self.city_tier}")
        if self.conservation not in allowed_conservation:
            raise ValueError(f"Estado de conservación no válido: {self.conservation}")
        if self.area_m2 <= 0:
            raise ValueError("El área debe ser mayor a 0 m2")
        if self.bedrooms < 0 or self.bathrooms < 0 or self.parking_spots < 0:
            raise ValueError("Las cantidades de recámaras, baños y estacionamientos no pueden ser negativas")
        if self.distance_to_amenities_m < 0:
            raise ValueError("La distancia a amenidades no puede ser negativa")
