import sys
from pathlib import Path

# Asegura que el paquete local se pueda importar sin instalación previa
ROOT = Path(__file__).resolve().parents[1]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))
