#!/usr/bin/env python3
"""
Image optimization helper for Sam's Interiors

Generates WebP variants and resized copies for responsive srcset usage.

Usage:
    python scripts/optimize_images.py --src assets/images --out assets/images/generated --sizes 400 800 1200 1920

Requires Pillow: pip install pillow

This script keeps the original files untouched and writes converted/resized files into the out directory.
"""
import os
import argparse
from PIL import Image


def ensure_dir(p):
    if not os.path.exists(p):
        os.makedirs(p)


def process_image(src_path, out_dir, sizes, quality=80):
    try:
        with Image.open(src_path) as img:
            img = img.convert('RGB')
            base = os.path.splitext(os.path.basename(src_path))[0]
            for w in sizes:
                ratio = w / img.width
                h = int(img.height * ratio)
                resized = img.resize((w, h), Image.LANCZOS)

                # Save JPEG resize
                out_jpg = os.path.join(out_dir, f"{base}-{w}.jpg")
                resized.save(out_jpg, 'JPEG', quality=quality, optimize=True)

                # Save WebP
                out_webp = os.path.join(out_dir, f"{base}-{w}.webp")
                resized.save(out_webp, 'WEBP', quality=quality, method=6)

            # Also save original-sized webp
            out_webp_orig = os.path.join(out_dir, f"{base}.webp")
            img.save(out_webp_orig, 'WEBP', quality=quality, method=6)
            print(f"Processed: {src_path}")
    except Exception as e:
        print(f"Error processing {src_path}: {e}")


def find_images(src_dir):
    exts = ('.jpg', '.jpeg', '.png')
    for root, _, files in os.walk(src_dir):
        for f in files:
            if f.lower().endswith(exts):
                yield os.path.join(root, f)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--src', required=True, help='Source images folder')
    parser.add_argument('--out', required=True, help='Output folder for generated images')
    parser.add_argument('--sizes', nargs='+', type=int, default=[400,800,1200,1920], help='Width sizes for srcset')
    args = parser.parse_args()

    ensure_dir(args.out)

    for img in find_images(args.src):
        try:
            process_image(img, args.out, args.sizes)
        except Exception as e:
            print('skip', img, e)


if __name__ == '__main__':
    main()
