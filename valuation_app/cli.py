import argparse
import json
from pathlib import Path

from .models import PropertyFeatures
from .pricing import calculate_price


def parse_arguments() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Calculadora simple de valuación inmobiliaria",
        formatter_class=argparse.ArgumentDefaultsHelpFormatter,
    )
    parser.add_argument("property_type", choices=["casa", "departamento", "duplex"], help="Tipo de propiedad")
    parser.add_argument("city_tier", choices=["prime", "intermedio", "emergente"], help="Nivel de la ciudad")
    parser.add_argument("area_m2", type=float, help="Superficie construida en metros cuadrados")
    parser.add_argument("bedrooms", type=int, help="Recámaras")
    parser.add_argument("bathrooms", type=int, help="Baños completos")
    parser.add_argument("parking_spots", type=int, help="Cajones de estacionamiento")
    parser.add_argument("--conservation", choices=["premium", "estandar", "requiere_renovacion"], default="estandar")
    parser.add_argument("--amenities", action="store_true", help="¿El desarrollo cuenta con amenidades propias?")
    parser.add_argument("--distance", type=float, default=500.0, help="Distancia en metros a la amenidad más cercana")
    parser.add_argument("--notes", nargs="*", default=[], help="Notas adicionales que quieras asociar al cálculo")
    parser.add_argument("--output", type=Path, help="Ruta para guardar el desglose en JSON")
    return parser.parse_args()


def main() -> int:
    args = parse_arguments()
    features = PropertyFeatures(
        property_type=args.property_type,
        city_tier=args.city_tier,
        area_m2=args.area_m2,
        bedrooms=args.bedrooms,
        bathrooms=args.bathrooms,
        parking_spots=args.parking_spots,
        conservation=args.conservation,
        has_amenities=args.amenities,
        distance_to_amenities_m=args.distance,
        notes=args.notes,
    )

    price, breakdown = calculate_price(features)

    output_lines = [
        f"Precio estimado: ${price:,.0f} MXN",
        "\nDesglose:",
        f"  Precio base (m2): ${breakdown['precio_base']:,.0f}",
    ]

    for key, factor in breakdown["multiplicadores"].items():
        output_lines.append(f"  Multiplicador {key.replace('_', ' ')}: x{factor:.2f}")

    output_lines.append(f"  Adiciones por habitaciones/baños/estacionamiento: ${breakdown['adiciones']:,.0f}")

    print("\n".join(output_lines))

    if args.output:
        args.output.parent.mkdir(parents=True, exist_ok=True)
        args.output.write_text(json.dumps({"precio_estimado": price, **breakdown}, indent=2), encoding="utf-8")
        print(f"\nDesglose guardado en {args.output}")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
