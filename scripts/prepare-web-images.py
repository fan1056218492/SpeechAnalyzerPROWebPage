"""Create web assets from real App captures; never redraw the application UI."""
import argparse
from pathlib import Path
from PIL import Image
parser = argparse.ArgumentParser()
parser.add_argument('--app-marketing-dir', type=Path, default=Path(__file__).resolve().parents[2] / 'SpeechAnalyzer PRO/Marketing/AppStore/1.2')
args = parser.parse_args()
root = Path(__file__).resolve().parents[1]
for locale in ['nl', 'da', 'fi', 'nb', 'sv', 'pl', 'cs', 'tr']:
    source = (root / 'build/marketing' if locale in ['pl', 'cs', 'tr'] else args.app_marketing_dir / 'output') / locale
    files = sorted(source.glob('0*.png'))
    if len(files) != 6:
        raise ValueError(f'Expected six real-source marketing images: {source}')
    target = root / 'assets/marketing/1.2' / locale
    target.mkdir(parents=True, exist_ok=True)
    for file in files:
        with Image.open(file) as image:
            image.convert('RGB').resize((1600, 1000), Image.Resampling.LANCZOS).save(target / f'{file.stem}.webp', quality=86, method=6)
    print(f'{locale}: 6 localized web images')
