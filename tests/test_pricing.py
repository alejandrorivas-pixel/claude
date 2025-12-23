import pytest

from valuation_app.models import PropertyFeatures
from valuation_app.pricing import calculate_price


def test_calculate_price_includes_multipliers_and_additions():
    features = PropertyFeatures(
        property_type="casa",
        city_tier="prime",
        area_m2=100,
        bedrooms=3,
        bathrooms=2,
        parking_spots=1,
        conservation="premium",
        has_amenities=True,
        distance_to_amenities_m=100,
    )

    price, breakdown = calculate_price(features)

    assert price > 0
    assert breakdown["precio_base"] == 45000 * 100
    assert "tipo_propiedad" in breakdown["multiplicadores"]
    assert "amenidades_en_site" in breakdown["multiplicadores"]
    assert breakdown["adiciones"] > 0


def test_invalid_property_type_raises_value_error():
    with pytest.raises(ValueError):
        PropertyFeatures(
            property_type="oficina",
            city_tier="prime",
            area_m2=80,
            bedrooms=2,
            bathrooms=1,
            parking_spots=1,
        )
