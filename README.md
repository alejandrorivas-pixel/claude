# App de valuación inmobiliaria

Pequeña utilidad en línea de comandos para estimar el valor de una propiedad residencial con un modelo heurístico fácil de ajustar.

## Requisitos

- Python 3.10+

## Instalación

No hay dependencias externas. Puedes clonar el repositorio y ejecutar directamente el comando:

```bash
python -m valuation_app.cli casa prime 120 3 2 2 --conservation premium --amenities --distance 180
```

## Parámetros principales

- **property_type**: `casa`, `departamento` o `duplex`.
- **city_tier**: `prime`, `intermedio` o `emergente` (refleja nivel de mercado de la ciudad).
- **area_m2**: superficie construida en metros cuadrados.
- **bedrooms**, **bathrooms**, **parking_spots**: cantidades enteras.
- Flags opcionales: `--conservation`, `--amenities`, `--distance`, `--notes`, `--output`.

## Salida

El programa imprime el precio estimado y un desglose de multiplicadores y adiciones. Si se proporciona `--output`, guarda el resultado en JSON.

## Ejemplos

Calcular una casa premium en zona prime:

```bash
python -m valuation_app.cli casa prime 240 4 3 2 --conservation premium --amenities --distance 120
```

Guardar el desglose en archivo:

```bash
python -m valuation_app.cli departamento intermedio 95 2 2 1 --distance 350 --output resultados/caso1.json
```
